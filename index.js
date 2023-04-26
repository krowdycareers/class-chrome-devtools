const similarJobs = Array.from(document.querySelectorAll('.similarJob-0-2-766'))
console.log('TCL: similarJobs', similarJobs)

const COUNTRIES = ['PERU', 'MEXICO', 'CHILE']

let dataByCountries = {
  PERU: [],
  MEXICO: [],
  CHILE: []
}

const getTextFromNode = (nodeElements) => {
  return {
    jobTitle: nodeElements[0].innerText,
    range: nodeElements[1].innerText
  }
}

const dataFromHtml = similarJobs.map((el) => ({
  vacancy: getTextFromNode(el.querySelectorAll('.highEmphasis-0-2-103 '))
}))

dataFromHtml.forEach(({ vacancy }) => {
  COUNTRIES.forEach((country) => {
    if (vacancy.jobTitle?.includes(country)) {
      dataByCountries = {
        ...dataByCountries,
        [country]: [...dataByCountries?.[country], vacancy]
      }
    }
  })
})

console.log(dataFromHtml)
console.log('------------------------------------------------')
console.log('data filtrada por país')
console.log(dataByCountries)
