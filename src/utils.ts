const LOCALE = 'cs-CZ';

const getDate = (date: string): Date => new Date(date);

export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions,
): string => new Intl.DateTimeFormat(LOCALE, options).format(getDate(date));

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat(LOCALE).format(value);
