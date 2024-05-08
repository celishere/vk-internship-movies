import { memo, useEffect, useState } from "react";

import Head from "next/head";

import axios from "axios";

import { Carousel } from "vk/features/Carousel";
import { CarouselItem } from "vk/features/CarouselItem";

import { InlineCarousel } from "vk/features/InlineCarousel";
import { InlineCarouselItem } from "vk/features/InlineCarouselItem";

import { IMovie } from "vk/entities/Movie/interface";

export const MainLayout = memo(() => {
    const [featured, setFeatured] = useState<IMovie[]>([]);
    const [newest, setNewest] = useState<IMovie[]>([]);

    useEffect(() => {
        axios.get<IMovie[]>('/data/movies.json')
            .then((result) => {
                setFeatured(result.data);
            })
    }, []);

    useEffect(() => {
        axios.get<IMovie[]>('/data/newMovies.json')
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
                <Carousel>
                    {
                        featured.map((item) => (
                            <CarouselItem
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

                <InlineCarousel title="Новинки" variant="featured">
                    {
                        newest.map((item) => (
                            <InlineCarouselItem
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

                <div style={{ paddingBottom: "48px" }}/>
            </div>
        </>
    );
})