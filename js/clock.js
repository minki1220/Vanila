const Clock = document.querySelector("#clock");

function getclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  Clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getclock();
setInterval(getclock, 1000);
