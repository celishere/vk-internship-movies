import Image from "next/image";
import { useRouter } from "next/router";

import { classNames } from "vk/shared/lib/classNames/classNames";

import { RatingBadge } from "vk/shared/ui/RatingBadge";

import cls from "./CarouselItem.module.scss";

export interface CarouselItemProps {
    id: string;
    name: string;
    dateReleased: Date;
    genreName: string;
    cover: { src: string };
    poster: { src: string };
    logo: { src: string };
    ageLevel: number;
    rating: number;
}

export const CarouselItem = (props: CarouselItemProps) => {
    const {
        id,
        name,
        dateReleased,
        genreName,
        cover,
        logo,
        ageLevel,
        rating
    } = props;

    const router = useRouter();

    const open = () => router.push(`/movie/${id}`);

    return (
        <div
            className={ classNames(cls.CarouselItem, undefined, ["Carousel__item"]) }
            onClick={ open }
        >
            <Image
                className={ cls.CarouselBg }
                src={ cover.src }
                alt={ name }
                width={ 1200 }
                height={ 900 }
            />

            <div className={ cls.CarouselMetaBox }>
                <div className={ cls.CarouselMeta }>
                    <Image
                        className={ cls.CarouselLogo }
                        src={ logo.src }
                        alt={ name }
                        width={ 300 }
                        height={ 300 }
                        quality={ 50 }
                    />

                    <div className={ cls.CarouselInfo }>
                        <RatingBadge rating={ rating } />
                        <p>{ dateReleased.getFullYear() }</p>
                        <p>{ genreName }</p>
                        <p>{ ageLevel }+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
