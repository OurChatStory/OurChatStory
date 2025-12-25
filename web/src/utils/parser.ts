export const activeTime = (hour: number): string => {
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
};

export const activeTimeType = (hour: number): string => {
  return hour < 12 && hour > 4
    ? "Looks like y'all are Early Birds"
    : hour > 20 || (hour > 0 && hour < 4)
    ? "Looks like y'all are Night Owls 🦉"
    : "";
};

export const isNightOwl = (hour: number): boolean => {
  return hour < 12 && hour > 4
    ? false
    : hour > 20 || (hour > 0 && hour < 4)
    ? true
    : false;
};

export const months: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

export const monthlyCountData = (data: Array<{ month: string; count: number }>) => {
  return data.map(({ month, count }) => ({ x: month, y: count }));
};

export const hourlyCountData = (data: Array<{ hour: number; count: number }>) => {
  return data
    .sort((a, b) => a.hour - b.hour)
    .map(({ hour, count }) => ({ x: hour, y: count }));
};

export const formatDate = (date: string): string => {
  const inputDate = new Date(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = inputDate.getDate();
  const month = inputDate.getMonth();
  return `${day} ${monthNames[month]}`;
};

const generateHash = (seed: string): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const getRandomElement = <T>(array: T[], randomKey?: string): T => {
  const key = randomKey || Math.random().toString();
  const hash = generateHash(key) % array.length;
  return array[hash];
};
