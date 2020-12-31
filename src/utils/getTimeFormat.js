export default function (ms) {
  const defaultHours   = Math.floor(ms / 3600000),
        defaultMinutes = Math.floor((ms % 3600000) / 60000),
        defaultSeconds = Math.floor(((ms % 360000) % 60000) / 1000);

  let hours, seconds, minutes;

  defaultHours < 10
  ? hours = `0${defaultHours}`
  : hours = defaultHours;

  defaultMinutes < 10
  ? minutes = `0${defaultMinutes}`
  : minutes = defaultMinutes;

  defaultSeconds < 10
  ? seconds = `0${defaultSeconds}`
  : seconds = defaultSeconds;

  const time = `${hours} : ${minutes} : ${seconds}`

  return { time };
}