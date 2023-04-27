const button = document.getElementById("procesar");

const countryList = ["PERU", "COLOMBIA", "CHILE", "MEXICO"];

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

/* 

--------OUTPUT--------

[
  {
      "country": "PERU",
      "jobs": [
          {
              "salaryRange": "$9,000 - $11,000 Mensual",
              "count": 3,
              "ads": [
                  "Ejecutivo de atracción de talento PERU",
                  "Ejecutivo de atracción de talento PERU",
                  "Analista de reclutamiento zona PERU"
              ]
          },
          {
              "salaryRange": "$4,000 - $6,000 Mensual",
              "count": 1,
              "ads": [
                  "Ejecutivo de atracción de talento PERU"
              ]
          },
          {
              "salaryRange": "$12,000 - $14,000 Mensual",
              "count": 1,
              "ads": [
                  "ANALISTA DE RECLUTAMIENTO ZONA PERU"
              ]
          },
          {
              "salaryRange": "Salario no mostrado.",
              "count": 1,
              "ads": [
                  "RECLUTADOR (A) PERU"
              ]
          }
      ]
  },
  {
      "country": "COLOMBIA",
      "jobs": [
          {
              "salaryRange": "$9,000 - $11,000 Mensual",
              "count": 3,
              "ads": [
                  "Analista de reclutamiento zona COLOMBIA",
                  "ANALISTA DE RECLUTAMIENTO ZONA COLOMBIA",
                  "Ejecutivo de atracción de talento COLOMBIA"
              ]
          },
          {
              "salaryRange": "Salario no mostrado.",
              "count": 2,
              "ads": [
                  "RECLUTADOR (A) COLOMBIA",
                  "RECLUTADOR (A) COLOMBIA"
              ]
          }
      ]
  },
  {
      "country": "CHILE",
      "jobs": [
          {
              "salaryRange": "Salario no mostrado.",
              "count": 2,
              "ads": [
                  "RECLUTADOR (A) CHILE",
                  "RECLUTADOR (A) CHILE"
              ]
          },
          {
              "salaryRange": "$12,000 - $13,000 Mensual",
              "count": 1,
              "ads": [
                  "Reclutador Zona CHILE"
              ]
          },
          {
              "salaryRange": "$12,000 - $14,000 Mensual",
              "count": 1,
              "ads": [
                  "ANALISTA DE RECLUTAMIENTO ZONA ALVARO CHILE"
              ]
          }
      ]
  },
  {
      "country": "Sin especificar",
      "jobs": [
          {
              "salaryRange": "$9,000 - $11,000 Mensual",
              "count": 7,
              "ads": [
                  "Reclutador Zona Mixcoac",
                  "Reclutador Zona Mixcoac",
                  "ANALISTA DE PLANILLA",
                  "Ejecutivo de rrhh",
                  "Analista de rotativo zona Alvaro Obregon",
                  "Reclutador Zona Mixcoac",
                  "ANALISTA DE RECLUTAMIENTO ZONA ALVARO OBREGON"
              ]
          }
      ]
  },
  {
      "country": "MEXICO",
      "jobs": [
          {
              "salaryRange": "$2,000 - $3,000 Mensual",
              "count": 1,
              "ads": [
                  "Analista de reclutamiento zona MEXICO"
              ]
          },
          {
              "salaryRange": "$1,000 - $2,000 Mensual",
              "count": 1,
              "ads": [
                  "Reclutador Zona MEXICO"
              ]
          },
          {
              "salaryRange": "$9,000 - $11,000 Mensual",
              "count": 1,
              "ads": [
                  "Analista de reclutamiento zona MEXICO"
              ]
          }
      ]
  }
] 

*/
