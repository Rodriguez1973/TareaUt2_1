/*Captura el evento de cambio en la <select id="operacion">*/
//document.getElementById('operacion').onchange = function () {
//  realizarConversion();
//}
operacion.onchange = function () {
  realizarConversion()
}

/*Captura el evento de cambio en la <input id="numero">*/
//document.getElementById('numero').onchange = function () {
//if(numero.value!=""){
//  realizarConversion()
//}
//}
numero.onchange = function () {
  if(numero.value!=""){
    realizarConversion()
  }
}

numero.onfocus=function(){
  numero.select();
}

/*Captura el evento de onclick en la <p id="cerrar_navegador">*/
// document.getElementById("cerrar_navegador").onclick = function () {
//   window.close();
// }
cerrar_navegador.onclick = function () {
  window.close()
}

/*Función que realiza la conversión del tipo de dato*/
function realizarConversion() {
  //let num = document.getElementById('numero').value;
  let num = numero.value.toUpperCase()
  let result = ''
  //Existe contenido en el input con id="num".
  if (num) {
    //let opcion = document.getElementById('operacion').value;
    let opcion = operacion.value
    //Si se puede convertir a un número.
    if (validarCadena(num, opcion)) {
      result = cambiaTipo(num, opcion)
    } else {
      result = 'La cadena no se puede convertir.'
    }
    //document.getElementById('resultado').value = result;
    resultado.value = result
  }
}

//Función que devuelve el valor convertido.
function cambiaTipo(num, opcion) {
  let result = ''
  switch (opcion) {
    case 'dec_bin':
      result = parseInt(num).toString(2)
      break
    case 'dec_oct':
      result = parseInt(num).toString(8)
      break
    case 'dec_hex':
      result = parseInt(num).toString(16)
      break
    case 'bin_dec':
      result = parseInt(num, 2)
      break
    case 'oct_dec':
      result = parseInt(num, 8)
      break
    case 'hex_dec':
      result = parseInt(num, 16)
      break
    default:
      break
  }
  return result
}

/*Función que realiza la validación de la cadena antes de la conversión.*/
function validarCadena(num, opcion) {
  let valido = true;
  switch (opcion) {
    //Opciones donde es necesario validar si es una cadena válida para un decimal.
    case 'dec_bin':
    case 'dec_oct':
    case 'dec_hex':
      for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) < '0' || num.charAt(i) > '9') {
          valido = false;
          break
        }
      }
      break
    //Opcion donde es necesario validar si es una cadena válida para un binario.
    case 'bin_dec':
      for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) < '0' || num.charAt(i) > '1') {
          valido = false
          break
        }
      }
      break
    //Opcion donde es necesario validar si es una cadena válida para un octal.
    case 'oct_dec':
      for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) < '0' || num.charAt(i) > '7') {
          valido = false
          break
        }
      }
      break
    //Opcion donde es necesario validar si es una cadena válida para un hexadecimaloctal.
    case 'hex_dec':
      for (let i = 0; i < num.length; i++) {
        if (!((num.charAt(i) >= '0' && num.charAt(i) <= '9') || (num.charAt(i) >= 'A' && num.charAt(i) <= 'Z'))) {
          valido = false
          break
        }
      }
      break
    default:
      break
  }
  return valido;
}
