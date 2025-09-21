saludar=function(){ 
    //recuperarel valorde la caja de texto 
    let nombre=recuperarTexto("txtNombre");
    // recuperar valor apellido 
    let apellido=recuperarTexto("txtApellido");

}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    
}

