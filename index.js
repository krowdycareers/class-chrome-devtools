const getDataOfInterest = (similarsJobs) =>
  [...similarsJobs].map((job) => {
    const salary = job.querySelector('[id^="vacante_similar_salario-"]').textContent.trim();
    const country = job.querySelector("p.lowEmphasis-0-2-105.bottomSmall-0-2-118").textContent.trim();
    const jobRole = job.querySelector("p.standard-0-2-89").textContent.trim();
    return { salary, country, jobRole };
  });

const similarsJobsData = (getDataOfInterest) =>
  getDataOfInterest.reduce((acc, { salary, country, jobRole }) => {
    const existingCountry = acc.find((item) => item.country === country);

    if (existingCountry) {
      const existingSalaryRange = existingCountry.range.find((item) => item.salary === salary);

      if (existingSalaryRange) existingSalaryRange.jobRole.push({ job: jobRole });
      else existingCountry.range.push({ salary, jobRole: [{ job: jobRole }] });
    } else acc.push({ country, range: [{ salary, jobRole: [{ job: jobRole }] }] });

    return acc;
  }, []);

function fetchingSimilarsJobsData() {
  const similarsJobs = document.querySelectorAll(".item-0-2-764");
  console.log("fetchingSimilarsJobsData -->>", similarsJobsData(getDataOfInterest(similarsJobs)));
}
