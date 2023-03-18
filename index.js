const filtroTitulo = (elemento) => {
  let enlace = elemento.querySelector("a").href;
  let titulo = elemento.querySelector("a").innerText;
  let paises = ["PERU", "MEXICO", "CHILE", "COLOMBIA"];
  let datos = {
    pais: "No especifica",
    titulo,
    enlace,
  };
  for (let pais of paises) {
    if (titulo.includes(pais)) {
      datos.pais = pais;
      break;
    }
  }
  return datos;
};

const filtroSalario = (elemento) => {
  let dinero = elemento.querySelector("p[id*=vacante_similar_salario]").innerText;
  dinero = dinero.replace(" Mensual","");
  return dinero
};

// const FiltroPaises = (arrayTrabajos)=>{
//     let cantPorPais = {};
//     for (const trabajo of arrayTrabajos){
//         if(cantPorPais[trabajo.pais]){
//             cantPorPais[trabajo.pais].cantidad++
//             cantPorPais[trabajo.pais].listaTitulos.push(trabajo.titulo)
//             cantPorPais[trabajo.pais].enlaceTrabajo.push(trabajo.enlace)
//             cantPorPais[trabajo.pais].rangoSalarial.push(trabajo.rangoSalarial)

//         }
//         else{
//             cantPorPais[trabajo.pais] = {cantidad: 1, listaTitulos: [trabajo.titulo], enlaceTrabajo: [trabajo.enlace], rangoSalarial: [trabajo.rangoSalarial]}
//         }
//     }

//     const paises = []
//     for(const pais in cantPorPais){
//         paises.push({pais, cantidad: cantPorPais[pais].cantidad, titulos: cantPorPais[pais].listaTitulos, enlaceTrabajo: cantPorPais[pais].enlaceTrabajo, salarios: cantPorPais[pais].rangoSalarial})
//     }
    
//     return paises
    

// }

const FiltroTipo = (arrayTrabajos,filtro="pais")=>{
  let auxfiltro = "pais"
  let valoraux = "rangoSalarial"
  if (filtro == ""){
    return
  }
  if(filtro == 'salario'){
    valoraux = "pais"
    auxfiltro = "rangoSalarial"
  }
  let cantidad = {};
  for (const trabajo of arrayTrabajos){
        if(cantidad[trabajo[auxfiltro]]){
            cantidad[trabajo[auxfiltro]].cantidad++
            cantidad[trabajo[auxfiltro]].listaTitulos.push(trabajo.titulo)
            cantidad[trabajo[auxfiltro]].enlaceTrabajo.push(trabajo.enlace)
            // cantidad[trabajo[auxfiltro]].rangoSalarial.push(trabajo[valoraux])
            cantidad[trabajo[auxfiltro]][valoraux].push(trabajo[valoraux])
        }
        else{
            cantidad[trabajo[auxfiltro]] = {cantidad: 1, listaTitulos: [trabajo.titulo], enlaceTrabajo: [trabajo.enlace]}
            cantidad[trabajo[auxfiltro]][valoraux] = [trabajo[valoraux]]

        }
    }
    // console.log(cantidad)
    const arrayFiltros = []
    for(const principal in cantidad){
      let filtro = {
        principal,
        cantidad : cantidad[principal].cantidad,
        titulos: cantidad[principal].listaTitulos,
        enlaceTrabajo: cantidad[principal].enlaceTrabajo,
      }
      filtro[valoraux] = cantidad[principal][valoraux];
      arrayFiltros.push(filtro)
        // arrayFiltros.push({pais, cantidad: cantidad[pais].cantidad, titulos: cantPorPais[pais].listaTitulos, enlaceTrabajo: cantPorPais[pais].enlaceTrabajo, salarios: cantPorPais[pais].rangoSalarial})
    }
    
    return arrayFiltros
}



let trabajos = document.querySelectorAll(".item-0-2-764");
trabajos = Array.from(trabajos);

let trabajosFiltrados = 
  trabajos.map((el) => {
    let { pais, titulo, enlace } = filtroTitulo(el);
    let rangoSalarial = filtroSalario(el);
    return {
      pais,
      titulo,
      rangoSalarial,
      enlace,
    };
  })

// * Separación por pais
// const trabajosPorPais = FiltroPaises(trabajosFiltrados)
let trabajosPorPais = FiltroTipo(trabajosFiltrados,"pais")
console.log(trabajosPorPais)
// * Separación por rango salarial
let trabajosPorSalario = FiltroTipo(trabajosFiltrados,"salario")
console.log(trabajosPorSalario)
