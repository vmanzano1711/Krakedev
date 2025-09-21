saludar=function(){ 
    //recuperarel valorde la caja de texto 
    let nombre=recuperarTexto("txtNombre");
    // recuperar valor apellido 
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenid@"+" "+nombre+" "+apellido;
    
    mostrarTexto("lblResultado", mensajeBienvenida);

    mostrarImagen("imgSaludo","./imagenes/yagane.gif");

    mostrarTextoEnCaja("txtNombre","");
}



