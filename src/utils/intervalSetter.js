export default function (start, timeout, setter = () => {}, continueFlag = false) {
  setInterval(() => {
    if(!continueFlag) {
      setter(Date.now() - start);
    } else {
      setter(passed => passed+= 1000);
    }

  },timeout);
}