import { differenceInDays } from 'date-fns';
import { type OptionsWithTZ, format, utcToZonedTime } from 'date-fns-tz';

export const getParamDateString = (
  date: Date,
  pattern: string = "yyyy-MM-dd'T'HH:mm:ss",
  isZ: boolean = true,
  step?: number
) => {
  let currentDate: Date = date;

  const endOfDayUTC = utcToZonedTime(currentDate, 'UTC');

  const formattedDate = format(endOfDayUTC, pattern, { timeZone: 'UTC' });

  return `${formattedDate}${isZ ? 'Z' : ''}`;
};

export const getFormmatedDate = ({
  date,
  form = 'yyyy.MM.dd HH:mm:ss',
  options,
}: {
  date?: Date | string | null;
  form?: string;
  options?: OptionsWithTZ;
}) => {
  if (!date) return '-';

  const dateValue = convertToDate(date);
  const formValue = form || 'yyyy.MM.dd HH:mm:ss';
  const forrmattedDate = format(dateValue, formValue, options);

  return forrmattedDate;
};

export const getDiffOfTwoDate = ({
  from,
  to,
}: {
  from: Date | string | undefined;
  to: Date | string | undefined;
}) => {
  const fromDate = convertToDate(from);
  const toDate = convertToDate(to);
  return differenceInDays(toDate, fromDate);
};

export const convertToDate = (date?: Date | string) => {
  const current = date ? new Date(date) : new Date();
  return current;
};
