const buttonElment = document.getElementById('process')

buttonElment.addEventListener("click",()=>{

    const datos = document.querySelectorAll('div[class*=similarJob]')
    const datosArray = [...datos]

    const selectedData = datosArray.map(dato =>{return {
        title: dato.querySelector('a').innerText, salary: dato.querySelector("[id*=vacante_similar_salario]").innerText
    }})


    const transformedData = selectedData.map(dato => {
        const countries = /(CHILE|COLOMBIA|MEXICO|PERU)/i;
        const match = dato.title.match(countries)
        const country = match ? match[0] : ''
        const newTitle = dato.title.replace(countries, '').trim()
        const salaryRange = dato.salary.replace(/\$|,/g, '').split('-').join('-').replace(' Mensual', '')
        delete dato.title
        delete dato.salary

        return {
          ...dato,
          country:country,
          job: newTitle,
          salaryRange:salaryRange

        };
      });
    console.log(transformedData)

    const filteredData = [];

    transformedData.forEach(item => {
    const existingCountry = filteredData.find(country => country.pais === item.country);

    if (existingCountry) {
        const existingSalaryRange = existingCountry.rango.find(range => range.salario === item.salaryRange);

        if (existingSalaryRange) {
            existingSalaryRange.job.push(item.job);
        } else {
            existingCountry.rango.push({
                salario: item.salaryRange,
                job: [item.job]
        });
        }
    } else {
        filteredData.push({
        pais: item.country,
        rango: [
            {
                salario: item.salaryRange,
                job: [item.job]
            }
        ]
        });
    }
    });

    console.log(filteredData);

    // [
    //     {
    //         pais: "Peru",
    //         rango:[
    //              salario:"11000 - 12000",
    //              job:[{}{}]
    //         ]
    //     }
    // ]
})
