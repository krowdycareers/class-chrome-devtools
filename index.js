const btnProcesar = document.getElementById("btn-procesar");

btnProcesar.addEventListener("click", () => {
  const elementCards = document.querySelectorAll(".similarJob-0-2-766");
  let arrayCards = [...elementCards];
  const arrayJobs = arrayCards.map((el) => {
    const elementTitle = el.querySelector('a[id|="vacante_similar"]');
    const elementSalary = el.querySelector("p[id|=vacante_similar_salario]");
    return {
      title: elementTitle?.innerText,
      url: elementTitle?.href,
      rangeSalary: elementSalary.innerText,
    };
  });

  console.log(arrayJobs);
});
