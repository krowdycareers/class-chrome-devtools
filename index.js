const empleos = document.querySelectorAll(".similarJob-0-2-766");
const arrayEmpleos = [...empleos];

const empleosOrganizados = arrayEmpleos.map((empleo) => {
  return {
    title: empleo.querySelector("a").innerText,
    url: empleo.querySelector("a").href,
    rangoSalarial: empleo.querySelector("a + p").innerHTML.trim(),
  };
});

const empleosPeru = empleosOrganizados.filter((empleo) =>
  empleo.title.toLowerCase().includes("peru")
);

const empleosColombia = empleosOrganizados.filter((empleo) =>
  empleo.title.toLowerCase().includes("colombia")
);

const empleosChile = empleosOrganizados.filter((empleo) =>
  empleo.title.toLowerCase().includes("chile")
);

const empleosMexico = empleosOrganizados.filter((empleo) =>
  empleo.title.toLowerCase().includes("mexico")
);

const otrosEmpleos = empleosOrganizados.filter((empleo) => {
  const title = empleo.title.toLowerCase();
  return (
    !title.includes("peru") &&
    !title.includes("colombia") &&
    !title.includes("chile") &&
    !title.includes("mexico")
  );
});

const allEmpleos = {
  Chile: empleosChile,
  Colombia: empleosColombia,
  Mexico: empleosMexico,
  Otros: otrosEmpleos,
  Peru: empleosPeru,
};

const JSONEmpleos = JSON.stringify(allEmpleos);

console.log(allEmpleos);
