function getLatestVisit() {
    return JSON.parse(window.localStorage.getItem("latestVisit"));
}

const msToDays = 86400000;
const currentDate = Date.now();
const latestVisitMessage = document.getElementById("latestVisit");
const latestVisit = getLatestVisit() || 0;
if (latestVisit === 0) {
    latestVisitMessage.textContent = "Welcome! Let us know if you have any questions."
    window.localStorage.setItem("latestVisit", currentDate)
}
else if (currentDate - getLatestVisit() < msToDays) {
    latestVisitMessage.textContent = "Back so soon! Awesome!"
    window.localStorage.setItem("latestVisit", currentDate)
}
else {
    if ((latestVisit - getLatestVisit()) / msToDays < 1) {
        latestVisitMessage.textContent = `You last visited ${((latestVisit - getLatestVisit()) / msToDays).toFixed(0)} day ago.`
    }
    else {
        latestVisitMessage.textContent = `You last visited ${((latestVisit - getLatestVisit()) / msToDays).toFixed(0)} days ago.`
    }
    window.localStorage.setItem("latestVisit", currentDate)
}