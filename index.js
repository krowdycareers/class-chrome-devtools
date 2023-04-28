// En este objeto se agruparan los avisos Por Salario y esos arrays creados se agruparan por Pais
let avisosPorSalariosPorPais = {};

const similarJobs = document.querySelectorAll(".similarJob-0-2-766"); //nodeList
const arrayJobs = Array.from(similarJobs); // transforma el nodeList a un array

console.log("arrayJobs", arrayJobs); // array de elements HTML con la clase "similarJob-0-2-766"

//convierte cada elemento HTML del array anterior a un objeto con los valores de pais,salario,aviso
const cleanDataJobs = arrayJobs.map((el) => {
  anchorElement = el.querySelector("a");
  title = anchorElement.innerText;
  titleSplit = title.split(" ");

  return {
    pais: titleSplit[titleSplit.length - 1],
    salario: el.children[1].innerText,
    aviso: anchorElement.innerText,
  };
});

console.log("cleanDataJobs", cleanDataJobs);

cleanDataJobs.forEach((oferta) => {
  //Verifica que el objeto tenga como atributo el pais de la oferta actual iterada
  if (avisosPorSalariosPorPais.hasOwnProperty(oferta.pais)) {
    // obtiene el array de los avisos que tienen un mismo salario en determinado pais
    let avisosMismoSalario =
      avisosPorSalariosPorPais[oferta.pais][oferta.salario];

    // si el array existe, agrega el aviso de la oferta actual iterada
    if (avisosMismoSalario) {
      avisosMismoSalario.push(oferta.aviso);

      // si el array no existe, lo crea y agrega el aviso de la oferta actual iterada
    } else {
      avisosPorSalariosPorPais[oferta.pais][oferta.salario] = [oferta.aviso];
    }

    // Si no tiene el atributo pais, lo crea
  } else {
    avisosPorSalariosPorPais[oferta.pais] = {}; // crea el atributo pais de la oferta actual
    avisosPorSalariosPorPais[oferta.pais][oferta.salario] = [oferta.aviso]; // crea el atributo con el nombre del valor del salario
  }
});

console.log("avisosPorSalariosPorPais", avisosPorSalariosPorPais);
