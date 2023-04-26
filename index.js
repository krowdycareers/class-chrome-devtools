const button = document.getElementById("procesar");

const countryList = ["PERU", "COLOMBIA"];

function scrapingJobs() {
  const jobsList = [...document.querySelectorAll("[class*=item-]")];
  return jobsList;
}
function processJobs(jobsList) {
  const formattedJobs = jobsList.map((job) => {
    let jobCountry = "Sin especificar";
    const { textContent: jobName } = job.querySelector(
      "[id*=vacante_similar-] > p"
    );
    const { textContent: jobSalaryRange } = job.querySelector(
      "[id*=vacante_similar_salario-]"
    );

    countryList.some((country) => {
      if (jobName.toUpperCase().includes(country)) {
        jobCountry = country;
        return true;
      }
    });

    return {
      name: jobName.trim(),
      country: jobCountry,
      salaryRange: jobSalaryRange.trim(),
    };
  });

  return formattedJobs;
}

function groupJobs() {
  const jobs = processJobs(scrapingJobs());

  const groupedJobs = jobs.reduce((result, job) => {
    const country = job.country;
    const salaryRange = job.salaryRange;
    const name = job.name;

    const countryIndex = result.findIndex((job) => job.country === country);
    if (countryIndex === -1) {
      result.push({
        country: country,
        jobs: [
          {
            salaryRange: salaryRange,
            count: 1,
            ads: [name],
          },
        ],
      });
    } else {
      const salaryRangeIndex = result[countryIndex].jobs.findIndex(
        (job) => job.salaryRange === salaryRange
      );
      if (salaryRangeIndex === -1) {
        result[countryIndex].jobs.push({
          salaryRange: salaryRange,
          count: 1,
          ads: [name],
        });
      } else {
        result[countryIndex].jobs[salaryRangeIndex].count++;
        result[countryIndex].jobs[salaryRangeIndex].ads.push(name);
      }
    }

    return result;
  }, []);

  console.log(groupedJobs);
}

button.addEventListener("click", groupJobs);
