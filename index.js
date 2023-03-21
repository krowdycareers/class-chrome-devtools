const similarJobs = Array.from(
  document.querySelectorAll(".similarJob-0-2-766")
);

const jobs = similarJobs.map((el) => {
  return {
    title: el.querySelector("a").innerText,
    url: el.querySelector("a").href,
    salaryRange: el.querySelector(".bottomSmall-0-2-118").innerText,
  };
});

const filterByCountries = (countries) => {
  return countries.map((country) => {
    const filterJobs = jobs.filter((job) => job.title.includes(country));
    return {
      country,
      quantity: filterJobs.length,
      jobs: filterJobs,
    };
  });
};

console.log(filterByCountries(["COLOMBIA", "PERU", "MEXICO", "CHILE"]));
