//DECLARAR LA VARIABLE PUNTAJE 
let puntaje;
puntaje=0;

iniciar=function(){
    console.log("llamando a iniciar");
    puntaje = 0;
    console.log("el valor ha sido cambiado");
}

cambiar=function(){
    puntaje = 1000;
}

mostrar=function(){
    alert("EL PUNTAJE ES:"+puntaje);
    
}

incrementaruno=function(){
    puntaje = puntaje +1;
}

restaruno=function(){
    puntaje = puntaje -1;
}

sumardiez=function(){
    puntaje = puntaje +10;
}

restardiez=function(){
    puntaje = puntaje -10;
}