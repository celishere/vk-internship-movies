import { memo } from "react";

import { LoaderIcon } from "vk/shared/ui/Icons/Loader/LoaderIcon";

import cls from "./LoadingLayout.module.less";

export const LoadingLayout = memo(() => {
    return (
        <div className={ cls.LoadingLayout }>
            <LoaderIcon/>
        </div>
    )
})