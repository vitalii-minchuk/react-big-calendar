import React, { useState } from 'react';
import {
	Flex,
	Box,
	Tabs,
	useDisclosure,
} from '@chakra-ui/react';
import {localizer, StyleWrapper,
} from './BigCalendar.config';
import {
	CalendarViewSwitchButton,
	MonthViewDayCellContent,
	RenderEventContent,
} from './components';
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
// import { CalendarEvents } from '../../common/modals';
// import dayjs from 'dayjs';


interface ICalendarProps {
	// onDatesSet: (value: DatesSetArg) => void;
	// changeCalendarView: (value: {
	// 	view: string;
	// 	period: CalendarPeriod;
	// }) => void;
	// loading: boolean;
	events: any;
}

export const BigCalendar = React.forwardRef<Calendar, ICalendarProps>(
	({ events }, ref) => {
		const { isOpen, onOpen, onClose } = useDisclosure();

		return (
			<Box>
        <StyleWrapper>
					<Calendar 
										events={events}
										localizer={localizer}
										style={{height: 500}}
										/>
        </StyleWrapper>
			</Box>
		);
	},
);
