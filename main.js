//! Almacenamos en una variable a todos los cards
const similarJobs = Array.from(document.querySelectorAll('.similarJob-0-2-766'));

//! Agrupacion de trabajos para Peru
const jobsPeru = similarJobs.map(elemento => {
  return {
    title: elemento.querySelector('a').innerText,
    url: elemento.querySelector('a').href
  }
}).filter(elemento => elemento.title.includes('PERU'));
console.log("🚀 ~ file: main.js:15 ~ jobsPeru ~ jobsPeru:", jobsPeru)

//! Agrupacion de trabajos para Mexico
const jobsMexico = similarJobs.map(elemento => {
  return {
    title: elemento.querySelector('a').innerText,
    url: elemento.querySelector('a').href
  }
}).filter(elemento => elemento.title.includes('MEXICO'))
console.log("🚀 ~ file: main.js:21 ~ jobsMexico ~ jobsMexico:", jobsMexico)

//! Agrupacion de trabajos para Chile
const jobsChile = similarJobs.map(elemento => {
  return {
    title: elemento.querySelector('a').innerText,
    url: elemento.querySelector('a').href
  }
}).filter(elemento => elemento.title.includes('CHILE'));
console.log("🚀 ~ file: main.js:29 ~ jobsChile ~ jobsChile:", jobsChile)

//! Agrupacion de trabajos por rango salarial
const rangoSalarial = similarJobs.map(elemento => {
  return {
    title: elemento.querySelector('a').innerText,
    salario: elemento.querySelector('.small-0-2-90').innerText
  }
})
console.log("🚀 ~ file: main.js:40 ~ rangoSalarial ~ rangoSalarial:", rangoSalarial)

