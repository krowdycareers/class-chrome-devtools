const buttonElement = document.getElementById("procesar");

buttonElement.addEventListener("click",()=>{
    const COUNTRIES = ['PERU','MEXICO']

    const datosNodo = document.querySelectorAll("div[class*=similarJob-0-2]")
    const datosArray = [...datosNodo];

    const InfoNodo = datosArray.map((el)=>{

        const datosTitulo = el.querySelector(
            'a[id*="vacante_similar-"] > p'
        ).innerText;
        const datosSalario = el.querySelector(
            'p[id*="vacante_similar_salario-"]'
        ).innerText;
        const datosGrupo = el.querySelector(
            'p[class*="lowEmphasis-0-2-105 overflow-0-2-770"]'
        ).innerText;
        return {
            titulo:datosTitulo,
            salario:datosSalario,
            grupo:datosGrupo
        }
    })

    const filtrarData = InfoNodo.filter((obj) =>
    COUNTRIES.some((pais) => obj.titulo.includes(pais))
    );
    // Crear la estructura de datos deseada
    const result = filtrarData.reduce((acc, obj) => {

        // Extraer el país y el rango salarial del título
        //pais
        const palabras = obj.titulo.split(' ');
        const pais = COUNTRIES.find(p => palabras.includes(p));
        //salario
        const salarioStr = obj.salario;
        const salarioArr = salarioStr.split('-').map(s => s.trim().split(' ')[0]);
        const salario = salarioArr.join('-');

        // Agregar el objeto al array correspondiente del país y rango salarial
        const existingPais = acc.find((item) => item.pais === pais);
        if (existingPais) {
            const existingRango = existingPais.rangos.find(
            (item) => item.salario === salario
            );
            if (existingRango) {
            existingRango.jobs.push(obj);
            } else {
            existingPais.rangos.push({
                salario,
                jobs: [obj],
            });
            }
        } else {
            acc.push({
            pais,
            rangos: [
                {
                salario,
                jobs: [obj],
                },
            ],
            });
        }

        return acc;
    }, []);

    console.log("caaaa",result);

})

