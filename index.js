const btnProcesar = document.getElementById("btn-procesar");

const countries = ["PERU", "CHILE", "MEXICO", "COLOMBIA"];

btnProcesar.addEventListener("click", () => {
  const elementCards = document.querySelectorAll(".similarJob-0-2-766");
  let arrayCards = [...elementCards];
  let arrayJobs = arrayCards.map((el) => {
    const elementTitle = el.querySelector('a[id|="vacante_similar"]');
    const elementSalary = el.querySelector("p[id|=vacante_similar_salario]");
    const title = elementTitle?.innerText;
    const country = countries.find((el) => title.includes(el));

    return {
      title,
      url: elementTitle?.href,
      rangeSalary: elementSalary.innerText,
      country,
    };
  });

  let group = [];

  arrayJobs.forEach((el) => {
    let groupContrySalary = group.find(
      (elg) => el.country == elg.country && elg.rangeSalary == el.rangeSalary
    );

    if (!groupContrySalary)
      group.push({
        country: el.country,
        rangeSalary: el.rangeSalary,
        jobs: [el],
      });
    else groupContrySalary.jobs.push(el);
  });

  console.log(group);
});
