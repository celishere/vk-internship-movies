import cls from "./MovieTrailer.module.scss";

interface MovieTrailerProps {
    name: string;
}

export const MovieTrailer = (props: MovieTrailerProps) => {
    const { name } = props;

    return (
        <section className={cls.MovieTrailer}>
            <a>Трейлер</a>

            <div/>

            <p>{name}</p>
        </section>
    );
};
