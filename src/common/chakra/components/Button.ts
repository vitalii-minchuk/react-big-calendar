import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: '600',
		borderRadius: '4px',
		_focus: {
			boxShadow: '0px 0px 0px 3px #AAC6C8',
		},
	},
	variants: {
		primary: {
			height: '50px',
			backgroundColor: 'primary.main',
			fontSize: '16px',
			lineHeight: '24px',
			color: 'neutral.10',
			_hover: {
				backgroundColor: 'primary.hovered',
			},
			_active: {
				backgroundColor: 'primary.pressed',
			},
		},
		secondary: {
			fontSize: '14px',
			lineHeight: '20px',
			height: '50px',
			color: 'primary.main',
			border: '1px solid #126065',
			cursor: 'pointer',
			_hover: {
				borderColor: '#0E494D',
			},
			_active: {
				color: 'primary.pressed',
				borderColor: 'currentcolor',
			},
		},
		// link:{
		//     fontSize: '14px',
		//     lineHeight: '20px',
		//     height: '44px',
		//     color: 'neutral.100',
		//     fontWeight: '400',
		//     _hover:{
		//         color: 'primary.hovered',
		//         textDecoration: 'none'
		//     },
		//     _active:{
		//         color: 'primary.pressed'
		//     },
		//     _focus:{
		//         color: 'primary.main'
		//     }
		//
		// }
	},
};
