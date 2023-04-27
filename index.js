const buttonElement = document.getElementById("procesar");

buttonElement.addEventListener("click", () => {
  // Obteniendo datos de la página
  let datos = document.querySelectorAll(
    "div[class*=carouselCont] > div[class*=carouselWrap] > div[class*=row] > div[class*=item] > div[class*=similarJob]"
  );

  // Convirtiendo datos a un array
  let datosArray = [...datos];

  let paises = ["PERU", "CHILE", "COLOMBIA", "MEXICO"];

  // Mostrando datos en un objeto

  let porPaises = paises.map((pais) => {
    let inToCountry = datosArray.filter((el) =>
      el.querySelector("a").innerText.includes(pais)
    );

    return {
      pais: pais,
      trabajos: inToCountry.map((el) => {
        return {
          title: el.querySelector("a").innerText,
          salario: el.querySelector("p[id*=vacante_similar_salario]").innerText,
          rol: el.querySelector("a").innerText.split(" ")[0],
        };
      }),
    };
  });

  console.log(porPaises);
});
