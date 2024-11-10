import { Logo } from "vk/widgets/Header/ui/Logo";

import { classNames } from "vk/shared/lib/classNames/classNames";

import { useHeaderFixed } from "vk/widgets/Header/lib";

import cls from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
    const { isFixed } = useHeaderFixed();

    return (
        <header
            className={ classNames(cls.Header, {
                [cls.fixed]: isFixed
            }) }
        >
            <div className={ cls.HeaderContainer }>
                <Logo/>

                <Link href={"/"}>
                    <p>Главная</p>
                </Link>
            </div>
        </header>
    );
};