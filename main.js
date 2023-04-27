const jobElements = document.querySelectorAll('div[class*=similarJob-0-2-766]');
const jobs = [];

jobElements.forEach(jobElement => {
    let titleElement = jobElement.querySelector('.text-0-2-82.standard-0-2-89.highEmphasis-0-2-103.overflow-0-2-770');
    let title = titleElement.innerText.trim();

    let salaryElement = jobElement.querySelector('.text-0-2-82.small-0-2-90.highEmphasis-0-2-103.bottomSmall-0-2-118');
    let salary = salaryElement.innerText.trim();

    let companyElement = jobElement.querySelector('.text-0-2-82.lowEmphasis-0-2-105.overflow-0-2-770');
    let company = companyElement.innerText.trim();

    let locationElement = jobElement.querySelector('.text-0-2-82.lowEmphasis-0-2-105.bottomSmall-0-2-118');
    let location = locationElement.innerText.trim();

    jobs.push({ title, salary, company, location })
});

console.log(jobs);

//filter by countries
const countries = ["Peru", "Mexico", "Chile", "Colombia", "Otros"]
let filteredCountries = [];

countries.forEach(country => {
    filteredCountries[country] = jobs.filter(e => e.title.includes(country.toUpperCase()));
});

filteredCountries["Otros"] = jobs.filter(e => !countries.some(country => e.title.includes(country.toUpperCase())));


//filter by salaries
const salaries = jobs.map(e => e.salary);
let uniqueSalaries = salaries.filter((e, index) => salaries.indexOf(e) === index);
let filteredSalaries = [];

uniqueSalaries.forEach(salary => {
    filteredSalaries[salary] = jobs.filter(e => e.salary === salary);
});

console.log(filteredCountries)
console.log(filteredSalaries)



