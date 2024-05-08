import { FC, ReactNode } from "react";

import Flicking, { ChangedEvent } from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import cls from "./Carousel.module.less";

interface CarouselProps {
    children: ReactNode;
}

export const Carousel: FC<CarouselProps> = (props) => {
    const { children } = props;

    const onChangeHandler = (e: ChangedEvent) => {
        if (!e.currentTarget.currentPanel) return;

        e.currentTarget.camera.children.map(
            (element) => element.removeAttribute('selected')
        );

        e.currentTarget.currentPanel.element.setAttribute('selected', 'true');
    }

    return (
        <div className={ cls.CarouselBox }>
            <Flicking
                circular={true}
                defaultIndex={2}
                moveType={["strict", { count: 1 }]}
                onChanged={onChangeHandler}
                plugins={[
                    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: true }),
                ]}
                useFindDOMNode={true}
            >
                { children }
            </Flicking>
        </div>
    );
};