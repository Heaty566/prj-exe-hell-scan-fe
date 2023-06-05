import '../styles/globals.css';
import 'swiper/css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { AutoLoginWrapper, DynamicLayout, ProgressLoadingBar } from '../src/core/components';
import { store } from '../src/core/store';

const queryClient = new QueryClient({});

import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <Provider store={store}>
                <AutoLoginWrapper>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider enableSystem={true} attribute="class">
                            <DynamicLayout>
                                <Component {...pageProps} />
                            </DynamicLayout>
                            <ToastContainer position="top-center" autoClose={1500} />
                        </ThemeProvider>
                    </QueryClientProvider>
                </AutoLoginWrapper>
            </Provider>
        </>
    );
}

export default MyApp;
