import { memo, useEffect, useState } from "react";

import { MainLayout } from "vk/shared/layouts/MainLayout";
import { LoadingLayout } from "vk/shared/layouts/LoadingLayout";

import "@egjs/react-flicking/dist/flicking.css";

const IndexPage = memo(() => {
    // карточкам с фильмами нужно дать время на прогрузку
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 100);
    }, []);

    return (
        <>
            { isLoading && <LoadingLayout/> }
            <MainLayout/>
        </>
    );
});

export default IndexPage;
