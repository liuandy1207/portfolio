// src/utils/formatDate.ts

interface ParsedDate {
  year: number;
  month: number; // 1-indexed
  day?: number;
}

function parseProjectDate(value: string): ParsedDate {
  const [year, month, day] = value.split('-').map(Number);
  return { year, month, day };
}

function formatSingle({ year, month, day }: ParsedDate): string {
  const date = new Date(year, month - 1, day ?? 1);
  return day
    ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatMonthOnly({ year, month }: ParsedDate): string {
  return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'long' });
}

/**
 * Formats a project's date range for display.
 * - "2026-06" -> "June 2026"
 * - "2026-06-15" -> "June 15, 2026"
 * - start "2026-06" + end "2026-08" -> "June – August 2026"
 * - start "2026-06-15" + end "2026-08-02" -> "June 15, 2026 – August 2, 2026"
 */
export function formatProjectDate(startDate: string, endDate?: string): string {
  const start = parseProjectDate(startDate);
  const startLabel = formatSingle(start);

  if (!endDate) return startLabel;

  const end = parseProjectDate(endDate);
  const endLabel = formatSingle(end);

  if (startLabel === endLabel) return startLabel;

  // Both month-only and same year: shorten to "June – August 2026"
  if (!start.day && !end.day && start.year === end.year) {
    return `${formatMonthOnly(start)} – ${endLabel}`;
  }

  return `${startLabel} – ${endLabel}`;
}