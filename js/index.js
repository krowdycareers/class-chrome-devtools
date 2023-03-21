const jobElements = Array.from(document.querySelectorAll(".similarJob-0-2-766"));

const jobs = jobElements.map((jobElement) => {
    const [countryComponent, salaryComponent] = jobElement.children;

    return {
        country: countryComponent.innerText,
        salary: salaryComponent.innerText
    };
});

// Country Filter [Perú]

const countryFilter = "peru";
const jobsRelatedToPeru = jobs.filter(({ country }) => country.toLowerCase().includes(countryFilter));

console.log("Jobs related to Peru:", jobsRelatedToPeru);

// Salary Filter

const $gte = 9000;
const $lte = 11000;

const salaryFilteredJobs = jobs.filter(({ salary }) => {
    const result = salary.match(/^\$(.+) - \$(.+) Mensual$/);
    if(!result) {
        return false;
    }

    const [, lowerBoundString, upperBoundString] = result;
    const [lowerBound, upperBound] = [lowerBoundString.replace(",", ""), upperBoundString.replace(",", "")];

    return ($gte <= lowerBound && upperBound <= $lte);
});

console.log("Jobs with salary between 9000 and 11000 inclusive", salaryFilteredJobs);
