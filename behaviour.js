const formulario = $("#formulario"); //guarda TODO el FORMULARIO en una constante
const inputs = $('#formulario input'); //guarda TODAS las INPUTS dentro del formulario
const expresiones = {
  //Datos del niño
  boleta: /^(\d{10}|(PE|PP)\d{8})$/,
  nombre: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apePaterno: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaterno: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  curp: /^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/,
  //Datos del derecho habiente
  apePaternoDH: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaternoDH: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  nombreDH: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  curpDH: /^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/,
  calle: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,4})$/,
  noInt: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,2})$/,
  noExt: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,2})$/,
  colonia: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9-_.]+\s?){1,4})$/,
  municipio: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ]+\s?){1,5})$/,
  cp: /^\d{5}$/,
  telFijo: /^[0-9]{10}$/,
  telCel: /^[0-9]{10}$/,
  correo: /^([a-záéíóúñüA-ZÁÉÍÓÚÑÜ0-9.\-_/\\]+@\w+(\.\w+)+)$/,
  puesto: /^([A-ZÁÉÍÓÑÚa-záéíóúñ]+\s?)+$/,
  saldo: /^\d{4,5}$/,
  noEmp: /^\d{5,7}$/,
  ext: /^\d{5}$/,
  //Datos del conyuge
  apePaternoCon: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  apeMaternoCon: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  nombreCon: /^((([A-ZÁÉÍÓÚÑ]{1})[a-záéíóúñ]+\s?){1,3})$/,
  trabajoCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9-_]+\s?){1,5})$/,
  telTrabajoCon: /^[0-9]{10}$/,
  calleTraCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,4})$/,
  noExtCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,2})$/,
  noIntCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9]+\s?){1,2})$/,
  coloniaCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ0-9-_.]+\s?){1,4})$/,
  municipioCon: /^(([A-ZÁÉÍÓÑÚa-záéíóúñ]+\s?){1,5})$/,
  extensionCon: /^\d{4,5}$/,
  curpCon: /^([A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9]{2})$/
}

const campos = {
  //Datos del niño
  boleta: false,
  nombre: false,
  apePaterno: false,
  apeMaterno: false,
  curp: false,
  //Datos del derecho habiente
  apePaternoDH: false,
  apeMaternoDH: false,
  nombreDH: false,
  curpDH: false,
  calle: false,
  noInt: false,
  noExt: false,
  colonia: false,
  municipio: false,
  cp: false,
  telFijo: false,
  telCel: false,
  correo: false,
  puesto: false,
  saldo: false,
  noEmp: false,
  ext: false,
  //datos del conyuge
  apePaternoCon: false,
  apeMaternoCon: false,
  nombreCon: false,
  trabajoCon: false,
  telTrabajoCon: false,
  calleTraCon: false,
  noExtCon: false,
  noIntCon: false,
  coloniaCon: false,
  municipioCon: false,
  extensionCon: false,
  curpCon: false
}

