// Obtenemos todos los elementos con la clase '.similarJob'
const cards = Array.from(document.querySelectorAll('.similarJob'));

// Función para obtener los trabajos por país y rango salarial
const obtenerTrabajosPorPaisYRangoSalarial = (pais, minSalario, maxSalario) => {
  // Mapeamos los elementos 'cards' para obtener el título, url y salario de cada trabajo
  const trabajos = cards.map((card) => {
    const titulo = card.querySelector('a').innerText;
    const url = card.querySelector('a').href;
    const salario = card.querySelector('.small-0-2-90').innerText;
    return { titulo, url, salario };
  });
  // Filtramos los trabajos que incluyen el país y que su salario está en el rango especificado
  return trabajos.filter((trabajo) => trabajo.titulo.includes(pais) && trabajo.salario >= minSalario && trabajo.salario <= maxSalario);
};

// Obtenemos los trabajos para Perú con un salario entre 1000 y 2000
const trabajosPeru = obtenerTrabajosPorPaisYRangoSalarial('PERU', 1000, 2000);
console.log('Trabajos en Perú con un salario entre 1000 y 2000:', trabajosPeru);

// Obtenemos los trabajos para México con un salario mayor a 2000
const trabajosMexico = obtenerTrabajosPorPaisYRangoSalarial('MEXICO', 2000, Infinity);
console.log('Trabajos en México con un salario mayor a 2000:', trabajosMexico);

// Obtenemos los trabajos para Chile con un salario menor a 1000
const trabajosChile = obtenerTrabajosPorPaisYRangoSalarial('CHILE', 0, 1000);
console.log('Trabajos en Chile con un salario menor a 1000:', trabajosChile);
