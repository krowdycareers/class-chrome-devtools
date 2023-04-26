// Obtenemos todos los elementos con la clase '.similarJob-0-2-766'
const cards = Array.from(document.querySelectorAll('.similarJob-0-2-766'));

// Función para obtener los trabajos por país
const obtenerTrabajosPorPais = (pais) => {
  // Mapeamos los elementos 'cards' para obtener el título y la url de cada trabajo
  const trabajos = cards.map((card) => {
    const titulo = card.querySelector('a').innerText;
    const url = card.querySelector('a').href;
    return { titulo, url };
  });
  // Filtramos los trabajos que incluyen el país especificado
  return trabajos.filter((trabajo) => trabajo.titulo.includes(pais));
};

// Función para obtener los trabajos por rango salarial
const obtenerTrabajosPorRangoSalarial = () => {
  // Mapeamos los elementos 'cards' para obtener el título y el salario de cada trabajo
  return cards.map((card) => {
    const titulo = card.querySelector('a').innerText;
    const salario = card.querySelector('.small-0-2-90').innerText;
    return { titulo, salario };
  });
};

// Obtenemos los trabajos para Perú
const trabajosPeru = obtenerTrabajosPorPais('PERU');
console.log('Trabajos en Perú:', trabajosPeru);

// Obtenemos los trabajos para México
const trabajosMexico = obtenerTrabajosPorPais('MEXICO');
console.log('Trabajos en México:', trabajosMexico);

// Obtenemos los trabajos para Chile
const trabajosChile = obtenerTrabajosPorPais('CHILE');
console.log('Trabajos en Chile:', trabajosChile);

// Obtenemos los trabajos por rango salarial
const trabajosPorRangoSalarial = obtenerTrabajosPorRangoSalarial();
console.log('Trabajos por rango salarial:', trabajosPorRangoSalarial);