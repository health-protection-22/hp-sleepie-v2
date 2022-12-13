import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TagManager from 'react-gtm-module';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SnackbarProvider } from '../contexts/Snackbar';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BASE_URL } from '../lib/constants';
import { SEO } from '../next-seo-config';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { theme } from '../styles/Theme/theme';

import '../styles/globals.css';
import { CartProvider } from '../contexts/Cart';
import { FiltersProvider } from '../contexts/Filters';
import { HabitsProvider } from '../contexts/Habits';
import { AuthProvider } from '../contexts/Auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (BASE_URL + (router.asPath === '/' ? '' : router.asPath)).split('?')[0];

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NDDGBN8' });
    // @ts-ignore
    if (document && window.Weglot) {
      // @ts-ignore
      Weglot.initialize({
        api_key: 'wg_51d038d4a4eaa9dd30916112badbc8398',
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <DefaultSeo {...SEO} canonical={canonicalUrl} />
            <FiltersProvider>
              <HabitsProvider>
                <CartProvider>
                  <div className="w-full h-full flex flex-col justify-between">
                    <Header />
                    <div className="w-full h-fit flex-1 flex-col">
                      <Component {...pageProps} />
                    </div>
                    <Footer />
                  </div>
                </CartProvider>
              </HabitsProvider>
            </FiltersProvider>
          </ChakraProvider>
        </AuthProvider>
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} panelProps={{ style: { background: '#094c79' } }} />
    </QueryClientProvider>
  );
}

export default App;
