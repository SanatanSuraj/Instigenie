'use client';

import { useState, useMemo } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enIN } from 'date-fns/locale/en-IN';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-IN': enIN,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export type ScheduleEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resourceId?: string;
  type?: 'health-check' | 'vaccination' | 'dental' | 'eye-check' | 'consultation';
  description?: string;
  status?: 'scheduled' | 'completed' | 'cancelled';
};

interface ScheduleCalendarProps {
  events: ScheduleEvent[];
  onEventSelect?: (event: ScheduleEvent) => void;
  onRangeChange?: (range: Date[] | { start: Date; end: Date }) => void;
  onNavigate?: (date: Date, view: string) => void;
}

const eventStyleGetter = (event: ScheduleEvent) => {
  let backgroundColor = '#00B4D3'; // Default healing-teal color

  switch (event.type) {
    case 'health-check':
      backgroundColor = '#00B4D3'; // healing-teal
      break;
    case 'vaccination':
      backgroundColor = '#17254E'; // trust-navy
      break;
    case 'dental':
      backgroundColor = '#1E2959'; // soft-charcoal
      break;
    case 'eye-check':
      backgroundColor = '#4B5563'; // gray-600
      break;
    case 'consultation':
      backgroundColor = '#047857'; // emerald-700
      break;
  }

  if (event.status === 'completed') {
    backgroundColor = '#059669'; // emerald-600
  } else if (event.status === 'cancelled') {
    backgroundColor = '#DC2626'; // red-600
  }

  return {
    style: {
      backgroundColor,
      borderRadius: '4px',
      opacity: 0.9,
      color: '#fff',
      border: 'none',
      display: 'block',
    },
  };
};

export default function ScheduleCalendar({ 
  events, 
  onEventSelect, 
  onRangeChange,
  onNavigate 
}: ScheduleCalendarProps) {
  const [view, setView] = useState<typeof Views[keyof typeof Views]>(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  return (
    <div className="h-[700px] bg-white dark:bg-soft-charcoal/50 rounded-xl shadow-lg p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={defaultDate}
        defaultView={Views.MONTH}
        date={date}
        onNavigate={(newDate) => {
          setDate(newDate);
          onNavigate?.(newDate, view);
        }}
        scrollToTime={scrollToTime}
        onSelectEvent={(event) => onEventSelect?.(event as ScheduleEvent)}
        onRangeChange={(range) => onRangeChange?.(range)}
        onView={(newView) => setView(newView)}
        eventPropGetter={eventStyleGetter}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        popup
        className="light-calendar dark:dark-calendar"
      />
    </div>
  );
}
