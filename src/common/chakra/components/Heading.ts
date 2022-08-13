import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: '600',
	},
	variants: {
		h1: {
			fontSize: '44px',
			lineHeight: '56px',
		},
		h2: {
			fontSize: '36px',
			lineHeight: '48px',
		},
		h3: {
			fontSize: '28px',
			lineHeight: '40px',
		},
	},
	defaultProps: {
		variant: 'h1',
	},
};
