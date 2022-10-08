import bell from "../assets/bell.wav";
const breakAlert = (intervalRef) => {
  const breakBell = new Audio(bell);
  clearInterval(intervalRef);
  breakBell.play();
};
export default breakAlert;