$(function() {
  formulario.submit(function(event) {
    event.preventDefault();
    if ($('.no').prop('checked')) {
      if (campos.boleta && campos.nombre && campos.apePaterno && campos.apeMaterno && campos.curp &&
        campos.apePaternoDH && campos.apeMaternoDH && campos.nombreDH && campos.curpDH && campos.calle && campos.noInt &&
        campos.noExt && campos.colonia && campos.municipio && campos.cp && campos.telFijo && campos.telCel &&
        campos.correo && campos.puesto && campos.saldo && campos.noEmp && campos.ext &&
        ($("#cendi").val() !== '') && ($("#entidad").val() !== '') && ($("#ocupacion").val() !== '') &&
        ($("#adscripcion").val() !== '') && ($("#horario").val() !== '') &&
        ($("#file").val() !== '')) {
        alertaVerificaDatos();
        deSoloLectura(); //campos solo se pueden leer no modificar
        inicioDePagina();
        $(".botonEnviar").hide();
        $(".botonesConfirmacion").addClass("botonesConfirmacion-Activos");
        modificarFormulario();
        enviarFormulario();
      } else {
        inicioDePagina();
        $(".formularioMensajeError").addClass("formularioMensajeError-Activo");
        setTimeout(function() {
          $(".formularioMensajeError").removeClass("formularioMensajeError-Activo");
        }, 4000);

      }
    } else {
      if (campos.boleta && campos.nombre && campos.apePaterno && campos.apeMaterno && campos.curp &&
        campos.apePaternoDH && campos.apeMaternoDH && campos.nombreDH && campos.curpDH && campos.calle && campos.noInt &&
        campos.noExt && campos.colonia && campos.municipio && campos.cp && campos.telFijo && campos.telCel &&
        campos.correo && campos.puesto && campos.saldo && campos.noEmp && campos.ext && campos.apePaternoCon &&
        campos.apeMaternoCon && campos.nombreCon && campos.trabajoCon && campos.telTrabajoCon && campos.calleTraCon &&
        campos.noExtCon && campos.noIntCon && campos.coloniaCon && campos.municipioCon && campos.extensionCon &&
        campos.curpCon && ($("#cendi").val() !== '') && ($("#entidad").val() !== '') && ($("#ocupacion").val() !== '') &&
        ($("#adscripcion").val() !== '') && ($("#horario").val() !== '') && ($("#file").val() !== '')) {
        alertaVerificaDatos();
        deSoloLectura(); //campos solo se pueden leer no modificar
        inicioDePagina(); //nos lleva al inicio de la pagina
        $(".botonEnviar").hide();
        $(".botonesConfirmacion").addClass("botonesConfirmacion-Activos");
        modificarFormulario();
        enviarFormulario();
      } else {
        inicioDePagina();
        $(".formularioMensajeError").addClass("formularioMensajeError-Activo");
        setTimeout(function() {
          $(".formularioMensajeError").removeClass("formularioMensajeError-Activo");
        }, 4000);
      }
    }
  });

  $('.datepicker').datepicker({ //materialize CALENDARIO
    minDate: new Date(2015, 5, 14),
    maxDate: new Date(2022, 5, 10),
    autoClose: true
  });
  $('select').formSelect(); //materialize SELECT
  $('#fechaNacimiento').on('change', calcularEdad);

  $('#datosCon').hide(); //MOSTRAR O NO LOS DATOS DEL CONYUGE
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
    case "boleta":
      validarCampo(expresiones.boleta, e.target, e.target.name);
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, e.target.name);
      break;
    case "apePaterno":
      validarCampo(expresiones.apePaterno, e.target, e.target.name);
      break;
    case "apeMaterno":
      validarCampo(expresiones.apeMaterno, e.target, e.target.name);
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
    case "calle":
      validarCampo(expresiones.calle, e.target, e.target.name);
      break;
    case "noInt":
      validarCampo(expresiones.noInt, e.target, e.target.name);
      break;
    case "noExt":
      validarCampo(expresiones.noExt, e.target, e.target.name);
      break;
    case "colonia":
      validarCampo(expresiones.colonia, e.target, e.target.name);
      break;
    case "municipio":
      validarCampo(expresiones.municipio, e.target, e.target.name);
      break;
    case "cp":
      validarCampo(expresiones.cp, e.target, e.target.name);
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
    case "puesto":
      validarCampo(expresiones.puesto, e.target, e.target.name);
      break;
    case "saldo":
      validarCampo(expresiones.saldo, e.target, e.target.name);
      break;
    case "noEmp":
      validarCampo(expresiones.noEmp, e.target, e.target.name);
      break;
    case "ext":
      validarCampo(expresiones.ext, e.target, e.target.name);
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
    case "trabajoCon":
      validarCampo(expresiones.trabajoCon, e.target, e.target.name);
      break;
    case "calleTraCon":
      validarCampo(expresiones.calleTraCon, e.target, e.target.name);
      break;
    case "telTrabajoCon":
      validarCampo(expresiones.telTrabajoCon, e.target, e.target.name);
      break;
    case "noExtCon":
      validarCampo(expresiones.noExtCon, e.target, e.target.name);
      break;
    case "noIntCon":
      validarCampo(expresiones.noIntCon, e.target, e.target.name);
      break;
    case "coloniaCon":
      validarCampo(expresiones.coloniaCon, e.target, e.target.name);
      break;
    case "municipioCon":
      validarCampo(expresiones.municipioCon, e.target, e.target.name);
      break;
    case "extensionCon":
      validarCampo(expresiones.extensionCon, e.target, e.target.name);
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

function enviaBaseDeDatos() {
  $(".mensajeExito").addClass("mensajeExito-Activo");
  formulario.off(); //desactiva event.preventDefault();
  formulario.submit(); //Permite enviar los datos del formulario a la base de datos
  setTimeout(function() {
    $(".mensajeExito").hide();
    formulario[0].reset();
  }, 3000);

  $(".fas").remove(".correcto, .fa-check-circle");

}

function deSoloLectura() {
  inputs.each(function() {
    $(this).prop("disabled", true);
  });
}

function modificarInputs() {
  inputs.each(function() {
    $(this).prop("disabled", false);
  });
  // Enable #x
  $("select").each(function() {
    prop("disabled", false);
  });
}

function inicioDePagina() {
  jQuery('body,html').animate({ //hasta arriba de la pagina
    scrollTop: '0px'
  }, 0);
}

function finalDePagina() {
  jQuery('body,html').animate({
    scrollTop: $(document).height()
  }, 800);
}

function modificarFormulario() {
  $("#Modificar").on("mouseleave", function() {
    event.preventDefault();
    alert("Ahora puedes modificar");
    inicioDePagina();
    modificarInputs();
  });
}

function enviarFormulario() {
  $("#Enviar").click(function() {
    $(".botonesConfirmacion").hide();
    enviaBaseDeDatos();
  });
}

function alertaVerificaDatos() {
  alert("Hola " + $("#nombreDH").val() + " " + $("#apePaternoDH").val() + " " +
    $("#apeMaternoDH").val() + " verifica que los datos que ingresaste son correctos:");
}
