function updateTime(){
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    clockElement.innerHTML = `<p>Current Date and Time: ${dateTimeString}</p>`;

}

setInterval(updateTime, 1000);
updateTime();
