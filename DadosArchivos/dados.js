jugar=function(){
   let aleatorio;
   let texto;
   aleatorio=lanzarDados();
   cambiarTexto("lblNumero",aleatorio);
   if(aleatorio>3){
     cambiarTexto("lbResultado","ES MAYOR A 3");
     cambiarTexto("lbResultado","GANASTE");
   }else{
      cambiarTexto("lbResultado","ES MENOR A 3");
      cambiarTexto("lbResultado","NO ES TU DIA");
   } 
}

lanzarDados=function(){
let aleatorio;
let numeroMultiplicado;
let numeroEntero;
let valorDado;
aleatorio=Math.random();
numeroMultiplicado=aleatorio*6;

numeroEntero=parseInt(numeroMultiplicado);

valorDado=numeroEntero+1;

return valorDado;
}