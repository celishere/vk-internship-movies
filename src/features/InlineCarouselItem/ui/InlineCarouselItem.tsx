import Image from "next/image";
import { useRouter } from "next/router";

import { RatingBadge } from "vk/shared/ui/RatingBadge";

import cls from "./InlineCarouselItem.module.scss";

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

    const router = useRouter();

    const open = () => router.push(`/movie/${ id }`);

    return (
        <div
            key={props.id}
            id={props.id}
            className={cls.CarouselItem}
            onClick={open}
        >
            <Image
                className={cls.CarouselBg}
                src={poster.src}
                alt={name}
                width={500}
                height={500}
            />

            <div className={cls.CarouselItemContent}>
                <p>{name}</p>
            </div>

            <div className={cls.CarouselMetaBox}>
                <div className={cls.CarouselInfo}>
                    <RatingBadge rating={rating} />
                </div>
            </div>
        </div>
    );
};
