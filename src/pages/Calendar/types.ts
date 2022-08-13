export interface ICalendar {
	callModal: (type: string, start: Date | null, end: Date | null) => void;
	setCurrcetWeek: any;
	calendarRef: any;
	dateRange: any;
	setNextWeek: any;
	setPrevWeek: any;
	events: Event[];
	eventTypes: string[];
	onHandleEvents: (type: string) => void;
	loading: boolean;
	isAccessAllowed: boolean;
}

export interface ICalendarButtonItemProps {
	title: string;
	primaryColor: string;
	opacityColor: string;
	eventTypes: string[];
	type: string;
	isAccessAllowed: boolean;
	onClick: (type: string) => void;
}

export interface IModal {
	isOpen: boolean;
	onClose: () => void;
	mockEvents?: any;
}

export type SearchOpenHouse = {
	city?: string;
	property?: string;
	minPrice?: string;
	maxPrice?: string;
};

export type AssistanceRequests = {
	search?: string;
	property?: string;
	minPrice?: string;
	maxPrice?: string;
};

export type CalendarConfigT = {
	slotMinTime: string;
	slotMaxTime: string;
	dayHeaderFormat: any;
	slotDuration: string;
};

export type Event = {
	id: string;
	title: string;
	start: string;
	end: string;
	color: string;
	borderColor?: string;
	type: string;
};

export type CalendarRequestPayload = {
	fromDate: string;
	toDate: string;
	calendarCategoryIds: number[];
};

export type CalendarItemType = {
	assistRequestIds: number[];
	date: string;
	fromTime: string;
	toTime: string;
	categoryId: number;
};

export type CalendarItemsResponse = {
	availableForApplication: CalendarItemType[];
	myActivities: CalendarItemType[];
	otherAgentActivities: CalendarItemType[];
};

export type AvailableForApplicationPayload = {
	pageNumber: number;
	pageSize: number;
	categoryId: number;
	typeIds: number[];
	date: string;
	fromTime: string;
	toTime: string;
};

export type AvailableForApplicationResponse = {
	id: number;
	requestTypeId: number;
	requestTypeName: string;
	requestCategoryId: number;
	ownerId: number;
	dateTime: string;
	fromTime: string;
	createdAt: string;
	duration: number;
	propertiesToShow: number;
	states: string[];
	city: null | string;
	addresses: string[];
	postalCode: null | string;
	houseType: null | string;
	photo: null | string;
	price: number;
	relatedUserAvatar: null | any;
	timeSlot: null | any;
	canBeAcceptedTill: string;
};

export type OpenHousesPayload = {
	pageNumber: number;
	pageSize: number;
	categoryId: number;
	date: string;
	fromTime?: string;
	toTime?: string;
	cityOrNeighborhood: string;
	listingTypes: number[];
	fromPrice: number;
	toPrice: number;
};

export type OpenHousesResponse = {
	id: number;
	requestTypeId: number;
	requestTypeName: string;
	requestCategoryId: number;
	ownerId: number;
	dateTime: string;
	fromTime: string;
	toTime: string;
	createdAt: string;
	duration: number;
	propertiesToShow: number;
	states: string[];
	city: null | string;
	addresses: string[];
	postalCode: null | string;
	houseType: null | string;
	photo: string;
	price: number;
	relatedUserAvatar: null | any;
	timeSlot: null | any;
	canBeAcceptedTill: string;
};

export type CalendarModalItem = {
	startTime: string;
	models: AvailableForApplicationResponse[];
};

export type CalendarEvent = {
	id: number;
	name: string;
	startTime: string;
	endTime: string;
};

export type fullcalendarEvent = {
	title: string;
	start: Date;
	end: Date;
};

export enum CalendarPeriod {
	Day = 1,
	Week,
	Month,
}

export type CalendarEventsResponse = {
	date: string;
	events: CalendarEvent[];
};
