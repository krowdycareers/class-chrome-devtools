const btnEle = document.getElementById("procesar");
btnEle.addEventListener("click", (e) => {
    const allElementsCountry = document.querySelectorAll(".item-0-2-764");
    const countries = ["MEXICO", "PERU", "CHILE"];
    let filterCountries = {};
    
    allElementsCountry.forEach((card) => {
      let tit = card.children[0].children[0].innerText;
      let sal = card.children[0].children[1].innerText;
      let filterCard = countries.find((country) => tit.includes(country));
      if (filterCard) {
        if (filterCountries[filterCard] && filterCountries[filterCard][sal]) {
          filterCountries[filterCard][sal].push(card);
        } else if (filterCountries[filterCard]) {
          filterCountries[filterCard][sal] = [card];
        } else {
          filterCountries[filterCard] = { [sal]: [card] };
        }
      }
    });
    printFilterCountries(filterCountries)
    console.log(allElementsCountry)
});

function printFilterCountries(filterCountries) {
    const result= document.getElementById('respuesta')
    for (const country in filterCountries) {
      for (const salary in filterCountries[country]) {
        filterCountries[country][salary].forEach((card) => {
            result.append(card)
        })
      }
    }
  }
  