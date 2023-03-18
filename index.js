let similarJobs = Array.from(document.querySelectorAll(".similarJob-0-2-766"));

let paisSalario = similarJobs.map((el) => {
  return {
    title: el.querySelectorAll("p")[0].innerText,
    salary: el.querySelectorAll("p")[1].innerText,
  };
});

const filterCountry = (country) => {
  return paisSalario.filter((el) => el.title.includes(country));
};

const getRango = (country) => {
  let num = [];
  filterCountry(country).forEach((el) => {
    if (el.salary.split(" ")[0].includes("$"))
      num.push(parseInt(el.salary.split(" ")[0].substring(1).replace(",", "")));
    if (el.salary.split(" ")[2].includes("$"))
      num.push(parseInt(el.salary.split(" ")[2].substring(1).replace(",", "")));
    return num;
  });
  return "$ " + Math.min(...num) + " - $ " + Math.max(...num);
};

const getArr = (country) => {
  return {
    pais: country,
    rangoSalarial: getRango(country),
    cantidad: filterCountry(country).length,
    avisos: filterCountry(country),
  };
};

let countries = ["PERU", "MEXICO", "CHILE"];

let pe = getArr(countries[0]);
let mx = getArr(countries[1]);
let cl = getArr(countries[2]);
console.log(pe, mx, cl);
let xd = "";

countries.forEach((country) => {
  document.write(`
  <div>
    <table border="1">
      <tr>
        <th scope="row">${getArr(country).pais}</th>
        <th>${getArr(country).rangoSalarial}</th>
      </tr>
      ${(xd = "")}
      ${getArr(country).avisos.forEach((el, i) => {
        xd += `<tr><th>${i + 1}</th><td>${el.title}<br />${
          el.salary
        }</td></tr>`;
      })}
      ${xd}
    </table>
    <br />
  </div>
`);
});
