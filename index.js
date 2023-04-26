const todasLastargetas = [
  ...document.getElementsByClassName('similarJob-0-2-766')
]
const filtro = ['PERU', 'CHILE', 'MEXICO']
const boton = document.getElementById('procesar')

const filtrarPorPais = (element, dic) => {
  const tituloArr = element.split(' ')

  if (filtro.includes(tituloArr[tituloArr.length - 1])) {
    if (!dic[tituloArr[tituloArr.length - 1]]) {
      dic[tituloArr[tituloArr.length - 1]] = [element]
    } else {
      dic[tituloArr[tituloArr.length - 1]].push(element)
    }
  }
}

const filtrarPorSueldo = (element, arr, titulo) => {
  let bool = false

  arr.forEach((h) => {
    if (h.sueldo && h.sueldo === element) {
      h.trabajo.push(titulo)
      bool = true
    }
  })

  if (!bool) arr.push({ sueldo: element, trabajo: [titulo] })
}

boton.onclick = (e) => {
  e.preventDefault()

  const trabajosFiltrados = { porPais: {}, porSueldo: [] }

  todasLastargetas.forEach((u, i) => {
    const [, { innerText: textoTitulo }, , { innerText: textoSueldo }] =
      u.childNodes

    filtrarPorPais(textoTitulo, trabajosFiltrados.porPais)
    filtrarPorSueldo(textoSueldo, trabajosFiltrados.porSueldo, textoTitulo)
  })
  console.log(trabajosFiltrados)

  // filtrar(todasLastargetas)
}
