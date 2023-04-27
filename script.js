// RESULTADO FINAL EN CONSOLE.LOG
    
    
    let dato = []
    let paises
    let similarJob = document.querySelectorAll('[class*=similarJob-')
    
    similarJob = [...similarJob]
    let listaJobs = similarJob.map(el=> {return {title: el.querySelector('[class*=text-]').innerText, price:el.querySelector('[id*=vacante_similar_salario-]').innerText}})

    let paisesEstaticos = ["PERU", "COLOMBIA", "CHILE", "MEXICO"]
    let trabajoOtros
    let trabajoPais
      
    let result = paisesEstaticos.map(pais => {
        trabajoPais = listaJobs.filter(trabajo => trabajo.title.toUpperCase().includes(pais))        
        
        return{
            pais,
            trabajos:trabajoPais
        }
    }).filter(obj => obj.trabajos.length > 0)

    trabajoOtros = listaJobs.filter(trabajo => {
        return !paisesEstaticos.some(pais => trabajo.title.toUpperCase().includes(pais));
      });
    if(trabajoOtros.length > 0){
        result.push({
            pais:"Otros",
            trabajos: trabajoOtros
        })
    }

    console.log(result)

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = JSON.stringify(result,null,2);