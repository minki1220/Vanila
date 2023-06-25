const Clock = document.querySelector("#clock");
const DateInfo = document.querySelector("#date");

function getDateTime() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  Clock.innerText = `${hours}:${minutes}:${seconds}`;
  DateInfo.innerText = `${year}-${month}-${day}`;
}

getDateTime();
setInterval(getDateTime, 1000);
