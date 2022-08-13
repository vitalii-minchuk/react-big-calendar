import React, { useEffect, useState } from 'react';
import { Box, Center, Text, chakra, useDisclosure } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { theme } from '../../../common/theme';
import { MockEvents } from '../Calendar';
import { CalendarEvents } from '../../../common/modals';

export const MonthViewDayCellContent = date => {
	const [dayEvents, setDayEvents] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		const dayEvents = MockEvents.filter(
			event =>
				dayjs(event.start).format('DD/MM/YYYY') ===
				dayjs(date.date).format('DD/MM/YYYY'),
		);
		setDayEvents(dayEvents);
	}, []);

	return (
		<>
			<Text align="end">{dayjs(date.date).format('D')}</Text>
			{!!dayEvents?.length && (
				<Box
					onClick={() => onOpen()}
					maxW="100%"
					p={2}
					m={2}
					cursor={'pointer'}
					position="relative"
					border="1px solid"
					borderRadius={4}
					borderColor={theme.colors.primary.main}>
					<Text
						fontSize={{ base: '10px', lg: '14px' }}
						lineHeight={{ base: '16px', lg: '20px' }}
						fontWeight="600"
						noOfLines={2}>
						{dayEvents[0].title}
					</Text>

					<Text variant="bodySmall">
						{`${dayjs(dayEvents[0].start).format('HH')} - ${dayjs(
							dayEvents[0].end,
						).format('HH')}`}
					</Text>
					{dayEvents?.length > 1 && (
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
								{dayEvents.length}
							</chakra.span>
						</Center>
					)}
				</Box>
			)}
			<CalendarEvents
				dateTitle={dayjs(dayEvents[0]?.start).format('DD/MM/YYYY')}
				onClose={() => {
					onClose();
				}}
				isOpen={isOpen}
				events={dayEvents}
			/>
		</>
	);
};
