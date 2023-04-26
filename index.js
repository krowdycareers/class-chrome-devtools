import Card from "./components.js";
import DATA from "./data.js";

const dataSpace = document.getElementById("data-space");
const inputCountr = document.getElementById("input-country");
const inputSalary1 = document.getElementById("input-salary1");
const inputSalary2 = document.getElementById("input-salary2");
const btnFilterData = document.getElementById("btn-filter-data");

let htmlContent = "";
let dataUpdated = [...DATA];

function initContent() {
  htmlContent = "";
  for (let i = 0; i < dataUpdated.length; i++) {
    htmlContent = htmlContent + Card(dataUpdated[i]);
  }
  dataSpace.innerHTML = htmlContent;
}

function FilterDataByCountry(data, country) {
  let newData = data.filter((element) => element.country == country);
  return newData;
}

function filterDataByMinSalary(data, minAmount) {
  let newData = data.filter((element) => element.salary1 >= minAmount);
  return newData;
}

function filterDataByMaxSalary(data, maxAmount) {
  let newData = data.filter((element) => element.salary2 <= maxAmount);
  return newData;
}

function ProccessFilterByCountry(country) {
  let newData;
  if (country != "") {
    newData = FilterDataByCountry(dataUpdated, country.toUpperCase());
    dataUpdated = [...newData];
  }
}

function ProccessFilterByMinSalary(minSalary) {
  let newData;
  if (minSalary != "" && isNaN(Number(minSalary)) == false) {
    newData = filterDataByMinSalary(dataUpdated, Number(minSalary));
    dataUpdated = [...newData];
  }
}

function ProccessFilterByMaxSalary(maxSalary) {
  let newData;
  if (maxSalary != "" && isNaN(Number(maxSalary)) == false) {
    newData = filterDataByMaxSalary(dataUpdated, Number(maxSalary));
    dataUpdated = [...newData];
  }
}

btnFilterData.addEventListener("click", () => {
  dataUpdated = [...DATA];
  ProccessFilterByCountry(inputCountr.value);
  ProccessFilterByMinSalary(inputSalary1.value);
  ProccessFilterByMaxSalary(inputSalary2.value);
  initContent();
});

initContent();
