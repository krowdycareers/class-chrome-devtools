const button = document.getElementById("Procesar");

button.addEventListener("click",()=>{



    const datos= document.querySelectorAll('div[class*=similarJob]')
    const datosArray=[...datos]
    const filtro = datosArray.map(el=> { return { title : el.querySelector('a').innerText, salary: el.querySelector("[id*=vacante_similar_salario]").innerText}})



    let filtrado =datosArray.map(el=> { 
        
        let rangoStr =el.querySelector("[id*=vacante_similar_salario]").innerText
        let rango = Number( rangoStr.replace(/[^0-9]/g,""))


       
        if(el.querySelector('a').innerText.indexOf("PERU")>0)
        {
            return { title : el.querySelector('a').innerText, 
            salary: el.querySelector("[id*=vacante_similar_salario]").innerText,
            pais : 'PERU',
            nro : 1,
            minimo : rango
            
        }
        }
        else if (el.querySelector('a').innerText.indexOf("MEXICO")>0)
        {
            return { title : el.querySelector('a').innerText, 
            salary: el.querySelector("[id*=vacante_similar_salario]").innerText,
            pais : 'MEXICO',
            nro : 2,
            minimo : rango 
        }
        }
        else if (el.querySelector('a').innerText.indexOf("CHILE")>0)
        {
            return { title : el.querySelector('a').innerText, 
            salary: el.querySelector("[id*=vacante_similar_salario]").innerText,
            pais : 'CHILE',
            nro : 3,
            minimo : rango 

        }
        }
        else
        {
            return { title : el.querySelector('a').innerText, 
            salary: el.querySelector("[id*=vacante_similar_salario]").innerText,
            pais : 'OTRO',
            nro : 4,
            minimo : rango 
        }
        }
       
    
    })
  


    const result = filtrado.sort((a, b) => a.nro - b.nro || b.minimo- a.minimo)  

   

    result 
 
    let paisActual="" 
     
    let jsonText ='[' 
    result.forEach(function(res) {

        if((paisActual != res.pais) &&((res.pais !="OTRO" )))
        {
            jsonText +='{ "Pais": "'+ res.pais +'"'
            paisActual=res.pais;

            let rangoActual=""
            jsonText +=', "Rango":['  
            result.forEach(function(resRango) {

                if((rangoActual != resRango.minimo) && (resRango.pais == paisActual))
                {
                    jsonText +='{  "'+ resRango.salary +'": ['
                    rangoActual=resRango.minimo;

                    
                    result.forEach(function(restOferta) {

                        if((restOferta.minimo == rangoActual ) && (restOferta.pais == paisActual))
                        {
                           
                            jsonText +='{ "Titulo": "'+ restOferta.title +'"'
                            
                            jsonText +=' },'
                        }
                 
                    });    
                    
                    jsonText = jsonText.substring(0, jsonText.length-1)
                    jsonText +=']'


                    jsonText +=' },'
                }
         
            });
            jsonText = jsonText.substring(0, jsonText.length-1)
            jsonText +=']'
            jsonText +=' },'
        }
 
    });
    jsonText = jsonText.substring(0, jsonText.length-1)
    jsonText +=']'
    console.log(jsonText);
    //const datoSalario = datos.queryselector("[id*=vacante_similar_salarios]").innerText
    //console.log(JSON.stringify(jsonText));
    alert(jsonText);
});