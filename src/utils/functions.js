export const getDaysInMonth = (month, year) => {
  let date = new Date(year, month, 1);
  let days = [];
  let idx = 0;
  while (date.getMonth() === month && idx < 15) {
    let d = new Date(date);
    days.push(
      d.getDate() + ' ' + d.toLocaleString('ru-ru', { month: 'short' })
    );
    date.setDate(date.getDate() + 1);
    idx += 1;
  }
  return days;
};

export const fetchJSON = (url, options = {}) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.status === 200) {
        throw response.json();
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      throw error;
    });
};
