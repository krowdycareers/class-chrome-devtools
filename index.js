const buttonElement = document.getElementById('procesar');



buttonElement.addEventListener('click', ()=>{
    const datos = document.querySelectorAll('div[class*=similarJob]');


    const paises = ['PERU','COLOMBIA','CHILE','MEXICO']

    const datosArray = [...datos];
        
    let TrabajoDatos = datosArray.map(el=>{return [
            el.querySelector('p').innerText,
            el.querySelector("[id*=vacante_similar_salario]").innerText
        ]
    })      

        
   paises.forEach(pais => {
    console.log(TrabajoDatos.filter((el) => { return el[0].includes(pais) }))
   });

});