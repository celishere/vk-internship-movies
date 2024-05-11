import { FC, ReactNode } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { classNames } from "vk/shared/lib/classNames/classNames";

import cls from "./InlineCarousel.module.less";

interface CarouselProps {
    title: string;
    children: ReactNode[];
}

export const InlineCarousel: FC<CarouselProps> = (props) => {
    const { title, children } = props;

    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

    return (
        <section className={classNames(cls.CarouselContainer)}>
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
        </section>
    );
};