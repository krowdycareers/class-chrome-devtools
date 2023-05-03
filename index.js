let data = []
const countries = ["PERU", "COLOMBIA", "MEXICO", "CHILE"];

const buttonElement = document.getElementById('procesar');


buttonElement.addEventListener("click", () => {

  let jobs = document.querySelectorAll("[class*=similarJob-]");
  jobs = [...jobs]

  const jobsData = jobs.map(el => {
    const textJobs = el.innerText.split('\n\n')
    return {
      title: textJobs[0],
      salary: textJobs[1]
    }
  })
  console.log(jobsData);
  const groupByCountries = jobsData.map(job => {

    const countryFilter = countries.filter(country => job.title.includes(country))[0] ?? "NO DEFINIDO"


    if (data.length === 0) {
      data.push({
        pais: countryFilter,
        rangos: [
          {
            salary: job.salary,
            jobs: [job.title]
          }
        ]
      })
    }
    else {
      const dataCountryFilter = data.map((dato, index) => ({ dato, index }))
        .filter((dato) => dato.dato.pais == countryFilter)[0]

      if (dataCountryFilter != undefined) {
        const dataSalaryFilter = data[dataCountryFilter.index].rangos.map((salary, index) => ({ salary, index }))
          .filter(salary => salary.salary.salary == job.salary)

        if (dataSalaryFilter[0]?.salary != undefined)
          data[dataCountryFilter.index].rangos[dataSalaryFilter[0].index].jobs.push(job.title)
        else
          data[dataCountryFilter.index].rangos.push({ salary: job.salary, jobs: [job.title] })
      }
      else
        data.push({ pais: countryFilter, rangos: [{ salary: job.salary, jobs: [job.title] }] })
    }

  })

  console.log(data);
})