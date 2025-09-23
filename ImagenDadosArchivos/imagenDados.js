let puntos=0;
let lanzamientos=5;
let texto;

jugar=function(){

     if (lanzamientos <= 0){
        limpiar();

    }

    let resultado;
    resultado=lanzarDado();
    console.log(resultado);  
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
    modificarTexto(resultado);
}

mostrarCara=function(numero){
    if (numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }

}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    if (lanzamientos == 0){
        if (puntos>20){
     cambiarTexto("lbResultado","ES MAYOR A 20");
     cambiarTexto("lbResultado","GANASTE");
   }else{
      cambiarTexto("lbResultado","ES MENOR A 20");
      cambiarTexto("lbResultado","PERDISTE");
   }  
    }

}

modificarLanzamientos=function(numero){
    lanzamientos=lanzamientos-1;

    if (lanzamientos < 0){
        lanzamientos = 0; //evita negativos 
        limpiar();
        return;
    }
    cambiarTexto("lblLanzamientos",lanzamientos);
     if (lanzamientos == 0){
     cambiarTexto("lbResultado","ES IGUAL A 0");
     cambiarTexto("lbResultado","GAMEOVER");
   }
      
   
}

limpiar=function(){
    puntos = 0;
    lanzamientos = 5; //  ahora vuelve a 5 como pediste
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lbResultado", " Juego reiniciado");
    cambiarImagen("imgDado", ""); // borra el dado
}

lanzarDado=function(){
    return Math.floor(Math.random() * 6) + 1;
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}