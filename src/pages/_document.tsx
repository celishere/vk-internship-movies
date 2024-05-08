import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

import { THEME } from "vk/shared/const/scripts";

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <Script
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: THEME }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}