import { createTheme } from '@mantine/core'

export const theme = createTheme({
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '89em',
        xl: '128em',
    },
    fontFamily: 'Gilroy, sans-serif',

    colors: {
        primaryBlue: ['#012f6d'] as any,
        ethalonBlue: ['#002F6D'] as any,
    },
})
