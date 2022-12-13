import React from 'react';
import type { GetServerSideProps } from 'next';
import { Box, Heading, Text, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';

const LegalNotice = () => {
  const title = 'Legal notice';
  const description = '';

  return (
    <Page title={title} description={description}>
      <PageTitle title={title} breadcrumbs={['Home', title]} />
      <Box w="100%" maxWidth={1200} mx="auto">
        <Text textAlign="justify" mb={4}>
          HEALTH PROTECTION EUROPE S.L., the person responsible for the website, hereinafter the
          CONTROLLER, makes this document available to users, which is intended to comply with the
          obligations provided in Act 34/2002 of 11 July, on Information Society and Electronic
          Commerce Services (LSSICE), Spanish Official State Journal No. 166, as well as informing
          all website users of the conditions of use.
        </Text>
        <Text textAlign="justify" mb={4}>
          Any person who accesses this website acquires the status of user, and as such undertakes
          to strictly observe and comply with the provisions provided herein, as well as any other
          applicable legal clause.
        </Text>
        <Text textAlign="justify" mb={4}>
          HEALTH PROTECTION EUROPE S.L. reserves the right to modify any type of information that
          may appear on the website, and is not obliged to give prior notice or inform users of such
          obligations, with publication on the website of HEALTH PROTECTION EUROPE S.L. being
          understood as sufficient.
        </Text>
        <Heading size="md" mt={8} mb={2}>
          1. IDENTIFICATION DATA
        </Heading>
        <List>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">
              Domain name:{' '}
              <Link
                href="https://www.healthprotection.com/"
                target="_blank"
                textDecor="underline"
                _hover={{ textDecor: 'none' }}
              >
                healthprotection.com
              </Link>
            </Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">Commercial name: HEALTH PROTECTION EUROPE S.L.</Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">Company name: HEALTH PROTECTION EUROPE S.L.</Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">TIN: B67577023</Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">
              Registered address: AVD CAN BELLET 43 (4 C) , 08174 SANT CUGAT DEL VALLÈS (BARCELONA)
            </Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">Telephone: 699810467</Text>
          </ListItem>
          <ListItem display="flex">
            <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
            <Text textAlign="justify">
              Email:{' '}
              <Link
                href="mailto:vidal@healthprotection.com"
                textDecor="underline"
                _hover={{ textDecor: 'none' }}
              >
                vidal@healthprotection.com
              </Link>
            </Text>
          </ListItem>
        </List>
        <Heading size="md" mt={8} mb={2}>
          2. INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS
        </Heading>
        <Text textAlign="justify" mb={4}>
          The website, including but not limited to its programming, editing, compilation and other
          elements necessary for its operation, the designs, logos, text and/or graphics, are owned
          by the CONTROLLER or, if applicable, they expressly holds a license or an express
          authorisation by the authors. All website contents are duly protected by intellectual and
          industrial property laws, and are registered in the corresponding public registries.
        </Text>
        <Text textAlign="justify" mb={4}>
          Regardless of their intended purpose, the total or partial reproduction, use,
          exploitation, distribution and commercialisation, requires in any case the prior written
          authorisation from the CONTROLLER. Any unauthorised use is considered a serious breach of
          the author’s intellectual or industrial property rights.
        </Text>
        <Text textAlign="justify" mb={4}>
          The designs, logos, text and/or graphics not belonging to the CONTROLLER and which may
          appear on the website, belong to their respective owners who are liable for any possible
          dispute that may arise regarding them. The CONTROLLER expressly authorises third parties
          to redirect to the specific content of the website, and in any case to redirect to the
          main website of healthprotection.com.
        </Text>
        <Text textAlign="justify" mb={4}>
          The CONTROLLER acknowledges the corresponding intellectual and industrial property rights
          in favour of their owners, and any mention or appearance on the website does not imply the
          existence of any rights or responsibility whatsoever over them, nor does it imply any
          endorsement, sponsorship or recommendation by the website.
        </Text>
        <Text textAlign="justify" mb={4}>
          Comments regarding any possible breach of intellectual or industrial property rights, as
          well as regarding the contents of the website, can be made by contacting{' '}
          <Link
            href="mailto:vidal@healthprotection.com"
            textDecor="underline"
            _hover={{ textDecor: 'none' }}
          >
            vidal@healthprotection.com
          </Link>
          .
        </Text>
        <Heading size="md" mt={8} mb={2}>
          3. EXEMPTION FROM LIABILITY
        </Heading>
        <Text textAlign="justify" mb={4}>
          The RESPONSIBLE disclaims any liability for the information published on its website
          provided that it has no actual knowledge that this information has been manipulated or
          introduced by a third party external to it or, if it has, has acted diligently to remove
          the data or make it impossible to access them.
        </Text>
        <Heading as="h3" size="sm" mt={4}>
          Use of Cookies
        </Heading>
        <Text textAlign="justify" mb={4}>
          This website uses technical cookies (small files with information that the server sends to
          the computer of the website user) in order to carry out certain functions considered
          necessary for the correct functioning and preview of the website. In any case, the cookies
          used are temporary, with the sole purpose of making navigation of the site more efficient,
          and disappear at the end of the user’s session.
        </Text>
        <Text textAlign="justify" mb={4}>
          Under no circumstances do these cookies themselves provide personal data and will not be
          used for the collection of such data.
        </Text>
        <Text textAlign="justify" mb={4}>
          Through using cookies, it is also possible for the server where the website is located to
          recognise the browser used by the user in order to make navigation easier, allowing, for
          example, users who have previously registered to access the areas, services, promotions or
          contests reserved exclusively for them without having to register on each visit. They may
          also be used to measure the audience or traffic parameters, monitor the progress and
          number of entries, etc. In these cases, the cookies used are technically non-essential but
          beneficial to the user. This website will not install non-essential cookies without
          previous user consent. This website uses our own cookies and third-party cookies for
          analytical purposes and to display personalised advertising based on a profile drawn from
          your browsing habits (e.g. pages visited). All users who visit the website are informed of
          the use of these cookies by means of a floating banner. If its use is accepted, the banner
          will disappear, although it is possible to revoke consent and to obtain more information
          at any time by consulting our Cookies Policy.
        </Text>
        <Text textAlign="justify" mb={4}>
          The browser may be configured by the user to alert them of the reception of cookies and to
          prevent their installation on their computer. For further information, please consult the
          instructions of your browser.
        </Text>
        <Heading as="h3" size="sm" mt={4}>
          Link policy
        </Heading>
        <Text textAlign="justify" mb={4}>
          The user of this website may be redirected to content from third party websites. Since the
          CONTROLLER cannot always control the contents of third party websites, they do not assume
          any type of responsibility with respect to said contents. In any case, the CONTROLLER will
          immediately remove any content that may be in breach of national or international laws,
          morality or public order, and will immediately remove the redirection to this website,
          informing the competent authorities of the content in question.
        </Text>
        <Text textAlign="justify" mb={4}>
          The CONTROLLER will not be responsible for the information and content found, including
          but not limited to, in forums, chats, blog generators, comments, social networks or any
          other means that allows third parties to publish content independently on the website of
          the CONTROLLER. However, and in accordance with Acts 11 and 16 of the LSSICE, third party
          content is made available to all users, authorities, and law enforcement bodies
          collaborating directly on the withdrawal or blocking of all content that may affect or
          violate national or international law, third party rights or public morals and public
          order. In the event that the user considers there to be any content on the website that
          could be considered as such, please notify the website administrator immediately.
        </Text>
        <Text textAlign="justify" mb={4}>
          This website was revised and tested to enable its correct functioning. In principle,
          proper functioning can be guaranteed 365 days a year, 24 hours a day. However, the
          CONTROLLER does not rule out the possibility of there being certain programming errors, or
          that force majeure, natural disasters, strikes or similar circumstances may occur that
          make accessing the website impossible.
        </Text>
        <Heading as="h3" size="sm" mt={4}>
          IP Addresses
        </Heading>
        <Text textAlign="justify" mb={4}>
          The website servers can detect automatically the IP address and the domain name used by
          the user. An IP address is a number assigned automatically to a computer when connected to
          the Internet. All of this information is recorded in a duly registered system log on the
          server that allows the subsequent processing of the data in order to obtain only
          statistical measurements that show us the number of page hits, the number of visits made
          to the web servers, the order of visits, the access point, etc.
        </Text>
        <Heading size="md" mt={8} mb={2}>
          4. APPLICABLE LAW AND JURISDICTION
        </Heading>
        <Text textAlign="justify" mb={4}>
          Spanish legislation shall apply to the resolution of all disputes or questions related to
          this website or the activities carried out therein, to which the parties expressly submit
          themselves, and the Courts and Tribunals of the USER’s domicile or the place of fulfilment
          of the obligation shall be competent for the resolution of all disputes arising from or
          related to its use.
        </Text>
      </Box>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default LegalNotice;
