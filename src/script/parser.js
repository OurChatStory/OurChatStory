module.exports.monthly_count_data = (data) => {
  return [
    { x: "Jan", y: data.Jan },
    { x: "Feb", y: data.Feb },
    { x: "Mar", y: data.Mar },
    { x: "Apr", y: data.Apr },
    { x: "May", y: data.May },
    { x: "Jun", y: data.Jun },
    { x: "Jul", y: data.Jul },
    { x: "Aug", y: data.Aug },
    { x: "Sep", y: data.Sep },
    { x: "Oct", y: data.Oct },
    { x: "Nov", y: data.Nov },
    { x: "Dec", y: data.Dec },
  ];
};

// module.exports.emoji_data = (data) => {
//   var arr = [];
//   for (var i in Object.keys(data)) {
//     arr.push({
//       emoji: Object.keys(data)[i],
//       count: data[Object.keys(data)[i]],
//     });
//   }
//   return arr.slice(0, 6);
// };
