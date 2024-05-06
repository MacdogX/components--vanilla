// Obtener el botón que abre el modal
var modalBtn = document.getElementById("modalBtn");

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Obtener el formulario de inicio de sesión
var loginForm = document.getElementById("loginForm");

// Agregar un evento de escucha para el envío del formulario
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("errorMessage").style.display = "block";
        return;
    }

    // Aquí puedes agregar tu lógica de validación de usuario y contraseña

    // Por ahora, solo mostramos un mensaje de éxito
    alert("Usuario y contraseña válidos. ¡Bienvenido!");
    location.href ="view/ingreso.html";
    modal.style.display = "none";
});