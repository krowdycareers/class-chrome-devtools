//POR FABRIZIO MENDOZA
const buttonElement = document.getElementById('procesar');

buttonElement.addEventListener("click", () => {
  alert('prueba');
  const datos = document.querySelectorAll('div[class*=similarJob]');
  const dato = datos[0]

  //dato.querySelector('a').innerText

  const datosarray = [...datos]

  const newdata = datosarray.map(el => {
    return {
      title: el.querySelector('a').innerText, salary:
        dato.querySelector("[id*=vacante_similar_salario-]").innerText
    }
  })

  //console.log(Array.from(newdata));
  const dataPeru = newdata.filter(peru => peru.title.includes("PERU"));
  const dataColombia = newdata.filter(peru => peru.title.includes("COLOMBIA"));
  const dataChile = newdata.filter(peru => peru.title.includes("CHILE"));
  const dataMexico = newdata.filter(peru => peru.title.includes("MEXICO"));
  const dataAlvaro = newdata.filter(peru => peru.title.includes("ALVARO OBREGON"));
  const dataAlvaroChile = newdata.filter(peru => peru.title.includes("ALVARO CHILE"));

  const objeto = [
    {
      pais: "PERU",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataPeru
        }
      ]
    },
    {
      pais: "COLOMBIA",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataColombia
        }
      ]
    },
    {
      pais: "CHILE",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataChile
        }
      ]
    },
    {
      pais: "MEXICO",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataMexico
        }
      ]
    },
    {
      pais: "ALVARO OBREGON",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataAlvaro
        }
      ]
    },
    {
      pais: "ALVARO CHILE",
      rangos: [
        {
          salario: '11000 - 12000',
          jobs: dataAlvaroChile
        }
      ]
    }
  ]
  console.log(objeto);

});
