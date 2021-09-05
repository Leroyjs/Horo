import { zodiacs } from "./zodiac";

export const getZodiacSignByDate = (date = {}) => {
  const zodiacName = zodiacs.filter((item) => {
    return (
      (item.dateFrom.day <= date.day && item.dateFrom.month === date.month) ||
      (item.dateTo.day >= date.day && item.dateTo.month === date.month)
    );
  })[0];

  return zodiacName;
};
export const getZodiacSignById = (id) => {
  const zodiacName = zodiacs.filter((item) => {
    return item.id === id;
  })[0];

  return zodiacName;
};
