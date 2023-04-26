//get dom elements who are offers
let offers = document.querySelectorAll(".similarJob-0-2-766");
offers = [...offers];
//get specific title and salary from offer elements
const data_string = offers.map(el => {
    return { title: el.querySelector("a").innerText, salary: el.querySelector("[id*=vacante_similar_salario]").innerText };
});

//get array of titles
const titles = data_string.map(el => el.title);

//build array sorted by countries
const filter_countries = [
    "COLOMBIA",
    "MEXICO",
    "PERU",
    "CHILE",
    "Zona Mixcoac",
    "zona alvaro obregon",
    "rrhh"
];
let countries = [];
//if country is X add to array of countries to order them by country
filter_countries.forEach((country) => {
    titles.forEach((title) => {
        if (title.toLowerCase().includes(country.toLowerCase())) {
            countries.push(String(title).toUpperCase());
        }
    });
});

//get array of salaries
const salaries = data_string.map(el => el.salary).sort();

console.log({
    orderedByCountry: countries,
    orderedBySalaries: salaries
});
