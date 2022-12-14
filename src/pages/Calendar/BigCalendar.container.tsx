import React, { useRef } from 'react';
import { Calendar } from 'react-big-calendar';
import dayjs from 'dayjs';
import { BigCalendar } from './BigCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { mockEvents } from './constants';

export const BigCalendarContainer: React.FC = () => {
	const calendarRef = useRef<Calendar>(null);
	// const dispatch = useDispatch();

	// const { events, loading } = useSelector(
	// 	(state: RootStore) => state.calendar,
	// );

	const changeCalendarView = (data: {
		view: string;
		// period: CalendarPeriod;
	}) => {
		// const calendarApi = calendarRef?.current?;
		// calendarApi changeView(data.view);
	};

	// const onDatesSet = (data: DatesSetArg) => {
	// 	const startOfMonth = dayjs(data.view.calendar.getDate()).startOf('M');
	// 	dispatch(
	// 		getCalendarEventsRequest({
	// 			Period: (typesToPeriod as { [key: string]: CalendarPeriod })[
	// 				data.view.type
	// 			],
	// 			StartDate:
	// 				data.view.type === 'dayGridMonth'
	// 					? startOfMonth.format('YYYY-MM-DD')
	// 					: dayjs(data.start).format('YYYY-MM-DD'),
	// 		}),
	// 	);
	// };

	return (
		<BigCalendar
			ref={calendarRef}
			events={mockEvents}
		/>
	);
};

export default BigCalendarContainer;
