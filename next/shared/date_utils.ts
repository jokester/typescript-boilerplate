import { formatDistance, formatDistanceStrict } from 'date-fns';

export const dateUtils = {
  asRelative(target: Date, base: Date = new Date()) {
    return formatDistanceStrict(target, base, { addSuffix: true });
  },
} as const;
