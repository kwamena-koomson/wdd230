const linksURL = 'https://mscopa.github.io/wdd230/data/links.json';


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getLinks();

function displayLinks(weeks) {
    const weeksList = document.querySelector('.weeks');
    
    weeks.weeks.forEach(link => {
        let li = document.createElement('li');
        li.textContent = `${link.week}: `;
        for (let i = 0; i < link.links.length; i++) {
            const a = document.createElement('a');
            a.textContent = link.links[i].title;
            a.href = link.links[i].url;
            li.appendChild(a);
            li.appendChild(document.createTextNode(' | '));
        }
        weeksList.appendChild(li);
    })
}