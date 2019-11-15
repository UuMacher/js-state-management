import { vsDark } from "@code-surfer/themes";

export const theme = {
    ...vsDark,
    colors: {
        ...vsDark.colors,
        text: '#fff',
        primary: '#f39',
        secondary: '#b585e0'
    },
    fontSizes: [
        12, 14, 16, 20, 24, 24, 24, 24
    ],
    styles: {
        ...vsDark.styles,
        a: {
            color: 'secondary'
        },
        h1:  {
            color: 'primary'
        }
    }
};