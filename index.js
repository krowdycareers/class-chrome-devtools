const buttonElement = document.querySelector('#procesar');

buttonElement.addEventListener('click', () => {
    const nodeListSimilarJobs = document.querySelectorAll('div[class*=similarJob-]');
    const listSimilarJobs = [...nodeListSimilarJobs];
    const countries = ['PERU', 'CHILE', 'COLOMBIA', 'MEXICO'];
    
    const informationSimilarJobs = listSimilarJobs.map( jobDescription => { 
        const titleJob = jobDescription.querySelector('a > p').innerText;
        const countryJob = titleJob.split(' ')[titleJob.split(' ').length-1];
        const salaryJob = jobDescription.querySelector('[id*=vacante_similar_salario]').innerText;
    
        return {
            country: countries.includes(countryJob)? countryJob:'MEXICO',
            job: titleJob, 
            salary: salaryJob,
            }
    });
    
    const jobsAndSalariesByCountry = informationSimilarJobs.reduce( (arrayAcumulativo, item) => {
        
        let findCountry = arrayAcumulativo.find((el) => el.country === item.country);
    
        if (!findCountry) {
            arrayAcumulativo.push({
                country:item.country,
                ranges:[]}
            )}
       
        findCountry = arrayAcumulativo.find((el) => el.country === item.country);
    
        if (!findCountry.ranges.find(s => s.salary=== item.salary)) {
            findCountry.ranges.push({
                salary:item.salary, 
                jobs:[]
            });
        }
        
        findCountry = arrayAcumulativo.find((el) => el.country === item.country);
    
        if (!findCountry.ranges.find(el => el.salary === item.salary).jobs.find(el => el === item.job)){
            findCountry.ranges.find(el => el.salary === item.salary).jobs.push(item.job);
        }
    
        return arrayAcumulativo;
    }, []);
    
    console.log(jobsAndSalariesByCountry);
});





