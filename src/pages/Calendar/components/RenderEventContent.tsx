import React from 'react';
import { Box, Text, chakra, Center } from '@chakra-ui/react';
import { EventContentArg } from '@fullcalendar/react';

export const RenderEventContent = (eventInfo: EventContentArg) => {
	return (
		<Box w="100%" whiteSpace="normal">
			<Text
				fontSize={{ base: '10px', lg: '14px' }}
				lineHeight={{ base: '16px', lg: '20px' }}
				fontWeight="600"
				noOfLines={2}>
				{eventInfo.event.title}
			</Text>
			<Text variant="bodySmall">{eventInfo.timeText}</Text>
			{eventInfo.event.extendedProps.amount > 0 && (
				<Center
					position="absolute"
					bg="primary.main"
					minW={{ base: '18px', lg: '25px' }}
					minH={{ base: '18px', lg: '25px' }}
					borderRadius="50%"
					top="-10px"
					right="-10px">
					<chakra.span
						fontSize={{ base: '10px', lg: '12px' }}
						lineHeight="16px"
						fontWeight="600"
						color="white">
						{eventInfo.event.extendedProps.amount}
					</chakra.span>
				</Center>
			)}
		</Box>
	);
};
