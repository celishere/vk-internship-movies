import { FC, ReactNode, useEffect, useState } from "react";

import Flicking from "@egjs/react-flicking";

import { classNames } from "vk/shared/lib/classNames/classNames";

import cls from "./InlineCarousel.module.less";

type CarouselVariant = 'base' | 'featured';

interface CarouselProps {
    title: string;
    variant?: CarouselVariant;
    children: ReactNode;
}

export const InlineCarousel: FC<CarouselProps> = (props) => {
    const { title, variant, children } = props;

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className={ classNames(cls.CarouselBox, undefined, [variant === "featured" ? cls.CarouselBoxFeatured : ""]) }>
            {!isLoading && <a>{title}</a>}

            <Flicking
                align="prev"
                bounce={100}
                bound
                useFindDOMNode={true}
            >
                { children }
            </Flicking>
        </div>
    );
};