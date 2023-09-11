const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');

const cities = {
    ger: ["Berlin", "Munich", "Drezden", "Frankfurt"],
    usa: ["Washington", "New-York", "San-Francisco", "Los-Angeles"],
    ukr: ["Kyiv", "Uzhhorod", "Lviv", "Kherson"],
};

getCitiesFromCountry();

countrySelect.addEventListener('change', function () {
    citiesSelect.innerHTML = "";
    getCitiesFromCountry();
});

function getCitiesFromCountry() {
    const selectedCountry = countrySelect.value;
    const citiesOfCountry = cities[selectedCountry];

    for (let i = 0; i < citiesOfCountry.length; i++) {
        citiesSelect.innerHTML += `<option value="${selectedCountry} ${i + 1}">${citiesOfCountry[i]}</option>`;
    }
}