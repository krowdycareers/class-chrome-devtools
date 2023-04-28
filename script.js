window.onload = function () {
    const JOBS = Array.from(document.querySelectorAll('.similarJob-0-2-766'));
    const COUNTRIES = ['Peru', 'Colombia', 'Chile', 'Mexico'];
    const REGEX_SALARY = /[0-9]+([,.][0-9]+)?/g;

    let salary_range = [];

// type:true=minimum salary false=maximum salary
    function find_salary(value) {
        let salary = value.innerText.match(REGEX_SALARY);
        if (salary) {
            salary_range.push(...salary);
        }
        return salary ? salary : 'No especificado';
    }

    function stringToNumberSalary(salary) {
        return parseFloat(salary.replace(/,/g, ''));
    }

    let listedJobs = JOBS.map(job => ({
        position: job.querySelector('a').innerText,
        link: job.querySelector('a').href,
        salary: find_salary(job.querySelector('.small-0-2-90'))
    }));

    function filerJobsResults(listedJobs) {
        salary_range = salary_range.map(s => {
            return stringToNumberSalary(s);
        })
        let min_salary = Math.min(...salary_range);
        let max_salary = Math.max(...salary_range);
        console.log(min_salary, max_salary);

        let jobsByCountries;

        COUNTRIES.forEach(country => {
            domObject.innerHTML += '<h2>dd</h2>';
            jobsByCountries = listedJobs.filter((job) => job.position.toLowerCase().includes(country.toLowerCase()));
            for (var i = min_salary; i <= max_salary; i += 5000) {
                let max = i + 5000;
                console.log('Rango Salarial: $', i, ' - $', max);
                let test = jobsByCountries.filter((job) => stringToNumberSalary(job.salary[0]) >= i && stringToNumberSalary(job.salary[1]) <= max);
                console.log(test);
            }

        })


    }

    filerJobsResults(listedJobs);

}

