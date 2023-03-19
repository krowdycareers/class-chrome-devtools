const sameJobs = Array.from(document.querySelectorAll('.similarJob-0-2-766'))

// Filtrar salarios
const arraySalarios = sameJobs.filter((job) => {
  const { innerText } = job.querySelector(
    '.text-0-2-82.small-0-2-90.highEmphasis-0-2-103.bottomSmall-0-2-118'
  )
  return innerText.includes('Salario no mostrado')
  // return innerText.includes('$9,000 - $11,000 Mensual')
  // return innerText.includes('$12,000 - $13,000 Mensual')
})

// Filtrar por paises
const arrayTitulos = sameJobs.filter((job) => {
  const { innerText } = job.querySelector('p')

  // return innerText.includes('MEXICO')
  // return innerText.includes('PERU')
  // return innerText.includes('COLOMBIA')
  return innerText.includes('CHILE')
})

console.log(arrayTitulos)
