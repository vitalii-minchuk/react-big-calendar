import React, { useState } from 'react';
import {
	Flex,
	Box,
	Tabs,
	useDisclosure,
} from '@chakra-ui/react';
import {
	CalendarConfig, StyleWrapper,
} from './Calendar.config';
import {
	CalendarViewSwitchButton,
	MonthViewDayCellContent,
	RenderEventContent,
} from './components';
// import { CalendarEvents } from '../../common/modals';
// import dayjs from 'dayjs';


interface ICalendarProps {
	// onDatesSet: (value: DatesSetArg) => void;
	// changeCalendarView: (value: {
	// 	view: string;
	// 	period: CalendarPeriod;
	// }) => void;
	// loading: boolean;
	// events: CalendarEventsResponse[];
}

export const Calendar = React.forwardRef<ReactBigCalendar, ICalendarProps>(
	({ changeCalendarView, onDatesSet, events, loading }, ref) => {
		const { isOpen, onOpen, onClose } = useDisclosure();

		return (
			<Box>
        <StyleWrapper>

        </StyleWrapper>
			</Box>
		);
	},
);
