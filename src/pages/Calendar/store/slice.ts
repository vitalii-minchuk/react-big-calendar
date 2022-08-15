import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { PayloadError } from '../../../common/types';
// import { CalendarPeriod, CalendarEventsResponse } from '../types';

// interface InitialState {
// 	loading: boolean;
// 	events: CalendarEventsResponse[];
// 	// errors: PayloadError[];
// }

// const initialState: InitialState = {
// 	loading: false,
// 	events: [],
// 	// errors: [],
// };

// const calendarReducer = createSlice({
// 	name: 'calendar',
// 	initialState,
// 	reducers: {
// 		getCalendarEventsRequest: (
// 			state,
// 			action: PayloadAction<{
// 				StartDate: string;
// 				Period: CalendarPeriod;
// 			}>,
// 		) => {
// 			state.loading = true;
// 			state.events = [];
// 			// state.errors = [];
// 		},
// 		getCalendarEventsSuccess: (
// 			state,
// 			action: PayloadAction<CalendarEventsResponse[]>,
// 		) => {
// 			state.loading = false;
// 			state.events = action.payload;
// 		},
// 		getCalendarEventsError: (
// 			state,
// 			// action: PayloadAction<PayloadError[]>,
// 		) => {
// 			state.loading = false;
// 			// state.errors = action.payload;
// 		},
// 	},
// });

// export const {
// 	getCalendarEventsError,
// 	getCalendarEventsRequest,
// 	getCalendarEventsSuccess,
// } = calendarReducer.actions;

// export default calendarReducer.reducer;
