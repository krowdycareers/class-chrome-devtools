let similarJob=[...document.querySelectorAll(".similarJob-0-2-766")]

function filter(element) {
    let ad = similarJob.map(el=>{
        return {
            title: el.querySelector('a').innerText,
            url: el.querySelector('a').href
        }
    }).filter((el)=>{return el.title.includes(element)})
    return {
        country: element,
        quantity: ad.length,
        ads: ad
    }
}
const countries=["PERU","MEXICO","CHILE"]

console.log(countries.map(filter))