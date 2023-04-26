/* Ejemplo del JSON
    [
        {
        country: "PERU",
        jobs: [
            {
            salaryRange: "$9,000 - $11,000 Mensual",
            title: "Ejecutivo de atracción de talento PERU"
            },    
          ],
        },
    ] */

const btnAction = document.getElementById("btnAction");

btnAction.addEventListener("click", () => {
  const datos = document.querySelectorAll("div[class*=similarJob]");
  const datosArr = [...datos];

  let myData = [];

  datosArr.forEach((dato) => {
    const allNodes = dato.childNodes;
    const itemName = allNodes.item(1);
    const itemSalary = allNodes.item(3).innerText.toString();
    const textValueOfP = itemName.firstChild.innerText.toString();
    let countryName = textValueOfP.split(" ");
    countryName = countryName[countryName.length - 1].toUpperCase();

    const founded = myData.find((country) => country.country === countryName);

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
      myData.push(country);
    }
  });
  console.log(myData);
});
