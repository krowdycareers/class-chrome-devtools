const buttonElement = document.getElementById("procesar")

buttonElement.addEventListener("click", () => {
    const nodeJobs = document.querySelectorAll("div[class*=similarJob-0-2-766]")
    const countries = ['PERU', 'CHILE', 'MEXICO', 'COLOMBIA']

    const nodes = [...nodeJobs].map(nodeSel => {
        const job = nodeSel.querySelector("a[id*=vacante_similar] > p").innerText.replace(/Mixcoac|ALVARO OBREGON|rrhh|PLANILLA/i, wordRep => {
            switch (wordRep) {
                case 'rrhh':
                    return wordRep + ' MEXICO'
                case 'PLANILLA':
                    return wordRep + ' CHILE'
                default:
                    return 'MEXICO'
            }
        })
        const salary = nodeSel.querySelector("p[id*=vacante_similar_salario]").innerText
        return { job, salary }
    })

    const structure = {}
    countries.forEach(country => {
        const filterCountries = nodes.filter(el => el.job.includes(country))
        structure[country] = filterCountries.reduce((collector, item) => {
            const salary = item.salary;
            if (!collector[salary]) {
                collector[salary] = [];
            }
            collector[salary].push(item.job);
            return collector;
        }, {});
    })

    console.log(structure)
})

    //Formato
    // [
    //     {
    //         pais: 'xxxxx',
    //         rangos:[
    //             {
    //                 salario:'xxx-xxxx',
    //                 jobs:[{},{}],
    //             },
    //             {
    //                 salario:'xxx-xxxx',
    //                 jobs:[{},{}],
    //             }
    //         ]

    //     }
    // ]

    // REsultado de ejecución
    // {
    //     "PERU": {
    //         "$9,000 - $11,000 Mensual": [
    //             "Ejecutivo de atracción de talento PERU",
    //             "Ejecutivo de atracción de talento PERU",
    //             "Analista de reclutamiento zona PERU"
    //         ],
    //         "$4,000 - $6,000 Mensual": [
    //             "Ejecutivo de atracción de talento PERU"
    //         ],
    //         "$12,000 - $14,000 Mensual": [
    //             "ANALISTA DE RECLUTAMIENTO ZONA PERU"
    //         ],
    //         "Salario no mostrado.": [
    //             "RECLUTADOR (A) PERU"
    //         ]
    //     },
    //     "CHILE": {
    //         "Salario no mostrado.": [
    //             "RECLUTADOR (A) CHILE",
    //             "RECLUTADOR (A) CHILE"
    //         ],
    //         "$12,000 - $13,000 Mensual": [
    //             "Reclutador Zona CHILE"
    //         ],
    //         "$12,000 - $14,000 Mensual": [
    //             "ANALISTA DE RECLUTAMIENTO ZONA ALVARO CHILE"
    //         ],
    //         "$9,000 - $11,000 Mensual": [
    //             "ANALISTA DE PLANILLA CHILE"
    //         ]
    //     },
    //     "MEXICO": {
    //         "$9,000 - $11,000 Mensual": [
    //             "Reclutador Zona MEXICO",
    //             "Analista de reclutamiento zona MEXICO",
    //             "Reclutador Zona MEXICO",
    //             "Ejecutivo de rrhh MEXICO",
    //             "Analista de rotativo zona MEXICO",
    //             "Reclutador Zona MEXICO",
    //             "ANALISTA DE RECLUTAMIENTO ZONA MEXICO"
    //         ],
    //         "$2,000 - $3,000 Mensual": [
    //             "Analista de reclutamiento zona MEXICO"
    //         ],
    //         "$1,000 - $2,000 Mensual": [
    //             "Reclutador Zona MEXICO"
    //         ]
    //     },
    //     "COLOMBIA": {
    //         "$9,000 - $11,000 Mensual": [
    //             "Analista de reclutamiento zona COLOMBIA",
    //             "ANALISTA DE RECLUTAMIENTO ZONA COLOMBIA",
    //             "Ejecutivo de atracción de talento COLOMBIA"
    //         ],
    //         "Salario no mostrado.": [
    //             "RECLUTADOR (A) COLOMBIA",
    //             "RECLUTADOR (A) COLOMBIA"
    //         ]
    //     }
    // }

    
