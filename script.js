const init = () => {
    const cartas = document.querySelectorAll(".item-0-2-764");
    const listaDeCartas = [...cartas];
    const listaDeInformacion = listaDeCartas.map((el) => {
        const tituloDOM = el.querySelector("p").innerText;
        const salarioDOM = el.querySelector(
            "[id*=vacante_similar_salario]"
        ).innerText;

        const salario = salarioDOM.replace(" Mensual", "");

        return {
            titulo: tituloDOM,
            pais: tituloDOM.split(" ")[tituloDOM.split(" ").length - 1],
            salario,
        };
    });

    const informacionFinal = {};

    listaDeInformacion.forEach((el) => {
        if (el.pais in informacionFinal) {
            informacionFinal[el.pais].publicaciones.push(el.titulo);
        } else {
            informacionFinal[el.pais] = {};
            informacionFinal[el.pais].salario = el.salario;
            informacionFinal[el.pais].publicaciones = [];
            informacionFinal[el.pais].publicaciones.push(el.titulo);
        }
    });

    let infomacionJSON = JSON.stringify(informacionFinal);

    console.log("=================== JSON ==================");
    console.log(infomacionJSON);
    console.log("=================== Objeto ==================");
    console.log(informacionFinal);
};

document.addEventListener("DOMContentLoaded", init);
