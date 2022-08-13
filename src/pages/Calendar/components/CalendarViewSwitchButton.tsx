import React from 'react';
import { Tab, Text } from '@chakra-ui/react';
import { CalendarPeriod } from '../types';

interface CalendarViewSwitchButton {
	index: number;
	handleTabSwitch: (
		gridView: string,
		period: CalendarPeriod,
		index: number,
	) => void;
	gridView: string;
	title: string;
	period: CalendarPeriod;
}
export const CalendarViewSwitchButton: React.FC<CalendarViewSwitchButton> = ({
	index,
	handleTabSwitch,
	gridView,
	title,
	period,
}) => (
	<Tab
		_after={
			index !== 2
				? {
						content: '" "',
						position: 'absolute',
						right: 0,
						width: '1px',
						height: '24px',
						backgroundColor: '#EBEBEB',
				  }
				: undefined
		}
		py={'14px'}
		px={'24px'}
		onClick={() => handleTabSwitch(gridView, period, index)}
		position={'relative'}
		_selected={{
			color: 'neutral.100',
			borderBottom: '3px solid #126065',
		}}>
		<Text variant={'bodyMedium'}>{title}</Text>
	</Tab>
);
