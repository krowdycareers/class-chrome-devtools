const [...similarJobs] = document.querySelectorAll('.similarJob-0-2-766');
const countries = ['PERU', 'MEXICO', 'CHILE'];
const groupedJobs = [];

countries.forEach(country => {
  const filteredJobs = similarJobs.reduce((acc, jobTag) => {
    const jobTitle = jobTag.querySelector('.link-0-2-768 p').textContent.trim();
    const salaryRange = jobTag.querySelector('.link-0-2-768 + p').textContent.trim();
    if (jobTitle.includes(country)) {
      const jobAdded = acc.jobs.some(job => {
        if (job.salaryRange == salaryRange) {
          job.quantity += 1;
          job.ads.push(jobTitle);
          return true;
        }
      });
      if (!jobAdded) {
        acc.jobs.push({
          salaryRange,
          quantity: 1,
          ads: [jobTitle]
        })
      }
    }
    return acc;
  }, {
    country,
    jobs: []
  });
  groupedJobs.push(filteredJobs);
});

console.log(groupedJobs);