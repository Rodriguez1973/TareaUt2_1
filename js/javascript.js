/*Captura el evento de cambio en la <select id="operacion">*/
document.getElementById('operacion').onchange = function () {
  realizarConversion();
}

/*Captura el evento de onclick en la <p id="cerrar_navegador">*/
document.getElementById("cerrar_navegador").onclick = function () {
  window.close();
}

/*Función que realiza la conversión del tipo de dato*/
function realizarConversion() {
  let numero = document.getElementById('numero').value;
  let resultado = "";
  //Existe contenido en el input con id="numero".
  if (numero) {
    //Si se puede convertir a un número.
    if (!isNaN(numero)) {
      let opcion = document.getElementById('operacion').value;
      if (opcion != "no_convertir") {
        resultado = cambiaTipo(numero, opcion);
      }
    } else {
      resultado = 'La conversión no es posible';
    }
    document.getElementById('resultado').value = resultado;
  }
}

//Función que devuelve el valor convertido.
function cambiaTipo(numero, opcion) {
  let res = NaN
  switch (opcion) {
    case 'dec_bin':
      res = parseInt(numero).toString(2);
      break
    case 'dec_oct':
      res = parseInt(numero).toString(8);
      break
    case 'dec_hex':
      res = parseInt(numero).toString(16);
      break
    case 'bin_dec':
      res = parseInt(numero, 2);
      break
    case 'oct_dec':
      res = parseInt(numero, 8);
      break
    case 'hex_dec':
      res = parseInt(numero, 16);
      break
    default:
      break
  }
  return res;
}
