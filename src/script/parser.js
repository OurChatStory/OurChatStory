module.exports.monthly_count_data = (data) => {
  return data.map(({ month, count }) => {
    return { x: month, y: count };
  });
};
module.exports.hourly_count_data = (data) => {
  return data.map(({ hour, count }) => {
    return { x: hour, y: count };
  });
};
