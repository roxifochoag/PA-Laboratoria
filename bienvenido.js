
const bienvenidoForm = document.querySelector("form");

bienvenidoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  guardarUsuario(username);
  window.location.href = "inicio.html"; // redirigir a otra página
});


    function guardarUsuario(username) {
              localStorage.setItem("username", username);
}

const usuarioGuardado = localStorage.getItem("username");
