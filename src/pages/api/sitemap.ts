import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import client from '../../lib/sanity';
import groq from 'groq';
import { SiteMapUrls } from '../../@types/SiteMapUrls';
import { HealthGoalProps } from '../../@types/HealthGoalProps';
import { DietarySupplementCategoryProps } from '../../@types/DietarySupplementCategoryProps';
import sanity from '../../lib/sanity';

export default async function sitemap(req: Request, res: any) {
  const links: SiteMapUrls[] = [
    { url: '/', changefreq: 'weekly', priority: 0.7 },
    { url: '/account-details', changefreq: 'weekly', priority: 0.7 },
    { url: '/checkout', changefreq: 'weekly', priority: 0.7 },
    { url: '/checkout/failure', changefreq: 'weekly', priority: 0.7 },
    { url: '/checkout/success', changefreq: 'weekly', priority: 0.7 },
    { url: '/dashboard', changefreq: 'weekly', priority: 0.7 },
    { url: '/about-us', changefreq: 'weekly', priority: 0.7 },
    { url: '/cookies-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/faq', changefreq: 'weekly', priority: 0.7 },
    { url: '/how-it-works', changefreq: 'weekly', priority: 0.7 },
    { url: '/legal-notice', changefreq: 'weekly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
    { url: '/dietary-supplements', changefreq: 'weekly', priority: 0.7 },
    { url: '/health-goals', changefreq: 'weekly', priority: 0.7 },
    { url: '/studies', changefreq: 'weekly', priority: 0.7 },
  ];

  // Getting dinamic links from healthGoals
  const healthGoals = await sanity.fetch(groq`
        *[_type == "healthgoal"]{
        _id,
        slug,
        title,
        description,
        children,
        dietarySupplements,
        seo,
        relations
      } | order(publishedAt desc)
    `);

  healthGoals.map(({ slug, children }: HealthGoalProps) => {
    links.push({
      url: `/health-goals/${slug}`,
      changefreq: 'daily',
      priority: 0.7,
    });
    if (children) {
      children.map((item) => {
        links.push({
          url: `/health-goals/${slug}/${item.slug}`,
          changefreq: 'daily',
          priority: 0.7,
        });
      });
    }
  });

  // Getting dinamic links from categories
  const categories = await sanity.fetch(
    groq`
        *[_type == "sleepSupplement"]{
        _id,
        color,
        description,
        name,
        slug,
        dietarySupplements,
        seo
      } | order(publishedAt desc)
    `,
  );
  if (categories) {
    categories.map(({ slug, dietarySupplements }: DietarySupplementCategoryProps) => {
      links.push({
        url: `/dietary-supplements/${slug}`,
        changefreq: 'daily',
        priority: 0.7,
      });
      if (dietarySupplements) {
        dietarySupplements.map((item) => {
          links.push({
            url: `/dietary-supplements/${slug}/${item.slug}`,
            changefreq: 'daily',
            priority: 0.7,
          });
        });
      }
    });
  }

  // Getting dinamic links from posts
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]{
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "content": body
      } | order(publishedAt desc)
    `);

  if (posts) {
    posts.map(({ slug, publishedAt }: any) => {
      links.push({
        url: `/blog/${slug.current}`,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: publishedAt,
      });
    });
  }

  const stream = new SitemapStream({ hostname: 'https://www.sleepie.life' });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlStream = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    return data.toString();
  });

  // @ts-ignore
  res.end(xmlStream);
}
