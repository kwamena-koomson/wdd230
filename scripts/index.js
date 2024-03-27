const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const modeButton = document.querySelector("#darkBtn");
const main = document.querySelector("main");
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
})

modeButton.addEventListener("click", () => {
	if (modeButton.getAttribute("src") == "images/dark.webp") {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.setAttribute("src", "images/light.webp");
		modeButton.alt = "light-mode";
	} else {
        main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.setAttribute("src", "images/dark.webp");
		modeButton.alt = "dark-mode";
	}
});

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

// week05 Team Activity: JSON and Weather API

const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.65676473173806&lon=-58.67654064280169&appid=7ce0b4023bff249064297976d73cf6a4'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.src = iconsrc;
    captionDesc.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
}