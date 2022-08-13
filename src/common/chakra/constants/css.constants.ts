import { theme } from '../'

export const HIDE_SCROLLBAR_STYLES = {
    '&::-webkit-scrollbar': {
        width: 0,
    },
    '&::-webkit-scrollbar-track': {
        width: 0,
    },
    '&::-webkit-scrollbar-thumb': {
        width: 0,
    },
};
export const CUSTOM_SCROLLBAR_STYLES = {
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-track': {
        width: '6px',
        background: theme.colors.neutral['30'],

    },
    '&::-webkit-scrollbar-thumb': {
        background: theme.colors.primary.main,
        borderRadius: '24px',
    },
}