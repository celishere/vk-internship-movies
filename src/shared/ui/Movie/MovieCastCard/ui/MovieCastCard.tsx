import Image from "next/image";

import { IPerson } from "vk/entities/Movie/interface";

import cls from "./MovieCastCard.module.scss";

export const MovieCastCard = (props: IPerson) => {
    const {
        name,
        photo
    } = props;

    return (
        <div className={ cls.MovieCastCard }>
            <div className={ cls.MovieCastCardImg }>
                <Image
                    src={photo.src}
                    width={150}
                    height={150}
                    alt={name}
                />
            </div>

            <p>{name}</p>
        </div>
    );
};
