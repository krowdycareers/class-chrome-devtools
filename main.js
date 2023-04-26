const filterJobs = () => {
    const [...jobsCards] = document.querySelectorAll('.similarJob-0-2-766')
    const countries = ['PERU', 'MEXICO', 'CHILE']
    const groupJobs = []

    countries.forEach(country => {
        const jobsCountry = jobsCards.reduce(
            (acc, jobTag) => {
                const titleJob =
                    jobTag.querySelector('.link-0-2-768 p').innerText
                const salary =
                    jobTag.querySelector('.link-0-2-768 + p').innerText

                if (titleJob.includes(country)) {
                    const jobAdd = acc.jobs.some(job => {
                        if (job.salary == salary) {
                            job.quantity += 1
                            job.ads.push(titleJob)
                            return true
                        }
                    })

                    if (!jobAdd) {
                        acc.jobs.push({
                            salary,
                            quantity: 1,
                            ads: [titleJob]
                        })
                    }
                }
                return acc
            },
            {
                country,
                jobs: []
            }
        )
        groupJobs.push(jobsCountry)
    })
    return groupJobs
}

console.log(JSON.stringify(filterJobs(), null, 2))
