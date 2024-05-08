import { useRouter } from "next/router";

import { RatingBadge } from "vk/shared/ui/RatingBadge";

import cls from "./InlineCarouselItem.module.less";

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

export const InlineCarouselItem = (props: CarouselItemProps) => {
    const {
        id,
        name,
        poster,
        rating
    } = props;

    const imgSrc = `${ process.env.IMAGES_CDN }/${ poster.src }`;

    const router = useRouter();

    const open = () => router.push(`/movie/${ id }`);

    return (
        <div
            key={ props.id }
            id={ props.id }
            className={ cls.CarouselItem }
            onClick={ open }
        >
            <img className={ cls.CarouselBg } src={ imgSrc } alt={ name } loading="lazy" />

            <div className={ cls.CarouselMetaBox }>
                <div className={ cls.CarouselMeta }>
                    <div className={ cls.CarouselInfo }>
                        <RatingBadge rating={ rating } />
                    </div>
                </div>
            </div>
        </div>
    );
};
