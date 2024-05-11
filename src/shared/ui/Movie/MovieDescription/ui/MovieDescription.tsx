import { useState } from "react";

import cls from "./MovieDescription.module.less";
import { Button } from "vk/shared/ui/Button/Button";

interface MovieDescriptionProps {
    description: string;
}

const MAX_WORDS_LENGTH = 25;

export const MovieDescription = (props: MovieDescriptionProps) => {
    const { description } = props;

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const words = description.split(' ');
    const shortText = words.slice(0, MAX_WORDS_LENGTH).join(' ');

    return (
        <section className={cls.MovieDescription}>
            <a>Описание</a>
            <p>{ isExpanded ? description : shortText }</p>

            {
                words.length > MAX_WORDS_LENGTH && (
                    <Button
                        variant="clean"
                        onClick={ () => setIsExpanded(!isExpanded) }
                    >
                        { isExpanded ? "Свернуть описание" : "Развернуть описание" }
                    </Button>
                )
            }
        </section>
    );
};
