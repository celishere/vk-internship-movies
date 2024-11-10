import { AppProps } from "next/app";
import localFont from 'next/font/local';

import App from "vk/app/App";

import { ErrorBoundary } from "vk/app/providers/ErrorBoundary";

import "../app/styles/index.scss";

const font = localFont({
    src: [
        {
            path: '../../public/fonts/SFProDisplay-Regular.woff',
            weight: '600',
            style: 'bold',
        },
    ],
    variable: '--font-sf',
});

const font_semibold = localFont({
    src: [
        {
            path: '../../public/fonts/SFProDisplay-Semibold.woff',
            weight: '600',
            style: 'bold',
        },
    ],
    variable: '--font-sf-semibold',
});

const font_bold = localFont({
    src: [
        {
            path: '../../public/fonts/SFProDisplay-Bold.woff',
            weight: '600',
            style: 'bold',
        },
    ],
    variable: '--font-sf-bold',
});

export default function NextApp(props: AppProps) {
    return (
        <ErrorBoundary>
            <style jsx global>
                {`
                    html {
                        font-family: ${font_semibold.style.fontFamily};
                    }
                `}
            </style>

            <main
                className={`
                            ${font.variable} 
                            ${font_semibold.variable}
                            ${font_bold.variable}
                        `}
            >
                <App {...props} />
            </main>
        </ErrorBoundary>
    );
}
