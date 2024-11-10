import { Button } from "vk/shared/ui/Button/Button";

import cls from "./ErrorPage.module.scss";

export const ErrorPage = () => {
    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={ cls.ErrorPage }>
            <p>Произошла ошибка</p>

            <Button onClick={ reloadPage }>Обновить страницу</Button>
        </div>
    )
}