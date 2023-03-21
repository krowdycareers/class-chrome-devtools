let jobs = [...document.querySelectorAll(".similarJob-0-2-766")]
const filterCountries = ["PERU", "MEXICO", "CHILE"]
// console.log(jobs[0].querySelector('p.bottomSmall-0-2-118').innerText)

let jobsForShow = jobs.map(element => {
    return {
        title: element.querySelector('a').innerText,
        url: element.querySelector('a').href,
        salary: element.querySelector('p.bottomSmall-0-2-118').innerText,
    }
})

function filter(element) {
    let aux = jobsForShow.filter((el) => { return el.title.includes(element) })
    return {
        pais: element,
        rangoSalarial: aux[0].salary,
        cantidad: aux.length,
        avisos: aux
    }
}

console.log(filterCountries.map(filter))