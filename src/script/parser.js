// module.exports.hourly_count_data = (data) => {
//   const n = 8; //offset hr from 12:00
//   var arr = data.map(({ hour, count }) => {
//     return { x: hour, y: count };
//   });
//   arr.push(...arr.slice(0, n));
//   return arr.slice(n);
// };

module.exports.active_time = (data) => {
  if (data == 0)
    return "12 AM"
  if (data == 12)
    return "12 PM"
  return data < 12 ? data + " AM" : data - 12 + " PM";
};

module.exports.active_time_type = (data) => {
  return data < 12 && data > 4
    ? "Looks like y'all are Early Birds 🌅"
    : data > 20 || (data > 0 && data < 4)
      ? "Looks like y'all are Night Owls 🦉"
      : "";
};
module.exports.months = {
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

module.exports.format_time_gap = (data) => {
  return timeConverter(data);
};

module.exports.time_gap = ({ start_time, end_time }) => {
  var a = new Date(start_time);
  var b = new Date(end_time);

  return Math.floor((b - a) / 86400000);
};
function timeConverter (UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month;
  return time;
}
