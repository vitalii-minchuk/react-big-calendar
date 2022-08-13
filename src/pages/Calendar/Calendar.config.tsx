import { ReactNode } from 'react';
import { Calendar as ReactBigCalendar, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import styled from '@emotion/styled';
import {
	CalendarConfigT,
	CalendarEvent,
	fullcalendarEvent,
	CalendarEventsResponse,
} from './types';
import dayjs from 'dayjs';
import { theme } from '../../common/theme';


export const StyleWrapper = styled.div<{
	children: ReactNode;
	isDayView?: boolean;
}>`
	.fc-today-button {
		display: none;
	}
`

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// 	.fc .fc-button-primary {
// 		color: #3d3d3d;
// 		background: transparent !important;
// 		margin-right: 8px;
// 	}
// 	.fc-direction-ltr .fc-button-group > .fc-button:not(:first-of-type) {
// 		border-bottom-left-radius: 4px;
// 		border-top-left-radius: 4px;
// 		border-color: #ebebec;
// 	}
// 	.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
// 		border-top-right-radius: 4px;
// 		border-bottom-right-radius: 4px;
// 		border-color: #ebebec;
// 	}
// 	.fc .fc-toolbar-title {
// 		font-size: 20px;
// 		margin: 0;
// 		font-weight: 600;
// 	}
// 	.fc-col-header-cell {
// 		border-right-width: 0;
// 		color: ${theme.colors.primary.main};
// 		height: 50px;
// 		font-size: 12px;
// 		text-align: ${props => (props.isDayView ? 'center' : 'right')};
// 		padding-top: ${props => (props.isDayView ? '15px' : 0)};
// 	}
// 	.fc-col-header {
// 		background-color: ${theme.colors.primary.surface};
// 	}
// 	.fc-theme-standard th {
// 		border: none;
// 		border-bottom: 1px solid ${theme.colors.neutral['30']};
// 	}
// 	.fc-theme-standard th:last-child {
// 		border-right: 1px solid ${theme.colors.neutral['30']};
// 	}
// 	.fc-col-header tr:last-child {
// 		border-right: 1px solid ${theme.colors.neutral['30']};
// 	}
// 	.fc-day-today {
// 		background: transparent !important;
// 		border: none !important;
// 	}
// 	.fc-daygrid-day-number {
// 		font-size: 12px;
// 		font-weight: 600;
// 	}
// 	.fc .fc-timegrid-axis-cushion,
// 	.fc .fc-timegrid-slot-label-cushion {
// 		font-size: 12px;
// 		font-weight: 600;
// 	}
// 	.fc .fc-timegrid-slot {
// 		height: 50px;
// 	}
// 	.fc-timegrid-event {
// 		background-color: ${theme.colors.primary.surface};
// 		border: 1px solid ${theme.colors.primary.main};
// 		padding: 12px;
// 		cursor: pointer;
// 	}
// 	.fc-timegrid-event-harness-inset:hover {
// 		z-index: 20 !important;
// 	}
// 	.fc-daygrid-day-events {
// 		display: none;
// 	}
//   //                                 > .fc-daygrid-event-harness:not(:first-of-type)
// 	.fc-event-main-frame {
// 		display: flex;
// 		flex-direction: column-reverse;
// 		justify-content: flex-end;
// 	}
// 	.fc-v-event .fc-event-main {
// 		color: ${theme.colors.primary.main};
// 		font-weight: 600;
// 	}
// 	.fc-v-event .fc-event-main-frame {
// 		height: 30%;
// 	}
// 	.fc-event-title-container {
// 		height: 30% !important;
// 	}
// 	.fc-event-time {
// 		font-weight: 400;
// 	}
// 	.fc-daygrid-event-dot {
// 		display: none;
// 	}
// 	.fc .fc-daygrid-day-events a {
// 		background-color: transparent !important;
// 		border: 1px solid ${theme.colors.primary.main};
// 		color: ${theme.colors.primary.main};
// 		padding: 12px;
// 		margin: 12px;
// 		display: flex;
// 		flex-direction: column;
// 		align-items: flex-start;
// 		cursor: pointer;
// 	}
// 	@media (max-width: 768px) {
// 		.fc-timegrid-event {
// 			padding: 0;
// 		}
// 		.fc .fc-daygrid-day-events a {
// 			padding: 5px;
// 			margin: 5px;
// 		}
// 	}
// `;

// export const CalendarConfig: CalendarConfigT = {
// 	slotMinTime: '07:00:00',
// 	slotMaxTime: '21:00:00',
// 	dayHeaderFormat: {
// 		weekday: 'short',
// 		day: 'numeric',
// 		month: 'short',
// 		omitCommas: true,
// 	},
// 	slotDuration: '01:00:00',
// };

// export const combineDateAndTime = (date: string, time: string) => {
// 	return dayjs(date)
// 		.set(
// 			'hour',
// 			dayjs(time.replace('0001', new Date().getFullYear() + '')).get(
// 				'hour',
// 			),
// 		)
// 		.set(
// 			'minute',
// 			dayjs(time.replace('0001', new Date().getFullYear() + '')).get(
// 				'minute',
// 			),
// 		)
// 		.set('seconds', 0)
// 		.set('milliseconds', 0)
// 		.toISOString();
// };
 
// const mapToEvent = (
// 	item: CalendarEvent,
// 	eventDate: string,
// ): fullcalendarEvent => ({
// 	title: item.name,
// 	start: new Date(eventDate.replace('00:00:00', item.startTime)),
// 	end: new Date(eventDate.replace('00:00:00', item.endTime)),
// });

// export const getEventsForMonthView = (events: CalendarEventsResponse[]) =>
// 	events.map(elem => ({
// 		...mapToEvent(elem.events[0], elem.date),
// 		amount: elem.events.length - 1,
// 		otherEvents: elem.events
// 			.slice(1)
// 			.map(otherEv => mapToEvent(otherEv, elem.date)),
// 	}));

// export const getEventsForWeekView = (events: CalendarEventsResponse[]) =>
// 	events
// 		.map(elem =>
// 			elem.events.map(item => ({
// 				title: item.name,
// 				start: elem.date.replace('00:00:00', item.startTime),
// 				end: elem.date.replace('00:00:00', item.endTime),
// 			})),
// 		)
// 		.flat();
