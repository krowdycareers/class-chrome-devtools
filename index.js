const buttonElement = document.getElementById("procesar");
// Obteniendo datos de la página
const listJobs = document.querySelectorAll(
  "div[class*=carouselCont] > div[class*=carouselWrap] > div[class*=row] > div[class*=item] > div[class*=similarJob]"
);

// Clasificando datos
const countrys = ["PERU", "CHILE", "COLOMBIA", "MEXICO"];
const salaries = [
  "Salario no mostrado.",
  "$1,000 - $2,000",
  "$2,000 - $3,000",
  "$4,000 - $6,000",
  "$9,000 - $11,000",
  "$12,000 - $13,000",
];

buttonElement.addEventListener("click", () => {
  // Convirtiendo datos a un array
  let listJobsArray = [...listJobs];

  // Mostrando datos en un array de objetos por país
  let orderForCountry = countrys.map((pais) => {
    let listJobsForCountry = listJobsArray.filter((el) =>
      el.querySelector("a").innerText.includes(pais)
    );

    return {
      pais: pais,
      trabajos: listJobsForCountry.map((el) => {
        return {
          title: el.querySelector("a").innerText,
          salario: el.querySelector("p[id*=vacante_similar_salario]").innerText,
          rol: el.querySelector("a").innerText.split(" ")[0],
        };
      }),
    };
  });

  // Mostrando datos en un array de objetos por salario
  let orderForSalary = salaries.map((salario) => {
    let listJobsForSalary = listJobsArray.filter((el) =>
      el
        .querySelector("p[id*=vacante_similar_salario-]")
        .innerText.includes(salario)
    );

    return {
      salario: salario,
      trabajos: listJobsForSalary.map((el) => {
        return {
          title: el.querySelector("a").innerText,
          pais: el.querySelector("a").innerText.split(" ").pop(),
          rol: el.querySelector("a").innerText.split(" ")[0],
        };
      }),
    };
  });

  console.group("Trabajos por país");
  console.log(orderForCountry);
  console.groupEnd();
  console.group("Trabajos por Salarios");
  console.log(orderForSalary);
  console.groupEnd();
});
