const jobs = document.querySelectorAll('[class*="similarJob-"]');
const countries = ["COLOMBIA", "PERU", "MEXICO", "CHILE"];
const arrayJobs = [...jobs];
const jobsWithTitleAndSalary = arrayJobs.map((job) => {
  const [{ innerText: title, href: url }, { innerText: rangeSalary }] =
    job.children;
  return {
    title,
    url,
    rangeSalary,
  };
});

const countryAndSalaryGroupingJob = countries.map((country) => {
  const jobsFilterByCountry = jobsWithTitleAndSalary.filter((job) =>
    job.title.toLowerCase().includes(country.toLowerCase())
  );
  const rangeSalarys = jobsFilterByCountry.reduce((ranges, job) => {
    if (!ranges.some((el) => el == job.rangeSalary))
      ranges.push(job.rangeSalary);
    return ranges;
  }, []);

  const rangeSalaryGrouping = rangeSalarys.map((rangeSalary) => {
    jobsFilteredByRangeSalary = jobsFilterByCountry.filter(
      (job) => job.rangeSalary == rangeSalary
    );
    return {
      rangeSalary,
      jobsFilteredByRangeSalary,
    };
  });
  return {
    country,
    count: jobsFilterByCountry.length,
    rangeSalaryGrouping,
  };
});

console.log(countryAndSalaryGroupingJob);
