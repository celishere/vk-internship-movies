import { useEffect, useState } from "react";

import Head from "next/head";

import $api from "vk/shared/http";

import { Carousel } from "vk/shared/ui/Carousel";
import { InlineCarousel } from "vk/shared/ui/InlineCarousel";

import { CarouselItem } from "vk/features/CarouselItem";
import { InlineCarouselItem } from "vk/features/InlineCarouselItem";

import { IMovie } from "vk/entities/Movie/interface";

export const MainLayout = () => {
    const [featured, setFeatured] = useState<IMovie[]>([]);
    const [newest, setNewest] = useState<IMovie[]>([]);

    useEffect(() => {
        $api.get<IMovie[]>('/data/movies.json')
            .then((result) => {
                setFeatured(result.data);
            })
    }, []);

    useEffect(() => {
        $api.get<IMovie[]>('/data/newMovies.json')
            .then((result) => {
                setNewest(result.data);
            })
    }, []);

    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>

            <div className="container">
                {
                    featured.length > 0 && (
                        <Carousel>
                            {
                                featured.map((item) => (
                                    <CarouselItem
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
                        </Carousel>
                    )
                }

                {
                    newest.length > 0 && (
                        <InlineCarousel title="Новинки">
                            {
                                newest.map((item) => (
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
                    )
                }

                <div style={{ paddingBottom: "48px" }}/>
            </div>
        </>
    );
};