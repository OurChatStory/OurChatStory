// module.exports.hourly_count_data = (data) => {
//   const n = 8; //offset hr from 12:00
//   var arr = data.map(({ hour, count }) => {
//     return { x: hour, y: count };
//   });
//   arr.push(...arr.slice(0, n));
//   console.log(arr.slice(n));
//   return arr.slice(n);
// };

// module.exports.monthly_count_data = (data) => {
//   return data.map(({ month, count }) => {
//     return { x: month, y: count };
//   });
// };

// module.exports.active_time = (data) => {
//   return data < 12 ? data + " AM" : data - 12 + " PM";
// };

// module.exports.active_time_type = (data) => {
//   return data < 9 && data > 4
//     ? "Looks like you both are Early Birds 🌅"
//     : data > 20
//     ? "Looks like you both are night owl🦉"
//     : "";
// };
// module.exports.months = {
//   Jan: "January",
//   Feb: "February",
//   Mar: "March",
//   Apr: "April",
//   May: "May",
//   Jun: "June",
//   Jul: "July",
//   Aug: "August",
//   Sep: "September",
//   Oct: "October",
//   Nov: "November",
//   Dec: "December",
// };

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
