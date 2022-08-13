import { extendTheme, theme as base } from '@chakra-ui/react';
import { colors } from './colors';
import { Text, Heading, Button } from './components';

export const theme = extendTheme({
	colors,
	fonts: {
		body: `Inter, ${base.fonts.body}`,
		heading: `Inter, ${base.fonts.heading}`,
	},
  components: {
		Text,
		Heading,
		Button,
	},
});
