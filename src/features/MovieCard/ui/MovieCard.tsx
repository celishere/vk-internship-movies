import { useRouter } from "next/router";

import { RatingBadge } from "vk/shared/ui/RatingBadge";
import { Button } from "vk/shared/ui/Button/Button";
import { BackIcon } from "vk/shared/ui/Icons/Back/BackIcon";

import { IMovie } from "vk/entities/Movie/interface";

import cls from "./MovieCard.module.less";

export const MovieCard = (props: IMovie) => {
    const {
        name,
        dateReleased,
        genreName,
        cover,
        shortDesc,
        logo,
        ageLevel,
        rating
    } = props;

    const router = useRouter();

    const back = () => router.push('/');

    const imgSrc = `${ process.env.IMAGES_CDN }/${ cover.src }`;
    const logoSrc = `${ process.env.IMAGES_CDN }/${ logo.src }`;

    return (
        <div className={cls.MovieCard}>
            <div className={cls.MovieCardBg}>
                <div className={cls.MovieCardOutline}>
                    <div className={cls.MovieCardTop}>
                        <button
                            className={cls.MovieCardBackBtn}
                            onClick={back}
                        >
                            <BackIcon/>
                            Назад
                        </button>
                    </div>
                </div>
                <div className={cls.MovieCardBgImage}>
                    <img src={imgSrc} alt={name} loading="lazy" />
                </div>
                <div className={cls.MovieCardOutline} />
            </div>

            <div className={cls.MovieCardContentBox}>
                <div className={cls.MovieCardContent}>
                    <img className={cls.MovieCardLogo} src={logoSrc} alt={name} loading="lazy" />

                    <div className={cls.MovieCardMetadataBox}>
                        <div className={cls.MovieCardMetadata}>
                            <RatingBadge rating={rating} />
                            <p>{new Date(dateReleased).getFullYear()}</p>
                            <p>{genreName}</p>
                            <p>{ageLevel}+</p>
                        </div>

                        <p className={cls.MovieCardTitle}>{shortDesc}</p>
                    </div>

                    <Button className={cls.MovieCardBtn} variant="filled">Смотреть онлайн</Button>
                </div>
            </div>
        </div>
    );
};
