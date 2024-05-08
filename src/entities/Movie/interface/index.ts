export interface IMovie {
    kpId: number;
    id: string;
    description: string;
    shortDesc: string;
    dateReleased: string;
    ageLevel: number;
    name: string;
    genreName: string;
    rating: number;
    logo: IImage;
    poster: IImage;
    cover: IImage;
    info: IMovieInfo;
}

export interface IMovieInfo {
    alternativeName: string;
    qualities: string[];
    audio: string[];
    subtitles: string[];
    genres: string[];
    countries: string[];
    cast: IPerson[];
}

export interface IPerson {
    kpId: number;
    photo: IImage;
    name: string;
}

interface IImage {
    src: string;
}