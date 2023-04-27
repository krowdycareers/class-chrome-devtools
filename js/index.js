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
    e.includes("Ejecutivo")
  );

  console.log(textoComprador.length);
  console.log(textoComprador);

  const textPrimerComprador = listaTextoSugerencias.find((e) =>
    e.includes("Ejecutivo")
  );
  console.log(textPrimerComprador);

  const textPrimerCompradorIndex = listaTextoSugerencias.findIndex((e) => {
    e = textPrimerComprador;
  });
  console.log(textPrimerCompradorIndex);

  console.log(listaTextoSugerencias.fill("hola", 4, 6));
};
