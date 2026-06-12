const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,}$/;
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexClave = /^.{6,}$/;

    if (!regexNombre.test(nombre)) {
        mensaje.innerHTML = "Nombre inválido";
        return;
    }

    if (!regexCorreo.test(correo)) {
        mensaje.innerHTML = "Correo inválido";
        return;
    }

    if (!regexClave.test(clave)) {
        mensaje.innerHTML = "Mínimo 6 caracteres";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
        nombre,
        correo
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    window.location = "usuarios.html";
});