import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from "react";

import { classNames, Mods } from "vk/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export type ButtonVariant = 'outlined' | 'filled' | 'clean';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки.
     */
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: ReactNode;
    /**
     * Увеличивает ширину кнопки до 100%
     */
    fullWidth?: boolean;
    /**
     * Добавляет рамку по краям
     */
    hasBorder?: boolean;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        variant = 'outlined',
        disabled,
        children,
        fullWidth,
        hasBorder,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.hasBorder]: hasBorder,
    }

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant]
            ])}
            disabled={disabled}
            {...otherProps}
            ref={ref}
        >
            {children}
        </button>
    )
});