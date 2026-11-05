const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (username.value.trim() === "") {
        message.textContent = "Escribe tu usuario.";
        return;
    }

    if (email.validity.valid === false) {
        message.textContent = "Escribe un email válido.";
        return;
    }

    message.textContent = "Formulario enviado correctamente.";
});