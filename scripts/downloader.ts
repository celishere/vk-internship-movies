import axios from 'axios';
import * as fs from 'fs/promises';
import * as path from 'path';

const IMAGE_SERVER_URL = 'https://static.cdn.tvoe.live';
const OUTPUT_PATH = path.join('..', 'public', 'images');
const MOVIES_DATA = path.join('..', 'public', 'data', 'movies.json');

interface ImageSource {
    src: string;
}

interface MovieData {
    logo?: ImageSource;
    poster?: ImageSource;
    cover?: ImageSource;
    [key: string]: any;
}

/**
 * Загружает данные из JSON файла
 */
async function loadJsonFromFile(filePath: string): Promise<MovieData[]> {
    try {
        const jsonContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(jsonContent);
    } catch (error) {
        console.error(`Ошибка при чтении JSON файла: ${error}`);
        throw error;
    }
}

/**
 * Скачивает изображение по URL и сохраняет его в указанную директорию
 */
async function downloadImage(imageUrl: string, outputDir: string, filename: string): Promise<void> {
    try {
        const fullUrl = `${IMAGE_SERVER_URL}${imageUrl}`;

        const response = await axios({
            method: 'GET',
            url: fullUrl,
            responseType: 'arraybuffer',
        });

        await fs.mkdir(outputDir, { recursive: true });

        const outputPath = path.join(outputDir, filename);
        await fs.writeFile(outputPath, response.data);

        console.log(`${filename}: OK`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Не удалось скачать ${filename}: ${error.message}`);
        } else {
            console.error(`Ошибка при сохранении ${filename}: ${error}`);
        }
        throw error;
    }
}

/**
 * Скачивает все изображения фильма (лого, постер, обложку) в указанную директорию
 */
async function downloadMovieImages(
    movieData: MovieData,
    outputDir: string
): Promise<void> {
    const imageTypes = ['logo', 'poster', 'cover'] as const;

    const downloadPromises = imageTypes.map(async (type) => {
        if (movieData[type]?.src) {
            const filename = path.basename(movieData[type]!.src);

            try {
                await downloadImage(movieData[type]!.src, outputDir, filename);
            } catch (error) {
                console.error(`Не удалось обработать ${type}: ${error}`);
            }
        }
    });

    await Promise.all(downloadPromises);
}

async function main() {
    const movies = await loadJsonFromFile(MOVIES_DATA);
    console.log(`Movies loaded: ${ movies.length }`);

    try {
        for (const movie of movies) {
            console.log(`\nProcessing movie: ${movie.name || 'unknown'}...`);

            await downloadMovieImages(movie, OUTPUT_PATH);
        }

        console.log('Done.');
    } catch (error) {
        console.error('Err:', error);
    }
}

main();