const btnToProcesInfo = document.getElementById('btn-to-process-info')

btnToProcesInfo.addEventListener('click', () => {
  const COUNTRIES = ['PERU', 'COLOMBIA', 'CHILE', 'MEXICO']

  const jobs = document.querySelectorAll('div[class*="similarJob-"]')
  const jobsArray = Array.from(jobs)

  const jobsInfo = jobsArray.map((job) => {
    const jobTitle = job.querySelector(
      'a[id*="vacante_similar-"] > p'
    ).innerText
    const jobSalary = job.querySelector(
      'p[id*="vacante_similar_salario-"]'
    ).innerText

    return {
      jobTitle,
      jobSalary: jobSalary.replace('Mensual', '').trim(),
    }
  })

  const groupingJobs = COUNTRIES.map((country) => {
    const ranges = []

    const jobsByCountry = jobsInfo.filter((job) =>
      job.jobTitle.includes(country)
    )

    jobsByCountry.forEach((job) => {
      const salary = job.jobSalary

      const rangeValue = {
        salary,
        jobs: [job],
      }

      const rangeIndex = ranges.findIndex((range) => range.salary === salary)

      rangeIndex === -1
        ? ranges.push(rangeValue)
        : ranges[rangeIndex].jobs.push(job)
    })

    return {
      country,
      ranges,
    }
  })

  console.log(groupingJobs)
})
