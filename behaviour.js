const formulario = $("#formulario"); //guarda TODO el FORMULARIO en una constante
const inputs = $('#formulario input'); //guarda TODAS las INPUTS dentro del formulario
const expresiones = {
  nombre: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apePaterno:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaterno:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  curp: /^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/,
  correo: /^([a-záéíóúñüA-ZÁÉÍÓÚÑÜ0-9.\-_/\\]+@\w+(\.\w+)+)$/,
  nombreDH: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apePaternoDH:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaternoDH:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  curpDH:/^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/,
  telFijo:/^[0-9]{10}$/,
  telCel:/^[0-9]{10}$/,
  nombreCon: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apePaternoCon:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaternoCon:/^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  curpCon:/^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/,
  telTrabajoCon:/^[0-9]{10}$/

}

const campos = {
  nombre: false,
  apePaterno:false,
  apeMaterno:false,
  curp: false,
  correo: false,
  nombreDH: false,
  apePaternoDH:false,
  apeMaternoDH:false,
  curpDH:false,
  telFijo:false,
  telCel:false,
  nombreCon:false,
  apePaternoCon:false,
  apeMaternoCon:false,
  curpCon:false,
  telTrabajoCon:false
}

$(function() {
  formulario.submit(function(event) {
    event.preventDefault();
    if(campos.apePaterno && campos.apeMaterno && campos.nombre && campos.curp && campos.correo
    && campos.nombreDH && campos.apePaternoDH && campos.apeMaternoDH && campos.curpDH &&
    campos.telFijo && campos.telCel){
      formulario[0].reset();
      $(".mensajeExito").addClass("mensajeExito-Activo");
      setTimeout(function(){
        $(".mensajeExito").hide();
      }, 2000);

      $("div i").each(function(icono){
        icono.removeClass("fa-check-circle");
        icono.addClass("formularioValidacion");
      });
    }else{
      $(".formularioMensajeError").addClass("formularioMensajeError-Activo")
    }

  });

  $('.datepicker').datepicker({//materialize CALENDARIO
  minDate: new Date(2015, 5, 14),
  autoClose: true
  });
  $('select').formSelect(); //materialize SELECT
  $('#fechaNacimiento').on('change', calcularEdad);

  $('#datosCon').hide();//MOSTRAR O NO LOS DATOS DEL CONYUGE
    inputs.on('change', function() {
      if ($('.no').prop('checked')) {
        $('#datosCon').hide();
      } else {
        $('#datosCon').show();
      }
    });

  inputs.each(function() {
    $(this).keyup(validarFormulario); //cada que dejamos de presionar una tecla
    $(this).blur(validarFormulario); //cada que hacemos click en cualquier parte de la pag
  });



});


function validarFormulario(e) {
  console.log(e.target.value);
  switch (e.target.name) {
    // validar datos del niño
    case "apePaterno":
      validarCampo(expresiones.apePaterno, e.target, e.target.name);
      break;
    case "apeMaterno":
      validarCampo(expresiones.apeMaterno, e.target, e.target.name);
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, e.target.name);
      break;
    case "curp":
      validarCampo(expresiones.curp, e.target, e.target.name);
      break;
    case "apePaternoDH":
      validarCampo(expresiones.apePaternoDH, e.target, e.target.name);
      break;
    case "apeMaternoDH":
      validarCampo(expresiones.apeMaternoDH, e.target, e.target.name);
      break;
    case "nombreDH":
      validarCampo(expresiones.nombreDH, e.target, e.target.name);
      break;
    case "curpDH":
      validarCampo(expresiones.curpDH, e.target, e.target.name);
      break;
    case "telFijo":
      validarCampo(expresiones.telFijo, e.target, e.target.name);
      break;
    case "telCel":
      validarCampo(expresiones.telCel, e.target, e.target.name);
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, e.target.name);
      break;
    case "apePaternoCon":
      validarCampo(expresiones.apePaternoCon, e.target, e.target.name);
    break;
    case "apeMaternoCon":
      validarCampo(expresiones.apeMaternoCon, e.target, e.target.name);
    break;
    case "nombreCon":
      validarCampo(expresiones.nombreCon, e.target, e.target.name);
    break;
    case "telTrabajoCon":
      validarCampo(expresiones.telTrabajoCon, e.target, e.target.name);
    break;
    case "curpCon":
      validarCampo(expresiones.curpCon, e.target, e.target.name);
    break;
  }
}

function validarCampo(expresion, input, campo) {
  if (expresion.test(input.value)) { //si la expresion regular se cumple
    $(`.grupo_${campo}`).removeClass("incorrecto");
    $(`.grupo_${campo}`).addClass("correcto");
    $(`.grupo_${campo}`).addClass("fa-check-circle");
    $(`.grupo_${campo}`).removeClass("fa-times-circle");
    $(`#campo_${campo} p`).hide()
    campos[campo] = true;

  } else { //si no se cumple la expresion regular
    $(`.grupo_${campo}`).addClass("incorrecto");
    $(`.grupo_${campo}`).removeClass("correcto");
    $(`.grupo_${campo}`).addClass("fa-times-circle");
    $(`.grupo_${campo}`).removeClass("fa-check-circle");
    $(`#campo_${campo} p`).show()
    campos[campo] = false;
  }
}

function calcularEdad() {
  fecha = $(this).val();
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  $('#edad').val(edad);

  if (m < 0) {
    m += 12;
  }
  $('#meses').val(m);
}
