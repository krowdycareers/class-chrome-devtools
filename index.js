/*
** Comentario adicional: Se deja la carpeta Reto1 del reto en clase. Se usa python para hacer el scraping y obtener todos los estilos posibles.
* Solo se consideran como paises peru, mexico chile y colombia, los otros son zonas, que por ahora se asumiran como otras zonas 
* Se usan patrones para obtner los datos, tanot del salario, pais y trabajos
* Se hace un reduce, para reducir el array a solo paises.
* se hace un reduce en cada pais para obtener los salarios y trabajos que estos tienen.
* Se imprime el resultado
*/
const trabajos = [...document.querySelectorAll('div.similarJob-0-2-766')]

let contenido = trabajos.map(e=>e.innerText)
contenido = contenido.map(e=>{
    let lista = e.split("\n").filter(e=>e!="");
    lista = lista.slice(0,2);
    return lista
});

const paises= "peru,mexico,chile,colombia".split(",");
const patternPais = /[^(\s)]*$/;
const patternZona = /(\szona(\s|$))/;
const patternMes = /(\sMensual$)/;
contenido = contenido.map(e=>{
    const dictElement = {}
    let job_pais = e[0].toLowerCase()
    const matchPais = job_pais.match(patternPais);
    if(paises.includes(matchPais[0])){
        dictElement['pais'] = matchPais[0].toUpperCase();
        job_pais = job_pais.slice(0,matchPais.index-1)
    }else dictElement['pais'] = 'OTRO';
    const matchZona = job_pais.match(patternZona);
    if(matchZona){
        dictElement['job'] = job_pais.slice(0,matchZona.index);
    }else dictElement['job'] = job_pais;
    const matchMes = e[1].match(patternMes);
    if(matchMes){
        dictElement['salario'] = e[1].slice(0,matchMes.index).replace(/(\$|\s)/g,'');
    }else dictElement['salario'] = "Salario no mostrado";
    return dictElement
})
const contenidoPais = contenido.reduce((prev,curr)=>{
    const index = prev.findIndex(e => e.pais === curr.pais);
    if(index ==-1){
        const dict = {pais:curr.pais,rango:[{salario:curr.salario,job:curr.job}]};
        prev.push(dict);
    }else{
        prev[index].rango.push({salario:curr.salario,job:curr.job });
    }
    return prev;
},[]);
const contenidoRangosPais = contenidoPais.map(e=>{
    const rangos = e.rango.reduce((prev,curr)=>{
        const index = prev.findIndex(r=> r.salario == curr.salario);
        if(index==-1){
            const dict = {salario: curr.salario,jobs:[curr.job]};
            prev.push(dict);
        }else prev[index].jobs.push(curr.job);
        return prev;
    },[]);
    return {pais:e.pais, rangos: rangos};
})
console.log(contenidoRangosPais);
