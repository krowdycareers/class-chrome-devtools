const similarJobs = Array.from(document.querySelectorAll('.similarJob-0-2-766'))

const jobsChile = similarJobs.filter((job) => {
    const { innerText } = job.querySelector('p')
    return innerText.includes('CHILE')
})
const jobsMexico = similarJobs.filter((job) => {
    const { innerText } = job.querySelector('p')
    return innerText.includes('MEXICO')
})
const jobsPeru = similarJobs.filter((job) => {
    const { innerText } = job.querySelector('p')
    return innerText.includes('PERU')
})
const jobsColombia = similarJobs.filter((job) => {
    const { innerText } = job.querySelector('p')

    return innerText.includes('COLOMBIA')
})

const jobSalary = sameJobs.filter((job) => {
    const { innerText } = job.querySelector(
        '.text-0-2-82.small-0-2-90.highEmphasis-0-2-103.bottomSmall-0-2-118'
    )
    return innerText.includes('$9,000 - $11,000 Mensual')
})