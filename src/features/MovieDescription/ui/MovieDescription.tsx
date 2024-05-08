import cls from "./MovieDescription.module.less";

interface MovieDescriptionProps {
    description: string;
}

export const MovieDescription = (props: MovieDescriptionProps) => {
    const { description } = props;

    return (
        <div className={cls.MovieDescription}>
            <a>Описание</a>
            <p>{ description }</p>
        </div>
    );
};
