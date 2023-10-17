const primerArray = Array();
const segundoArray = Array();
let nombre = prompt("Escribe un nombre, escribe fin para terminar");
if(nombre !== "fin"){
    primerArray.push(nombre);
    segundoArray.push(nombre.length);
}
do{
    nombre = prompt("Escribe un nombre, escribe fin para terminar");
    if(nombre !== "fin"){
    primerArray.push(nombre);
    segundoArray.push(nombre.length);
    }
}while(nombre !== "fin")

for(let i = 0; i<primerArray.length; i++){
    document.write(`[${primerArray[i]}]`);
    document.write(`[${segundoArray[i]}]`);
    document.write("<br>")
}


