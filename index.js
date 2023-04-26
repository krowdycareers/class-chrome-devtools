const procesarElemnto = document.getElementById("procesar");
const paises = ["peru", "colombia", "mexico", "chile"];
const trabajos = [];
const trabajosFiltrados = {
  peru: {},
  colombia: {},
  mexico: {},
  chile: {},
  none: {},
};

procesarElemnto.addEventListener("click", () => {
  const data = document.querySelectorAll("div[class*=similarJob-0-2-766]");

  data.forEach((element) => {
    let info = element.querySelectorAll("p");
    info = Array.prototype.slice.call(info);
    info = info.filter((_, index) => index < 2);
    info = info.map((element) => element.innerHTML.toLowerCase().trim());
    trabajos.push(info);
  });

  trabajos.forEach((trabajo) => {
    let cargo = trabajo[0];
    let salario = trabajo[1];
    let ciudad = trabajo[0].split(" ").slice(-1)[0];
    if (paises.indexOf(ciudad)!=-1) {
      trabajosFiltrados[ciudad].hasOwnProperty(salario)
        ? trabajosFiltrados[ciudad][salario].push(cargo)
        : (trabajosFiltrados[ciudad][salario] = [cargo]);
    }else{
        trabajosFiltrados['none'].hasOwnProperty(salario)
        ? trabajosFiltrados['none'][salario].push(cargo)
        : (trabajosFiltrados['none'][salario] = [cargo]);
    }

  });
  console.log(trabajosFiltrados)
});
