// const buttonElement = document.getElementById("procesar");
// buttonElement.addEventListener("click", Ejecutar());

const Ejecutar = () => {
  // alert("JS Ejecutado");
  // to execute scraping,
  console.log(document.querySelectorAll(".item-0-2-764"));

  // o

  console.log(document.querySelectorAll("[class*=item-]"));

  // o

  console.log(document.querySelectorAll("[class*=carousel] > [class*=item-]"));

  // ARROW FUNCTIONS *

  // Transforms an object and returns it in a different structure

  let sugerencias = document.querySelectorAll(
    "[class*=carousel] > [class*=item-]"
  );

  // with spreat method, make it an array of elements, and be able to use arrow functions
  sugerencias = [...sugerencias];

  // retreive only the text and not the html element
  let listaTextoSugerencias = sugerencias.map((e) => e.innerText);
  console.log(listaTextoSugerencias);

  const textoComprador = listaTextoSugerencias.filter((e) =>
    e.includes("Comprador")
  );

  console.log(textoComprador.length);
  console.log(textoComprador);

  const textPrimerComprador = listaTextoSugerencias.find((e) =>
    e.includes("Comprador")
  );
  console.log(textPrimerComprador);

  const textPrimerCompradorIndex = listaTextoSugerencias.findIndex((e) => {
    e = textPrimerComprador;
  });
  console.log(textPrimerCompradorIndex);

  console.log(listaTextoSugerencias.fill("hola", 4, 6));
};

const EjecutarReto = () => {
  // alert("working")

  const datos = document.querySelectorAll("div[class*=similarJob]");
  console.log(datos);
  const datosArray = [...datos];

  console.log(
    datosArray.map((e) => {
      return {
        title: e.querySelector("a").title,
        salary: e.querySelector("[id*=vacante_similar_salario]").innerText,
      };
    })
  );

  // Crear array de paises, para agrupar?

  //   [
  //       {
  //        pais: "Peru",
  //        rangos:[
  //           {
  //               salario:'11000 - 12000',
  //               jobs:[{}{}],
  //               },
  //               {
  //               salario:'13000 - 15000',
  //               jobs:[{}{}],
  //               }
  //        ]
  //       },
  //       {
  //         pais: "Mexico",
  //         rangos:[
  //            {
  //                salario:'11000 - 12000',
  //                jobs:[{}{}],
  //                },
  //                {
  //                salario:'13000 - 15000',
  //                jobs:[{}{}],
  //                }
  //         ]
  //        },
  //        ...

  //   ]

  //

  //   const data = [
  //     {
  //       pais: "Peru",
  //       salario: "11000 - 12000",
  //       jobs: [{}, {}],
  //     },
  //     {
  //       pais: "Mexico",
  //       salario: "11000 - 12000",
  //       jobs: [{}, {}],
  //     },
  //     {
  //       pais: "Peru",
  //       salario: "13000 - 15000",
  //       jobs: [{}, {}],
  //     },
  //     {
  //       pais: "Mexico",
  //       salario: "13000 - 15000",
  //       jobs: [{}, {}],
  //     },
  //   ];

  //   const result = data.reduce((acc, { pais, salario, jobs }) => {
  //     const countryIndex = acc.findIndex((c) => c.pais === pais);
  //     if (countryIndex === -1) {
  //       acc.push({
  //         pais,
  //         rangos: [{ salario, jobs }],
  //       });
  //     } else {
  //       const salaryIndex = acc[countryIndex].rangos.findIndex(
  //         (s) => s.salario === salario
  //       );
  //       if (salaryIndex === -1) {
  //         acc[countryIndex].rangos.push({ salario, jobs });
  //       } else {
  //         acc[countryIndex].rangos[salaryIndex].jobs.push(...jobs);
  //       }
  //     }
  //     return acc;
  //   }, []);

  //   console.log(result);

  //
  console.log("*** resultado:");

  const paises = [];

  // Obtener los elementos HTML que contienen la información necesaria
  const elementosHTML = document.querySelectorAll(".item-0-2-764");

  // Recorrer los elementos y construir el objeto correspondiente
  elementosHTML.forEach((elementoHTML) => {
    // Obtener la información necesaria del elemento HTML
    const pais =
      elementoHTML.querySelector(
        ".text-0-2-82 small-0-2-90 lowEmphasis-0-2-105 bottomSmall-0-2-118"
      )?.textContent ?? "Sin información";

    const salario =
      elementoHTML.querySelector(
        ".text-0-2-82 small-0-2-90 highEmphasis-0-2-103 bottomSmall-0-2-118"
      )?.textContent ?? "Sin información";

    const trabajo = {
      titulo:
        elementoHTML.querySelector(
          ".text-0-2-82 standard-0-2-89 highEmphasis-0-2-103 overflow-0-2-770"
        )?.textContent ?? "Sin información",
      salario: salario,
    };

    // Buscar si ya existe un objeto país con el nombre correspondiente
    let objetoPais = paises.find((paisObj) => paisObj.pais === pais);

    // Si no existe, crearlo y agregarlo al arreglo de países
    if (!objetoPais) {
      objetoPais = { pais: pais, rangos: [] };
      paises.push(objetoPais);
    }

    // Buscar si ya existe un objeto rango salarial con el salario correspondiente
    let objetoRango = objetoPais.rangos.find(
      (rangoObj) => rangoObj.salario === salario
    );

    // Si no existe, crearlo y agregarlo al arreglo de rangos del objeto país
    if (!objetoRango) {
      objetoRango = { salario: salario, jobs: [] };
      objetoPais.rangos.push(objetoRango);
    }

    // Agregar el trabajo al arreglo de trabajos del objeto rango salarial
    objetoRango.jobs.push(trabajo);
  });

  console.log(paises);
};
