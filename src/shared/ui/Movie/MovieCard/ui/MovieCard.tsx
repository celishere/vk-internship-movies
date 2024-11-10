import Image from "next/image";
import { useRouter } from "next/router";

import { RatingBadge } from "vk/shared/ui/RatingBadge";
import { Button } from "vk/shared/ui/Button/Button";
import { BackIcon } from "vk/shared/ui/Icons/Back/BackIcon";

import { IMovie } from "vk/entities/Movie/interface";

import cls from "./MovieCard.module.scss";

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

    return (
        <section className={cls.MovieCard}>
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
                    <Image
                        src={cover.src}
                        alt={name}
                        width={1000}
                        height={500}
                    />
                </div>
                <div className={cls.MovieCardOutline} />
            </div>

            <div className={cls.MovieCardContentBox}>
                <div className={cls.MovieCardContent}>
                    <Image
                        className={cls.MovieCardLogo}
                        src={logo.src}
                        alt={name}
                        width={500}
                        height={400}
                    />

                    <div className={cls.MovieCardMetadataBox}>
                        <div className={cls.MovieCardMetadata}>
                            <RatingBadge rating={rating} />
                            <p>{new Date(dateReleased).getFullYear()}</p>
                            <p>{genreName}</p>
                            <p>{ageLevel}+</p>
                        </div>

                        <p className={cls.MovieCardTitle}>{shortDesc}</p>
                    </div>

                    <div className={cls.MovieCardButtons}>
                        <Button className={cls.MovieCardBtn} variant="outlined">Смотреть онлайн</Button>
                        <Button className={cls.MovieCardBtn} variant="filled">Трейлер</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
