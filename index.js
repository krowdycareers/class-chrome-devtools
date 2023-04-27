var btnProcesar = document.getElementById("btnProcesar");

btnProcesar.addEventListener('click', () => {

    const avisos = document.querySelectorAll('div[class*=similarJob]');
    const paises = ['PERU', 'CHILE', 'COLOMBIA', 'MEXICO']
    let vacantes = new Array();

    avisos.forEach((aviso) => {
        vacantes.push({
            titulo: aviso.querySelector('a').innerText,
            salario: aviso.querySelector('p[id^=vacante_similar_salario]').innerText
        });
    });

    let vacantesAgrupadas = new Array();

    paises.forEach((pais) => {
        const vacantesPais = vacantes.filter(vacante => vacante.titulo.toUpperCase().includes(pais));

        const salarios = [...new Set(vacantesPais.map(vacante => vacante.salario))];

        let rangos = new Array();

        salarios.forEach((salario) => {
            const empleos = vacantesPais.filter(vacante => vacante.salario === salario).map(vacante => { return {descripcion: vacante.titulo} });

            const rango = { salario, empleos };
            rangos.push(rango);
        });

        vacantesAgrupadas.push({ pais, rangos });
    });

    console.log(vacantesAgrupadas);
    console.log(JSON.stringify(vacantesAgrupadas, null, '\t'));
    alert(JSON.stringify(vacantesAgrupadas, null, '\t'));
});