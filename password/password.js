validarPassword=function(password) {
    let errores = "";

    // 1️⃣ Validar longitud
    if (password.length < 8) {
        errores += "Debe tener al menos 8 caracteres.\n";
    }
    if (password.length > 16) {
        errores += "Debe tener máximo 16 caracteres.\n";
    }

    // Variables de control
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
    const caracteresEspeciales = ["*", "-", "_"];

    // 2️⃣ Recorrer cada carácter
    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);

        if (c >= "A" && c <= "Z") {
            tieneMayuscula = true;
        }
        if (c >= "0" && c <= "9") {
            tieneDigito = true;
        }
        if (caracteresEspeciales.includes(c)) {
            tieneEspecial = true;
        }
    }

    // 3️⃣ Validar cada condición
    if (!tieneMayuscula) {
        errores += "Debe contener al menos una letra mayúscula.\n";
    }
    if (!tieneDigito) {
        errores += "Debe contener al menos un número.\n";
    }
    if (!tieneEspecial) {
        errores += "Debe contener al menos un carácter especial (*, -, _).\n";
    }

    // 4️⃣ Retornar errores o cadena vacía
    return errores;
}

ejecutarValidacion=function() {
    let password = document.getElementById("txtPassword").value;
    let resultado = validarPassword(password);

    if (resultado === "") {
        alert("Password Correcto");
    } else {
        alert("Errores:\n" + resultado);
    }
}

