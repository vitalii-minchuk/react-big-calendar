import React, { useMemo } from "react";
import { Calendar as ReactBigCalendar, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendarContainer from "./pages/Calendar/BigCalendar.container";

const App: React.FC = () => {

  return (
    <div>
      <BigCalendarContainer/>
    </div>
  );
};

export default App;
