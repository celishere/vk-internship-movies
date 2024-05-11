import { IMovieInfo } from "vk/entities/Movie/interface";

import cls from "./MovieInfo.module.less";

interface MovieTrailerProps {
    data: IMovieInfo
}

export const MovieInfo = (props: MovieTrailerProps) => {
    const { data } = props;

    return (
        <section className={cls.MovieInfo}>
            <a>Информация</a>

            <div className={cls.MovieInfoList}>
                <div className={cls.MovieInfoGroup}>
                    <div className={cls.MovieInfoGroupItem}>
                        <a>Страны</a>
                        <p>{data.countries.join(', ')}</p>
                    </div>

                    <div className={cls.MovieInfoGroupItem}>
                        <a>Жанры</a>
                        <p>{data.genres.join(', ')}</p>
                    </div>

                    <div className={cls.MovieInfoGroupItem}>
                        <a>Оригинальное название</a>
                        <p>{data.alternativeName}</p>
                    </div>
                </div>

                <div className={cls.MovieInfoGroup}>
                    <div className={cls.MovieInfoGroupItem}>
                        <a>Аудиодорожки</a>
                        <p>{data.audio.join(', ')}</p>
                    </div>

                    {
                        data.subtitles.length > 0 && (
                            <div className={cls.MovieInfoGroupItem}>
                                <a>Субтитры</a>
                                <p>{data.subtitles.join(", ")}</p>
                            </div>
                        )
                    }

                    <div className={cls.MovieInfoGroupItem}>
                        <a>Качество</a>
                        <p>{data.qualities.join(', ')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
