import { classNames } from "vk/shared/lib/classNames/classNames";

import cls from "./RatingBadge.module.less";

interface RatingBadgeProps {
    rating: number;
}

export const RatingBadge = (props: RatingBadgeProps) => {
    const { rating } = props;

    let color;
    if (rating > 8) {
        color = "Positive";
    } else if (rating > 6) {
        color = "Neutral";
    } else {
        color = "Negative";
    }

    return (
        <span className={
            classNames(
                cls.RatingBadge,
                undefined,
                [cls[`RatingBadge${color}`]]
            )
        }>
            { rating }
        </span>
    );
};
