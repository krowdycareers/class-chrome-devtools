const btnProcesar = document.getElementById("procesar")
const datos = document.querySelectorAll("div[class*=similarJob")
const datosArray = [...datos]
const paises = ["PERU", "MEXICO", "CHILE", "COLOMBIA"]

const arreglo = datosArray.map(el => { return { Puesto: el.querySelector('p').innerText, Salario: el.querySelector('[id*=vacante_similar_salario]').innerText } })
console.log(arreglo)
const arregloPais = {}
const arregloSalario = {}

btnProcesar.addEventListener('click', () => {
  alert("Agrupando elementos")
  arreglo.forEach(element => {
    var encontrado = false;
    for (var i = 0; i < paises.length; i++) {
      if (element.Puesto.includes(paises[i])) { 
        if (!arregloPais[paises[i]]) {
          arregloPais[paises[i]] = []; 
        }
        arregloPais[paises[i]].push(element);
        encontrado = true;

      }
    }
    if (!encontrado) {
      if (!arregloPais.Otros) {
        arregloPais.Otros = [];
      }
      arregloPais.Otros.push(element);
    }
  });
  for (let pais in arregloPais) {
    
      arregloPais[pais].sort((a, b) => {
        if (a.Salario === "Salario no mostrado.") return 1;
        if (b.Salario === "Salario no mostrado.") return -1;
        const asalario = parseInt(a.Salario.replace(/[^0-9.-]+/g, ""));
        const bsalario = parseInt(b.Salario.replace(/[^0-9.-]+/g, ""));
        return bsalario-asalario;
      })
    }
  
  console.log(arregloPais)
  
  arreglo.forEach(element => {
    const salario = element.Salario;
    if (!(salario in arregloSalario)) {
      arregloSalario[salario] = [];
    }
    arregloSalario[salario].push(element);
  });

  console.log(arregloSalario)
});

