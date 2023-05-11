const buttonElement = document.getElementById("process");
const similarJobElements = document.querySelectorAll("div[class*=similarJob]");
const countries = ["PERU", "MEXICO", "CHILE", "COLOMBIA"];

const arrangements = Array.from(similarJobElements).map((el) => ({
  position: el.querySelector("p").innerText,
  salary: el.querySelector("[id*=vacante_similar_salario]").innerText,
}));
console.log(arrangements);

const groupByCountry = (arr) =>
  arr.reduce((acc, element) => {
    const found = countries.find((country) =>
      element.position.includes(country)
    );
    const countryKey = found || "Others";
    acc[countryKey] = acc[countryKey] || [];
    acc[countryKey].push(element);
    return acc;
  }, {});

const sortArrangementsBySalary = (arr) =>
  arr.sort((a, b) => {
    if (a.salary === "Salary not shown.") return 1;
    if (b.salary === "Salary not shown.") return -1;
    const aSalary = parseInt(a.salary.replace(/[^0-9.-]+/g, ""));
    const bSalary = parseInt(b.salary.replace(/[^0-9.-]+/g, ""));
    return bSalary - aSalary;
  });

buttonElement.addEventListener("click", () => {
  alert("Countries and Salaries");

  const countryGroups = groupByCountry(arrangements);
  for (let country in countryGroups) {
    sortArrangementsBySalary(countryGroups[country]);
  }
  console.log(countryGroups);

  const salaryGroups = arrangements.reduce((acc, element) => {
    const salary = element.salary;
    acc[salary] = acc[salary] || [];
    acc[salary].push(element);
    return acc;
  }, {});
  console.log(salaryGroups);
});
