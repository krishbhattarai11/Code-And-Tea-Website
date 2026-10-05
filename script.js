console.log("Script.js is connected")
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
function dayUntil(eventDate, today){
    const mPerDay = 1000 *60*60*24;
    const diff = eventDate - today;
    return Math.ceil(diff/mPerDay);
}
const eventTime = document.querySelector("#intro time").dateTime;
const eventDate = new Date(eventTime);
const days = dayUntil(eventDate, new Date());

document.querySelector(".countdown").textContent = `${days} days to go`;