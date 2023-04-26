document.getElementById("alert_button").addEventListener("click", () => {
  let datos = [];
  let divs = document.querySelectorAll("div[class^='similarJob-']");
  divs = [...divs].map((d) => ({
    title: d.querySelector("a").title,
    salary: d.querySelector("[id*=vacante_similar_salario]").innerText,
  }));
  let contries = ["PERU", "COLOMBIA", "MEXICO","CHILE"];

  contries.forEach((el) => {
    let jobs = [];
    let rangos = [];
    if (el == "MEXICO") {
      jobs = divs.filter(
        (d) =>
          d.title.toUpperCase().includes(el) ||
          d.title.toUpperCase().includes("OBREGON") ||
          d.title.toUpperCase().includes("MIXCOAC")
      );
    } else {
      jobs = divs.filter((d) => d.title.toUpperCase().includes(el));
    }
    let salaryKeys = jobs
      .map((s) => s.salary)
      .filter((value, index, array) => array.indexOf(value) === index);
    salaryKeys.forEach((item) => {
      rangos.push({
        salario: item,
        jobs: jobs.filter((s) => s.salary == item),
      });
    });
    datos.push({
      pais: el,
      rangos: rangos,
    });
  });
  console.log(datos);
  alert("datos impresos por consola");
});
