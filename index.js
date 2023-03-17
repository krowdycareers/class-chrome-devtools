const selectorFather = document.querySelectorAll(
  ".carouselCont-0-2-759 .standard-0-2-89"
); //Obtengo los datos de los empleos
const jobsObject = Object.fromEntries(selectorFather.entries()); //Convierto a objeto
const jobsArray = Object.values(jobsObject); //Convertir a array para aplicar map, filter
const jobs = jobsArray.map((job) => {
  let jobString = job.innerHTML.trim();
  let countrySplit = jobString.split(" ");
  let country = countrySplit.pop();
  if (country === "PERU" || country === "CHILE" || country === "COLOMBIA") {
    return { [country]: jobString };
  }
  return { none: jobString };
});

const getCountryFilter = (country) => {
  let filterJobs = jobs.filter((job) => {
    const keyCountry = Object.keys(job)[0];
    return keyCountry.endsWith(country.toUpperCase());
  });
  return filterJobs;
};

const getJobsFilter = (job) => {
  let jobsFilter = job.map((j) => {
    return Object.values(j)[0];
  });
  return jobsFilter;
};

//Ingresar el pais en search country y se mostrará en consola los resultados
const showResults = (searchCountry) => {
  const country = getCountryFilter(searchCountry);
  const jobFilter = getJobsFilter(country);
  console.log(country);
  console.log(jobFilter);
};

showResults("peru")