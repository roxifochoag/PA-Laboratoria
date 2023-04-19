var segundos = 10;
var cronometro;

function iniciarCronometro() {
  cronometro = setInterval(actualizarCronometro, 1000);
}

function actualizarCronometro() {
  segundos--;
  if (segundos <= 0) {
    clearInterval(cronometro);
    alert("Tiempo agotado");
  }
  document.getElementById("cronometro").innerHTML = formatTiempo(segundos);
}

function formatTiempo(tiempo) {
  if (tiempo < 10) {
    tiempo = "0" + tiempo;
  }
  return tiempo;
}



function validar() {
  var RC = ["a", "b", "a"];
  var respuestasUsuario = [];
  var cantidadCorrectas = 0;

  var preguntas = document.getElementsByTagName("input");
  for (var i = 0; i < preguntas.length; i++) {
    if (preguntas[i].checked) {
      respuestasUsuario.push(preguntas[i].value);
    }
  }

  var aciertos = 0;
  for (var i = 0; i < RC.length; i++) {
    if (respuestasUsuario[i] === RC[i]) {
      aciertos++;
      alert("Aciertos: " + aciertos);
    }
  }

}


