const similarJobs = Array.from(
  document.querySelectorAll(".similarJob-0-2-766")
);

const agrupacion = ["PERU", "MEXICO", "CHILE"].map((pais) => {
  const paisArray = similarJobs
    .map((el) => ({
      rango: el.querySelectorAll(".text-0-2-82")[1].innerText,
      anuncio: el.querySelector("a").innerText,
    }))
    .filter((item) => item.anuncio.includes(pais));
  return {
    pais,
    rangoSalarial: paisArray.map((element) => element.rango),
    cantidad: paisArray.length,
    avisos: paisArray.map((element) => element.anuncio),
  };
});

console.log(agrupacion);
