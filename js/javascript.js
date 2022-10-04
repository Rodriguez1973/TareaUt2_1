/*Captura el evento de cambio en la <select id="operacion">*/
//document.getElementById('operacion').onchange = function () {
//  realizarConversion();
//}
operacion.onchange = function () {
  realizarConversion();
}

/*Captura el evento de cambio en la <input id="numero">*/
//document.getElementById('numero').onchange = function () {
//  realizarConversion();
//}
numero.onchange = function () {
  realizarConversion();
}


/*Captura el evento de onclick en la <p id="cerrar_navegador">*/
// document.getElementById("cerrar_navegador").onclick = function () {
//   window.close();
// }
cerrar_navegador.onclick = function () {
  window.close();
}

/*Función que realiza la conversión del tipo de dato*/
function realizarConversion() {
  //let num = document.getElementById('numero').value;
  let num = numero.value;
  let resul = "";
  //Existe contenido en el input con id="num".
  if (num) {
    //Si se puede convertir a un número.
    if (!isNaN(num)) {
      //let opcion = document.getElementById('operacion').value;
      let opcion = operacion.value;
      if (opcion != "no_convertir") {
        resul = cambiaTipo(num, opcion);
      }
    } else {
      resul = 'La conversión no es posible';
    }
    //document.getElementById('resultado').value = resul;
    resultado.value = resul;
  }
}

//Función que devuelve el valor convertido.
function cambiaTipo(num, opcion) {
  let result = 'La conversión no es posible';
  switch (opcion) {
    case 'dec_bin':
      result = parseInt(num).toString(2);
      break
    case 'dec_oct':
      result = parseInt(num).toString(8);
      break
    case 'dec_hex':
      result = parseInt(num).toString(16);
      break
    case 'bin_dec':
      result = parseInt(num, 2);
      break
    case 'oct_dec':
      result = parseInt(num, 8);
      break
    case 'hex_dec':
      result = parseInt(num, 16);
      break
    default:
      break
  }
  return result;
}

/*Función que realiza la validación de la cadena antes de la conversión.*/
function validarCadena()