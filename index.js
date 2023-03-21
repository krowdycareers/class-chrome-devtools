const jobs = Array.from(document.querySelectorAll(".similarJob-0-2-766"));

const elementsToObjects = () => jobs.map((job) => {return {title: job.querySelector("a").innerText, salaryRange: job.querySelector(".small-0-2-90").innerText, url: job.querySelector("a").href}});

const filterJobsByCountries = (countries) => {
    const jobsOb = elementsToObjects();
    return countries.map((country) => {
        const filterJobs = jobsOb.filter((job) => job.title.includes(country));
        return {
            country,
            quantity: filterJobs.length,
            jobs: filterJobs
        }
    })
}

console.log("Vacantes filtradas: ", filterJobsByCountries(["COLOMBIA", "PERU", "MEXICO", "CHILE"]));