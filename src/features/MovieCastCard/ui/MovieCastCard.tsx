import { IPerson } from "vk/entities/Movie/interface";

import cls from "./MovieCastCard.module.less";

export const MovieCastCard = (props: IPerson) => {
    const {
        name,
        photo
    } = props;

    console.log(photo)

    return (
        <div className={ cls.MovieCastCard }>
            <img src={ photo.src } alt={ name } loading="lazy"/>

            <p>{ name }</p>
        </div>
    );
};
