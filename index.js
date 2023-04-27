const buttomElement = document.getElementById("procesar");

buttomElement.addEventListener('click', ()=>{

    //alert("prueba");
    let data = [];
    let divs = document.querySelectorAll("div[class*=similarJob-]");
    divs = [...divs]
    // .map((d) => ({
    //   title: d.querySelector("a").title,
    //   salary: d.querySelector("[id*=vacante_similar_salario]").innerText,
    //   role: d.querySelector("a").title,
    // }));

    let countries = ["PERU", "CHILE", "COLOMBIA", "MEXICO"];

  let forCountries = countries.map((country) => {
    let inToCountry = data.filter((d) =>
    d.querySelector("a").innerText.includes(country)
    
    );

    return {
      pais: country,
      trabajos: inToCountry.map((d) => {
        return {
          title: d.querySelector("a").innerText,
          salario: d.querySelector("p[id*=vacante_similar_salario]").innerText,
          rol: d.querySelector("a").innerText.split(" ")[0],
        };
      }),
    };
  });

  console.log(forCountries);
    
