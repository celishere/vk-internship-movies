import cls from "./Loader.module.less";

export const LoaderIcon = () => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth="3"
            className={cls.Loader}
        >
            <circle
                cx="16" cy="16" r="13"
                strokeLinecap="round"
            />
            <circle
                cx="16" cy="16" r="13"
                strokeDasharray="81.68140899333463 81.68140899333463"
                strokeDashoffset="61.26105674500097"
                transform="rotate(-90 16 16)"
                strokeLinecap="round"
            />
        </svg>
    )
}