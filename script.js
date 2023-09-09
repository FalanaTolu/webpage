let day = new Intl.DateTimeFormat("en-US",  { weekday: "long" }).format(new Date());
document.getElementById('currentDayOfTheWeek').innerHTML = day;

// let utcTime = new Date(Date.UTC());
// let utcTime = new Date().getTime();
// let utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
var today = new Date().toUTCString();
document.getElementById('currentUTCTime').innerHTML = today;

let username = document.getElementsByTagName('h1').item(0).innerHTML;
console.log(username);
document.getElementsByTagName('img')[0].setAttribute('alt', username)
console.log(document.getElementsByTagName('img')[0].attributes)


const updateClock = () => {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    setInterval(updateClock, 1000);

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();