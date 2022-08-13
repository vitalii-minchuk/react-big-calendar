import React, { useRef } from 'react';
import { Calendar } from './Calendar';
import { Calendar as ReactBigCalendar } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendarEventsRequest } from './store/slice';
import dayjs from 'dayjs';
import { CalendarPeriod } from './types';
import FullCalendar, { DatesSetArg } from '@fullcalendar/react';
import { typesToPeriod } from '../../common/constants';
import { RootStore } from '../../redux';

export const CalendarContainer: React.FC = () => {
	const calendarRef = useRef<ReactBigCalendar>(null);
	const dispatch = useDispatch();

	const { events, loading } = useSelector(
		(state: RootStore) => state.calendar,
	);

	const changeCalendarView = (data: {
		view: string;
		period: CalendarPeriod;
	}) => {
		// const calendarApi = calendarRef?.current?;
		// calendarApi changeView(data.view);
	};

	const onDatesSet = (data: DatesSetArg) => {
		const startOfMonth = dayjs(data.view.calendar.getDate()).startOf('M');
		dispatch(
			getCalendarEventsRequest({
				Period: (typesToPeriod as { [key: string]: CalendarPeriod })[
					data.view.type
				],
				StartDate:
					data.view.type === 'dayGridMonth'
						? startOfMonth.format('YYYY-MM-DD')
						: dayjs(data.start).format('YYYY-MM-DD'),
			}),
		);
	};

	return (
		<Calendar
			ref={calendarRef}
			changeCalendarView={changeCalendarView}
			onDatesSet={onDatesSet}
			loading={loading}
			events={events}
		/>
	);
};

export default CalendarContainer;
