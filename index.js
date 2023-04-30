const buttonElement = document.getElementById('procesar');

buttonElement.addEventListener("click", () => {
    const jobsData = document.querySelectorAll('div[class*=similarJob]');
    const jobsDataArray = [...jobsData];
    const dataSelected = jobsDataArray.map(el => { return { title: el.querySelector('p[class*=text-0-2-82]').innerText, salary: el.querySelector('[id*=vacante_similar_salario]').innerText } })

    const transformedData = dataSelected.map(data => {
        const countries = /(CHILE|COLOMBIA|MEXICO|PERU)/i;
        const match = data.title.match(countries)
        const country = match ? match[0] : 'NoPais'
        const newTitle = data.title.replace(countries, '').trim()
        const salaryRange = data.salary.replace(' Mensual', '')
        delete data.title
        delete data.salary

        return {
            ...data,
            country: country,
            job: newTitle,
            salaryRange: salaryRange

        };
    });
    console.log(transformedData)

    
}); 
