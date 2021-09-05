export const getDateString = (date) => {
  let dateString = "";
  dateString += date.day >= 10 ? date.day : "0" + date.day;
  dateString += date.month
    ? "." + (date.month >= 10 ? date.month : "0" + date.month)
    : "";
  dateString += date.year ? "." + date.year : "";

  return dateString;
};
