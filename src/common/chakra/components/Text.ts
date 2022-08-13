import { ComponentStyleConfig } from '@chakra-ui/react';

export const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: '400',
	},
	variants: {
		bodyLarge: {
			fontSize: '16px',
			lineHeight: '24px',
		},
		bodyMedium: {
			fontSize: '14px',
			lineHeight: '20px',
		},
		bodySmall: {
			fontSize: '12px',
			lineHeight: '16px',
		},
	},
	defaultProps: {
		variant: 'bodyLarge',
	},
};
