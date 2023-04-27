const btnCall = document.getElementById("btnCall");

btnCall.addEventListener("click", () => {
  const jobs = document.querySelectorAll("div[class*=similarJob]");
  const jobsDetail = [...jobs];
  let compendio = [];
  jobsDetail.forEach((dato) => {
    const items = dato.childNodes;
    const itemName = items.item(1);
    const itemSalary = items.item(3).innerText.toString();
    const textValueOfP = itemName.firstChild.innerText.toString();
    let countryName = textValueOfP.split(" ");
    countryName = countryName[countryName.length - 1].toUpperCase();
    const founded = compendio.find((country) => country.country === countryName);
    if (founded !== undefined) {
      founded.jobs.push({
        title: textValueOfP,
        salaryRange: itemSalary,
      });
    } else {
      let country = {
        country: countryName,
        jobs: [
          {
            title: textValueOfP,
            salaryRange: itemSalary,
          },
        ],
      };
      compendio.push(country);
    }
  });
  console.log(compendio);
});
