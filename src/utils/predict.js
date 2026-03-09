const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDate(year, month, day) {
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

function getDayOfYear(year, month, day) {
  const start = new Date(year, 0, 0);
  const date = new Date(year, month - 1, day);
  return Math.floor((date - start) / 86400000);
}

function dayOfYearToDate(targetYear, dayOfYear) {
  const date = new Date(targetYear, 0, dayOfYear);
  return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
}

/**
 * Predict the next release date given a history of past dates.
 * Uses a weighted average of recent history (more recent = more weight).
 */
export function predictDate(history, targetYear) {
  if (!history || history.length === 0) return null;

  const recent = history.slice(-4);
  const daysOfYear = recent.map(({ year, month, day }) => getDayOfYear(year, month, day));

  // Weighted average: index 0 = weight 1, last = weight N
  const weights = recent.map((_, i) => i + 1);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const weightedAvgDay = Math.round(
    daysOfYear.reduce((sum, d, i) => sum + d * weights[i], 0) / totalWeight,
  );

  const { month, day } = dayOfYearToDate(targetYear, weightedAvgDay);
  return formatDate(targetYear, month, day);
}
