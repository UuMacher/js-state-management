import { vsDark } from '@code-surfer/themes';

export const theme = {
    ...vsDark,
    colors: {
        ...vsDark.colors,
        text: '#fff',
        primary: '#f39',
        secondary: '#b585e0',
        tertiary: '#ecaf20',
    },
    fontSizes: [12, 14, 16, 20, 24, 24, 24, 24],
    styles: {
        ...vsDark.styles,
        a: {
            color: 'secondary',
        },
        h1: {
            color: 'primary',
        },
        h2: {
            color: 'primary',
        },
        strong: {
            color: 'tertiary',
        },
        table: {
            padding: '1rem',
        },
        p : {
            maxWidth: '60ch'
        },
        th: {
            borderBottom: '1px solid #fff',
            color: 'tertiary',
        },
    },
};
