import { format, formatDistance } from 'date-fns';

function localTime(date: Date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

function relativeTime(date: Date, baseDate = Date.now()) {
  return formatDistance(date, baseDate);
}

function naturalTime(date: Date, now = Date.now()) {
  return formatDistance(date, now, { addSuffix: true });
}

export const datetimeFormatter = {
  localTime,
  relativeTime,
  naturalTime,
} as const;
