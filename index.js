const JOBS_NODOS = [...document.querySelectorAll('div[class^="similarJob"]')];
let publications = { mexico: [], peru: [], colombia: [], chile: [] };

const jobs = JOBS_NODOS.map((nodo) => ({
  titulo: nodo.querySelector('a > p').innerText,
  salario: nodo.querySelector('p[id*="salario"]').innerText,
}));

jobs.forEach((job) => {
  if (job.titulo.includes('MEXICO')) publications['mexico'].push(job);
  if (job.titulo.includes('PERU')) publications['peru'].push(job);
  if (job.titulo.includes('COLOMBIA')) publications['colombia'].push(job);
  if (job.titulo.includes('CHILE')) publications['chile'].push(job);
});

const json = JSON.stringify(publications);

console.log(json);
