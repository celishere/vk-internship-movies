import { memo, useEffect, useState } from "react";
import Head from "next/head";

import $api from "vk/shared/http";

import { IMovie } from "vk/entities/Movie/interface";

import { InlineCarouselItem } from "vk/features/InlineCarouselItem";

import { InlineCarousel } from "vk/shared/ui/InlineCarousel";
import { MovieDescription } from "vk/shared/ui/Movie/MovieDescription";
import { MovieTrailer } from "vk/shared/ui/Movie/MovieTrailer";
import { MovieInfo } from "vk/shared/ui/Movie/MovieInfo";
import { MovieCastCard } from "vk/shared/ui/Movie/MovieCastCard";
import { MovieCard } from "vk/shared/ui/Movie/MovieCard";

interface MovieLayoutProps {
    data: IMovie;
}

export const MovieLayout = memo((props: MovieLayoutProps) => {
    const { data } = props;
    const [similar, setSimilar] = useState<IMovie[]>([]);

    useEffect(() => {
        $api.get<IMovie[]>('/data/newMovies.json')
            .then((result) => {
                setSimilar(result.data);
            })
    }, []);

    return (
        <div className="container">
            <Head>
                <title>{ data.name }</title>
            </Head>

            <MovieCard {...data} />

            <MovieDescription description={ data.description }/>
            <MovieTrailer name={ data.name }/>
            <MovieInfo data={ data.info }/>

            <InlineCarousel title="Актеры">
                {
                    data.info.cast.map((person, index) => (
                        <MovieCastCard
                            key={ index }
                            {...person}
                        />
                    ))
                }
            </InlineCarousel>

            <InlineCarousel title="Похожие">
                {
                    similar.map((item) => (
                        <InlineCarouselItem
                            key={ item.id }
                            id={ item.id }
                            name={ item.name }
                            dateReleased={ new Date(item.dateReleased) }
                            genreName={ item.genreName }
                            cover={ item.cover }
                            logo={ item.logo }
                            poster={ item.poster }
                            ageLevel={ item.ageLevel }
                            rating={ item.rating }
                        />
                    ))
                }
            </InlineCarousel>
        </div>
    )
})