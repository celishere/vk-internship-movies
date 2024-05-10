import { useRouter } from "next/router";

import Image from "next/image";

import { classNames } from "vk/shared/lib/classNames/classNames";

import { RatingBadge } from "vk/shared/ui/RatingBadge";

import cls from "./CarouselItem.module.less";

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

    const imgSrc = `${ process.env.IMAGES_CDN }/${ cover.src }`;
    const logoSrc = `${ process.env.IMAGES_CDN }/${ logo.src }`;

    const router = useRouter();

    const open = () => router.push(`/movie/${ id }`);

    return (
        <div
            className={ classNames(cls.CarouselItem, undefined, ["Carousel__item"]) }
            onClick={ open }
        >
            <img className={ cls.CarouselBg } src={ imgSrc } alt={ name }/>
            <Image
                className={ cls.CarouselShadow }
                src={ imgSrc }
                alt={ name }
                width={ 50 }
                height={ 50 }
            />

            <div className={ cls.CarouselMetaBox }>
                <div className={ cls.CarouselMeta }>
                    <img className={ cls.CarouselLogo } src={ logoSrc } alt={ name } loading="lazy"/>

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
