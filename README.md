## Профильное задание: React-разработчик

![next version](https://img.shields.io/badge/next-14.0.0-brightgreen)
![react version](https://img.shields.io/badge/react-18.2.0-brightgreen)
![react-dom version](https://img.shields.io/badge/react--dom-18.2.0-brightgreen)
![preact version](https://img.shields.io/badge/preact-10.20.2-brightgreen)
![less version](https://img.shields.io/badge/less-4.2.0-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-9.2.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-3.2.5-brightgreen)
![embla-carousel-react version](https://img.shields.io/badge/embla--carousel--react-8.0.4-brightgreen)

<p align="center">
    <img style="width: 128px" src="assets/logo.png"/>
    <img style="padding-top: 32px; width: 85%; border-radius: 12px;" src="assets/screenshot.png"/>
    <p style="font-size: 22px;" align="center">Демо: <a href="https://cinema.foxovh.me">cinema.foxovh.me</a></p>
</p>

## Использованные технологии и инструменты

### [Next.js](https://nextjs.org/)
Next.js - это фреймворк React, который предоставляет возможности для создания производительных и масштабируемых веб-приложений. Он поддерживает серверный рендеринг (SSR), статическое генерирование (SSG) и другие передовые функции, которые улучшают производительность и SEO-оптимизацию веб-приложений.

### [React](https://react.dev/)
React - это JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет разрабатывать интерактивные и динамические веб-приложения с использованием компонентного подхода.

### [React DOM](https://www.npmjs.com/package/react-dom)
React DOM - это пакет, который предоставляет методы для рендеринга React-компонентов в DOM-дерево браузера.

### [Preact](https://preactjs.com/)
Preact - это легковесная альтернатива React, которая предоставляет совместимый API и обеспечивает высокую производительность.

### [Axios](https://axios-http.com/)
Axios - это популярная библиотека JavaScript для выполнения HTTP-запросов. Она предоставляет простой и удобный интерфейс для отправки асинхронных HTTP-запросов к REST-эндпоинтам и выполнения CRUD-операций.

### [Embla Carousel React](https://www.embla-carousel.com/)
Embla Carousel React - это библиотека для создания карусели на React. Она предоставляет гибкие и настраиваемые возможности для создания интерактивных слайдеров, которые можно использовать в различных веб-приложениях.

### [Less](https://lesscss.org/)
Less - это динамический язык стилей, который расширяет возможности CSS. Он позволяет использовать переменные, миксины, функции и другие возможности, которые делают процесс написания и поддержки CSS-кода более эффективным.

## Что реализовано в приложении
1. Получение данных используя локальный API.
2. Главная страница (URL: `/`):
   - Основная карусель с избранными фильмами.
   - Inline-карусель с новинками.
3. Страница с карточкой фильма (URL: `/movies/[:movieId]`):
    - При нажатии на карточку в списке фильмов `/movies` происходит переход на страницу с карточкой фильма, содержащую подробную информацию о выбранном фильме.
    - Inline-карусель с похожими фильмами.
4. В случае перехода по несуществующему адресу будет показана страница 404.
5. Адаптивная верстка.

## Сборка проекта локально

1. Склонируйте репозиторий:
```bash
git clone git@github.com:celishere/vk-internship-movies.git
```

2. Перейдите в папку с проектом:
```bash
cd vk-internship-movies
```

3. Установите все зависимости:
```bash
npm install
```

4. 1. Запустите приложение в Dev режиме:
   ```bash
    npm run dev
   ```
   
    Приложение будет запущено по адресу: <a href="http://localhost:3000">localhost:3000</a>
    
    2. Запустите собранную версию приложения (опционально):
        1. Соберите приложение
        ```bash
        npm run build
       ```
       
        2. Запустите приложение
        ```bash
        npm run start
       ```

       Готово! Собранное приложение будет запущено по адресу: <a href="http://localhost:3000">localhost:3000</a>
