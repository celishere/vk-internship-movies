import { FC, ReactNode } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { classNames } from "vk/shared/lib/classNames/classNames";

import cls from "./InlineCarousel.module.less";

type CarouselVariant = 'base' | 'featured';

interface CarouselProps {
    title: string;
    variant?: CarouselVariant;
    children: ReactNode[];
}

export const InlineCarousel: FC<CarouselProps> = (props) => {
    const { title, variant, children } = props;

    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

    return (
        <div className={
            classNames(
                cls.CarouselContainer,
                undefined,
                [variant === "featured" ? cls.CarouselContainerFeatured : ""]
            )
        }>
            <a>{title}</a>

            <div
                className={cls.CarouselViewport}
                ref={emblaRef}
            >
                <div className={cls.CarouselBox}>
                    {children.map((child, index) => (
                        <div className={cls.CarouselSlide} key={ index }>
                            { child }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};