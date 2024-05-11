import { Suspense } from "react";
import type { AppProps } from "next/app";

import NextNProgress from 'nextjs-progressbar';

import { LoadingLayout } from "vk/shared/layouts/LoadingLayout";
import { Header } from "vk/widgets/Header";

const App = ((props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <>
            <NextNProgress
                color="var(--color-primary)"
                height={2}
            />
            <Suspense fallback={ <LoadingLayout/> }>
                <Header/>
                <Component {...pageProps} />
            </Suspense>
        </>
    )
});

export default App;