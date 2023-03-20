const empleos = Array.from(document.querySelectorAll(".similarJob-0-2-766"));
const paisesFil = ["méxico","mexico","peru","colombia","chile"]



const obtenerPais = (aviso) =>{
    const nombrePais = paisesFil.find(pais => aviso.includes(pais))
    
    return nombrePais
} 

const empleosFiltrados = empleos.map(el => {return {
    pais: obtenerPais(el.querySelector("a").innerText.toLowerCase()) || obtenerPais(el.querySelector(".similarJob-0-2-766 > p:nth-child(4)").innerText.toLowerCase()),
    rangoSalarial:el.querySelector(".similarJob-0-2-766 > p:nth-child(2)").innerText.toLocaleLowerCase(),
    aviso: el.querySelector("a").innerText.toLocaleLowerCase()
}})

let dataFiltrado = [];
empleosFiltrados.map((item) => {
    let repetir = empleosFiltrados.map((reg) => {
        if (item.pais.toLowerCase() == reg.pais.toLowerCase() && item.rangoSalarial.toLowerCase() == reg.rangoSalarial.toLowerCase()  && 
        item.aviso.toLowerCase() == reg.aviso.toLowerCase()){
            return reg
        }
    })
    repetir = repetir.filter((e) => e != undefined);
    // item['cantidad'] = repetir.length;
    let cant = repetir.length;

    if (dataFiltrado.find((e) => e.pais == item.pais && e.rangoSalarial == item.rangoSalarial &&  e.aviso == item.aviso) == undefined)  {
        auxArray = {pais:item.pais,rangoSalarial:item.rangoSalarial,cantidad:cant,aviso:item.aviso}
        dataFiltrado.push(auxArray);
    }
})
console.log(empleosFiltrados)
console.log(dataFiltrado);


