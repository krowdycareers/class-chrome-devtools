const countries = ['PERU', 'COLOMBIA', 'CHILE', 'MEXICO'];
const cards = Array.from(document.querySelectorAll('.similarJob-0-2-766'));
let filterByCountry = [];

const ads = cards.map( ad => ({
    title: ad.querySelector('a').innerText,
    url: ad.querySelector('a').href,
    salary: ad.querySelector('p.bottomSmall-0-2-118').innerText
}))


for (let i = 0; i < countries.length; i++){
    const filteredAds = ads.filter( el => el.title.includes(countries[i]) );
    filterByCountry[i] = {
        country: countries[i],
        ads: filteredAds,
        quantity: filteredAds.length,
        salaryRange: salaryRange(filteredAds)
    }
}

function salaryRange(filteredAds){
    const salariesArray = [];
    filteredAds.map( ad => {
        const salaries = ad.salary.split(" - ");
        salariesArray.push(parseInt(salaries[0]?.replace(/[^0-9]+/g, "")));
        salariesArray.push(parseInt(salaries[1]?.replace(/[^0-9]+/g, "")));
    })

    const min = Math.min(...salariesArray.filter( x => !isNaN(x) ));
    const max = Math.max(...salariesArray.filter( x => !isNaN(x) ));

    return `$${min.toLocaleString('en')} - $${max.toLocaleString('en')} Mensual`;
}

console.log(filterByCountry);