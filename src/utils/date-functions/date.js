const getDate = (date) =>
  date.slice(0, 10).replaceAll("-", "/").split("/").reverse().join("/");

const getTime = (date) => date.slice(11, 16);

export { getDate, getTime };
