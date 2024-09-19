function convertMinutes(minute) {
  let hours = Math.floor(minute / 60);
  let minutes = minute % 60;
  return `${hours} часов ${minutes} минут`;
}
console.log(convertMinutes(130));
