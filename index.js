const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'user' && password === 'password') {
    alert('Inicio de sesión correcto');
    window.location.href = 'bienvenido.html';
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});