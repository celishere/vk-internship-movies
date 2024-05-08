import { useEffect, useState } from "react";
import { InferGetServerSidePropsType } from 'next';

import axios from "axios";

import { ServerSideContextInterface } from "vk/shared/const/params";
import { log, LOGGER_COLORS } from "vk/shared/const/logger";

import { LoadingLayout } from "vk/shared/layouts/LoadingLayout";
import { NotFoundLayout } from "vk/shared/layouts/NotFoundLayout";
import { MovieLayout } from "vk/shared/layouts/MovieLayout";

import { IMovie } from "vk/entities/Movie/interface";

import "@egjs/react-flicking/dist/flicking.css";

interface MoviePageProps {
    props: {
        movieId: string;
    };
}

export default function MoviePage({ movieId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [data, setData] = useState<IMovie>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<IMovie>('/api/getMovie', {
            params: {
                id: movieId
            }
        }).then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch((e) => {
            log('moviePage', LOGGER_COLORS.Red, e);
            setLoading(false);
        })
    }, [movieId]);

    if (isLoading) {
        return <LoadingLayout/>;
    }

    if (!data) {
        return <NotFoundLayout/>;
    }

    return <MovieLayout data={ data }/>;
}

export async function getServerSideProps(
    context: ServerSideContextInterface,
): Promise<MoviePageProps> {
    const { movieId } = context.params;

    return {
        props: {
            movieId
        },
    };
}
