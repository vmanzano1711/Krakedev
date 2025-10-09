let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerAreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
            notaR=notas[indice];
             console.log(notaR);
    }
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);

}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for (let i=0;i<notas.length;i++){
        sumaNotas=sumaNotas+notas[i];
    }
    if(notas.length>0){
        promedio=sumaNotas/notas.length;
    }else {
        promedio=0;
    }
    return promedio;    
}

ejecutarPromedio=function(){
    let resultado =calcularPromedio();
    document.getElementById("lblPromedio").innerText="Promedio"+ resultado;
}

