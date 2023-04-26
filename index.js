const NODOS = [...document.querySelectorAll('div[class^="similarJob"]')];
const publicaciones = { mexico: [], peru: [], colombia: [], chile: [] };

const jobs = NODOS.map((nodo) => ({
  titulo: nodo.querySelector('a > p').innerText,
  salario: nodo.querySelector('p[id*="salario"]').innerText,
}));

jobs.forEach((job) => {
  if (job.titulo.includes('MEXICO')) publicaciones['mexico'].push(job);
  if (job.titulo.includes('PERU')) publicaciones['peru'].push(job);
  if (job.titulo.includes('COLOMBIA')) publicaciones['colombia'].push(job);
  if (job.titulo.includes('CHILE')) publicaciones['chile'].push(job);
});

const json = JSON.stringify(publicaciones);

console.log(json);
