
function fetchCovidData() {
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then((res) => res.json())
        .then((data) => createStatCards(data.data.regional))
        .catch((err) => console.log(err));
}

function createStatCards(regions) {
    let store = regions.map((region) => statCard(region.loc, region.totalConfirmed, region.discharged, region.deaths));
    document.getElementById('mainsection').innerHTML = store.join(" ");
}

function statCard(state, confirmed, recovered, deaths) {
    return `
        <div class="state-card">
            <h3>${state}</h3>
            <p><strong>Confirmed:</strong> ${confirmed}</p>
            <p><strong>Recovered:</strong> ${recovered}</p>
            <p><strong>Deaths:</strong> ${deaths}</p>
        </div>
    `;
}

fetchCovidData();
