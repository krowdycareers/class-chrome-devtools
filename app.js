
const buttonElement = document.getElementById("procesar");


buttonElement.addEventListener("click", function() {
    const datos = document.querySelectorAll('[class*=item-0-2-764]');
    const datosArray = [...datos]
    let datosArrayTitleSalary = datosArray.map(el => {
        return {
            title : el.querySelector('a').title,
            title_2: el.querySelector('a').querySelector('p').innerText,
            salary : el.querySelector("[id*=vacante_similar_salario]").innerText
        }
    })

    datosArrayTitleSalary.forEach(function(element) {
        var titleArray = element.title_2.split(' ');
        var lastWord = titleArray[titleArray.length - 1];
        element.pais = lastWord;
    });

    let gruposDePaises = datosArrayTitleSalary.reduce((grupos, dato) => {
        if (!grupos[dato.pais]) {
            grupos[dato.pais] = [];
        }
        grupos[dato.pais].push(dato);
        return grupos;
    }, {});

    let datosAgrupadosPorSalario = datosArrayTitleSalary.reduce(function(acumulador, elemento) {
        let salario = elemento.salary;
        if (!acumulador[salario]) {
            acumulador[salario] = [];
        }
        acumulador[salario].push(elemento);
        return acumulador;
    }, {});

    console.log(gruposDePaises);

    console.log(datosAgrupadosPorSalario);

});






