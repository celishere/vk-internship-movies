import { memo } from "react";
import { useRouter } from "next/router";

import { Button } from "vk/shared/ui/Button/Button";

import cls from "./NotFoundLayout.module.less";

export const NotFoundLayout = memo(() => {
    const router = useRouter();

    const home = () => router.push('/');

    return (
        <div className={ cls.NotFoundLayout }>
            <a>404</a>

            <span>Страница не найдена</span>

            <Button onClick={home}>Домой</Button>
        </div>
    )
})