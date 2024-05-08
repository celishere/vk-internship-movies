export const LOGGER_COLORS = {
    Pink: "#ff1171",
    Black: "#000",
    Green: "#00d58f",
    White: "#fff",
    Blue: "#307DF0",
    LightBlue: "#71ccff",
    Red: "#D12727",
    Orange: "#ffb30d",
    Purple: "#a700ff",
    LightGreen: "#00ff6b"
};

export const log = (service: string, color: string, message: string, text_color: string = "#000"): void => {
    const console_style = `
        display: inline-block;
        border: 1px solid ${color};
        color: ${color};
        padding: 1px 3px;
        border-radius: 4px;
        margin-right: 8px;
  `;

    typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches && (text_color = "#fff");

    console.log(`%c${service}%c${message}`, console_style, `color: ${text_color}`);
}