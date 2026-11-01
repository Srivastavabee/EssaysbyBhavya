const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Formats a date as "31 August 2026".
 */
export function formatEditorialDate(date: Date): string {
  const day = date.getUTCDate();
  const month = MONTHS[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Formats a date as a plain year, e.g. "2026".
 */
export function formatYear(date: Date): string {
  return String(date.getUTCFullYear());
}

export function formatISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}
