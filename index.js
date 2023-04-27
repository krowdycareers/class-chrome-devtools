const buttonElement  = document.getElementById("procesar")
const datos = document.querySelectorAll("div[class*=similarJob]")
const datosArray = [...datos]
const paises = ["PERU", "MEXICO", "CHILE", "COLOMBIA"]

const arreglo = datosArray.map(el => { return { Puesto: el.querySelector('p').innerText, Salario: el.querySelector('[id*=vacante_similar_salario]').innerText } })
console.log(arreglo)
const arrayPais = {}
const arraySalario = {}

buttonElement.addEventListener('click', () => {
    alert("Países y Salarios");
    
    const paisesIndex = {};
    for (let i = 0; i < paises.length; i++) {
      paisesIndex[paises[i]] = true;
    }
    
    const arrayPais = {};
    const arraySalario = {};
    for (let i = 0; i < arreglo.length; i++) {
      const element = arreglo[i];
      let encontrado = false;
      for (let pais in paisesIndex) {
        if (element.Puesto.includes(pais)) { 
          if (!arrayPais[pais]) {
            arrayPais[pais] = []; 
          }
          arrayPais[pais].push(element);
          encontrado = true;
          break;
        }
      }
      if (!encontrado) {
        if (!arrayPais.Otros) {
          arrayPais.Otros = [];
        }
        arrayPais.Otros.push(element);
      }
      
      const salario = element.Salario;
      if (!arraySalario.hasOwnProperty(salario)) {
        arraySalario[salario] = [];
      }
      arraySalario[salario].push(element);
    }
  
    for (let pais in arrayPais) {
      if (arrayPais.hasOwnProperty(pais)) {
        arrayPais[pais].sort((a, b) => {
          if (a.Salario === "Salario no mostrado.") return 1;
          if (b.Salario === "Salario no mostrado.") return -1;
          const asalario = parseInt(a.Salario.replace(/[^0-9.-]+/g, ""));
          const bsalario = parseInt(b.Salario.replace(/[^0-9.-]+/g, ""));
          return bsalario - asalario;
        });
      }
    }
    
    console.log(arrayPais);
    console.log(arraySalario);
  });
  