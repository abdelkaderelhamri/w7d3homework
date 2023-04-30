const getData = async (season,round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response)
    console.log(response.data)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

// create a constant to hold my DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

// Creeation of the Ragner List HTML
const createList = (position, givenName, nationaliy) => {
    const html = `<div  class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${position}>
    <li class="list-group-item">${givenName}</li>
    <li class="list-group-item">${nationaliy}</li>    
    
    
  </ul>
</div>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

const loadData = async () => {
    const rangers = await getData("2021","2")
    console.log(rangers)
    rangers.forEach(element => createList(element.position, element.Driver.givenName, element.Driver.nationality, ))
}
const form = document.querySelector('#test-data-form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_season = document.querySelector('#first-name');
    let query_round= document.querySelector('#last-name')
    console.log(event)
    let season = event.target[0].value;
    let round = event.target[1].value;
    
    console.log(season)
    console.log( round)
    console.log(`This came from the query selector: ${query_season.value}, ${query_round.value}`)
    // colorChange()
})