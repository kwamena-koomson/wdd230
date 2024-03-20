const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const section = document.querySelector("section");
const card = document.querySelector(".card");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        header.style.background = "#000";
        section.style.background = "#000";
        card.style.background = "#000";
        main.style.color = "#fff";
        section.style.color = "fff";
        modeButton.textContent = "🔆";

    } else {
        main.style.background = "#eee";
        header.style.background = "#fff";
        section.style.background = "#fff";
        card.style.background = "#fff";
        main.style.color = "#000";
        section.style.color = "#3c564a";
        modeButton.textContent = "🌙";
    }
});


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

