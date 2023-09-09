let day = new Intl.DateTimeFormat("en-US",  { weekday: "long" }).format(new Date());
document.getElementById('currentDayOfTheWeek').innerHTML = day;

let username = document.getElementsByTagName('h1').item(0).innerHTML;
document.getElementsByTagName('img').item(0).setAttribute('alt', username)


const updateUTCClock = () => {
    const now = new Date();
    const utcTime = document.getElementById('currentUTCTime');
    const hoursUTC = now.getUTCHours().toString().padStart(2, '0');
    const minutesUTC = now.getUTCMinutes().toString().padStart(2, '0');
    const secondsUTC = now.getUTCSeconds().toString().padStart(2, '0');
    setTimeout(updateUTCClock, 1000);

    utcTime.textContent = `${hoursUTC}:${minutesUTC}:${secondsUTC}`;
}

updateUTCClock();

const updateLocalClock = () => {
    const now = new Date();
    const localTime = document.getElementById('clock');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setTimeout(updateLocalClock, 1000);

    localTime.textContent = `${hours}:${minutes}`;
}

updateLocalClock();