fechaInicio=document.getElementById("fechaInicio");
fechaFin=document.getElementById("fechaFin");
boton=document.getElementById("boton");
textArea=document.getElementById("textArea");

boton.addEventListener("click", function(){
    let fechaInicioDate= new Date(fechaInicio.value);
    let fechaFinDate= new Date(fechaFin.value);

    let diferencia = fechaFinDate - fechaInicioDate;

    let años = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    let meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    let dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    textArea.textContent= `Han pasado ${años} años, ${meses} meses y ${dias} dias`;
    
});
