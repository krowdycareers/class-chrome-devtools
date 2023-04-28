
// console.log(data)
let elementos = [...document.querySelectorAll("[class*=similarJob-")]
let data = elementos.map((element) => {
    return {
        title: element.querySelector(".text-0-2-82.standard-0-2-89").innerText,
        rangoS: element.querySelector("[id*=vacante_similar_salario]").innerText
    }
})

let paises = ['PERU', 'COLOMBIA', 'CHILE', 'MEXICO', 'NOPAIS']

let arrayData=paises.map((pais) => {
    return {
        Pais:pais,
        jobs:data.filter((dd) =>pais=='NOPAIS'?(!paises.some((pais2) => dd.title.includes(pais2))):dd.title.includes(pais)
    )}
});


console.log(arrayData)

// console.log(arrayData[0].jobs[0].rangoS.split('-').map(s => s.trim().split(' ')[0])[1].split('$')[1].split(','))