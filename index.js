const buttonElement = document.getElementById('procesar');
buttonElement.addEventListener("click", ()=>{
    let empleos = document .querySelectorAll('div[class*=carousel] > div [class*=item-] ');
    empleos = [...empleos];
    let listaEmpleos = empleos.map(element=>element.innerText);
    const paises = ['MEXICO', 'PERU', 'COLOMBIA', 'CHILE'];
    const rangos = ['$1,000 - $2,000 Mensual','$2,000 - $3,000 Mensual','$4,000 - $6,000 Mensual','$9,000 - $11,000 Mensual','$12,000 - $13,000 Mensual','Salario no mostrado.'];
    const empleosPorPais = {};
    paises.forEach(pais => {
    const listaEmpleosPais=listaEmpleos.filter(element => element.includes(pais));
    const empleosPorRangoPais = {};
    rangos.forEach(rango => {
        const rangoPais= listaEmpleosPais.filter(element => element.includes(rango));
        if(rangoPais.length>0){
            empleosPorRangoPais[rango] = rangoPais;
        }
        });
    empleosPorPais[pais] = empleosPorRangoPais;
    });
    const listaEmpleosPaisOtro = listaEmpleos.filter(element => paises.some(pais => element.includes(pais)) === false);
    const empleosPorRangoPaisOtro = {};
    rangos.forEach(rango => {
        const rangoPais = listaEmpleosPaisOtro.filter(element => element.includes(rango));
        if(rangoPais.length>0){
            empleosPorRangoPaisOtro[rango] = rangoPais;
        }
        });
    empleosPorPais['otros'] = empleosPorRangoPaisOtro;
    

    console.log(empleosPorPais);
});