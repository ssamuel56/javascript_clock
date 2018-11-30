function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondHand = document.querySelector('.second-hand');
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minHand = document.querySelector('.min-hand');
  const minutesDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours()
  const hourHand = document.querySelector('.hour-hand')
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log(seconds);
}
setInterval(setDate, 1000);
