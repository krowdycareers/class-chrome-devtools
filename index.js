const btnGetJobs = document.getElementById("obtenerJobs");

btnGetJobs.addEventListener("click", () => {
  console.log(getJobs());
});

function getJobs() {
  const countries = ["peru", "chile", "mexico", "colombia"];
  let similarsJobs = Array.from(
    document.querySelectorAll(".similarJob-0-2-766")
  );
  const salaryRang = "9,000 - $11,000";
  similarsJobs = similarsJobs.map((element) => {
    return {
      title: element.querySelector("a").innerText,
      link: element.querySelector("a").href,
      salary: element.querySelector("#vacante_similar_salario-16397194")
        ?.innerText,
    };
  });

  const result = [];

  countries.forEach((country) => {
    const jobs = similarsJobs.filter(
      (element) =>
        element.title?.toLowerCase().includes(country) &&
        element.salary?.toLowerCase().includes(salaryRang)
    );
    result.push({
      country: country,
      salaryRang: salaryRang,
      amount: jobs.length,
      notices: jobs.map((job) => job.title),
    });
  });

  return result;
}

// console.log(result);
