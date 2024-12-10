async function fetchMarvelData(marvelName) {
    const response = await fetch(`http(s)://gateway.marvel.com/${marvelName}`);
    const marvelData = await response.json();
    return marvelData;
}

document.addEventListener('DOMContentLoaded', async () => {
    const magnetoData = await fetchMarvelData('magneto');
    const marvelinfoElement = document.getElementById('marvel-info');

    marvelinfoElement.innerHTML = `
    <h2>${magnetoData.name}</h2>
    <img src="${magnetoData.sprites.front_default}" alt="${magnetoData.name}">
    <h3>Description:</h3>
    <ul>
        ${magnetoData.description.map(description => `<li>${description.description.name}</li>`).join('')}
    </ul>
    <h3>Series:</h3>
    <p>${magnetoData.series}</p>
    `;
});