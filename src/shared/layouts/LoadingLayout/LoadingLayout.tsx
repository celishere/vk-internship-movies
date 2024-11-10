import { LoaderIcon } from "vk/shared/ui/Icons/Loader/LoaderIcon";

import cls from "./LoadingLayout.module.scss";

export const LoadingLayout = () => {
    return (
        <div className={ cls.LoadingLayout }>
            <LoaderIcon/>
        </div>
    )
}