import { memo, Suspense } from "react";
import type { AppProps } from "next/app";
import { LoadingLayout } from "vk/shared/layouts/LoadingLayout";

const App = memo((props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <Suspense fallback={ <LoadingLayout/> }>
            <Component {...pageProps} />
        </Suspense>
    )
});

export default App;