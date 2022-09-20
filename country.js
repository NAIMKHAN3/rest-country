const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountrys(data));
}
const displayCountrys = countrys => {
    const allCountrys = countrys.map(country => getCoutry(country))
    const container = document.getElementById('countrys');
    container.innerHTML = allCountrys.join(' ');

}

const getCoutry = country => {
    return `
    <div class="d-country">
    <h1>${country.name.common}</h1>
    <h2>Area:${country.area}</h2>
    <img src="${country.flags.png}">
    <h2>${country.capital}</h2>
    <h3>Flag: ${country.flag}</h3>
    <h3>Resion: ${country.region}</h3>
    <h3>Start Of week: ${country.startOfWeek}</h3>
    <h3>Time: ${country.timezones}</h3>
    
    </div>
    
    `
}
loadCountry();