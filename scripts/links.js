const baseURL = "https://kwamena-koomson.github.io/wdd230/";
const linksURL = "https://kwamena-koomson.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayLinks(data.weeks);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getLinks();

const ul = document.querySelector("#weeks-list");

const displayLinks = function (weeks) {
  weeks.forEach((week) => {
    const li = document.createElement("li");
    li.textContent = week.week;

    week.links.forEach((link) => {
      const a = document.createElement("a");
      a.setAttribute("href", baseURL + link.url); // Concatenate baseURL with link.url
      a.textContent = link.title;

      li.appendChild(a);
    });

    ul.appendChild(li); // Append each week's list to the main ul
  });
};
