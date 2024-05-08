

//ANIMACION PARA EL DEZPLEGABLE 
// const btnToggle = document.querySelector('.toggle-btn');
// btnToggle.addEventListener('click', function () {
//     console.log('clik')
//     document.getElementById('sidebar').classList.toggle('active');
//     console.log(document.getElementById('sidebar'))
// });




//VAMOS A CONECTARNOS CON EL BACK-END
// URL de la API
var url = "http://localhost:8080/api/v1/Cliente/";

// Función para listar los médicos
function ListarCliente() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idcliente"]}</td>
                    <td class="text-center align-middle">${result[i]["tipoidentificacion"]}</td>
                    <td class="text-center align-middle">${result[i]["identificacioncliente"]}</td>
                    <td class="text-center align-middle">${result[i]["nombrecliente"]}</td>
                    <td class="text-center align-middle">${result[i]["apellidocliente"]}</td>
                    <td class="text-center align-middle">${result[i]["telefono"]}</td>
                    <td class="text-center align-middle">${result[i]["direccion"]}</td>
                    <td class="text-center align-middle">${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="RegistrarClienteBandera=false;" data-id="${result[i]["idcliente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idcliente"]})" data-id="${result[i]["idcliente"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idcliente"]}"></i>
                    </td>
                `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}

var RegistrarClienteBandera = true;





// Función para registrar un Cliente
function RegistrarCliente() {
    var tipoidentificacion = document.getElementById("tipoidentificacion");
    var identificacioncliente = document.getElementById("identificacioncliente");
    var nombrecliente = document.getElementById("nombrecliente");
    var apellidocliente = document.getElementById("apellidocliente");
    var telefono = document.getElementById("telefono");
    var direccion = document.getElementById("direccion");
    var correo = document.getElementById("correo");
    var ciudad = document.getElementById("ciudad");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validartipoidentificacion(tipoidentificacion) ||
        !validaridentificacioncliente(identificacioncliente) ||
        !validarnombrecliente(nombrecliente) ||
        !validarapellidocliente(apellidocliente) ||
        !validartelefono(telefono) ||
        !validardireccion(direccion) ||
        !validarcorreo(correo) ||
        !validarciudad(ciudad) ||
        !validarestado(estado)) {
        // Mostrar una alerta indicando que todos los campos son obligatorios
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    var forData = {
        "tipoidentificacion": tipoidentificacion.value,
        "identificacioncliente": identificacioncliente.value,
        "nombrecliente": nombrecliente.value,
        "apellidocliente": apellidocliente.value,
        "telefono": telefono.value,
        "direccion": direccion.value,
        "ciudad": correo.value,
        "ciudad": ciudad.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (RegistrarClienteBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idcliente;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Guardado con éxito",
            icon: "success"
        });
    }

    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (response) {
                Swal.fire({
                    title: "Éxito",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                }).then(function () {
                    // Aquí puedes agregar más acciones después del registro exitoso
                    $('#exampleModal').modal('hide');
                    ListarCliente();
                });
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Error",
                    text: "¡El número de documento ya se encuentra registrado!",
                    icon: "error"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
};



function validarcamponombretipo() {
    var tipoidentificacion = document.getElementById("tipoidentificacion");
    return validartipoidentificacion(tipoidentificacion);
}

function validartipoidentificacion(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función para validar campos
// Función Documento Identidad
function validarCampos() {
    var identificacioncliente = document.getElementById("identificacioncliente");
    return validaridentificacioncliente(identificacioncliente);
}

// Función para validar el documento de identidad
function validaridentificacioncliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 5 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}



// Función nombrecliente

function validarcamponombrecliente() {
    var primerNombre = document.getElementById("nombrecliente");
    return validarnombrecliente(nombrecliente);
}

function validarnombrecliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función apellidocliente

function validarcampoapellidocliente() {
    var apellidocliente = document.getElementById("apellidocliente");
    return validarapellidocliente(apellidocliente);
}

function validarapellidocliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Telefono

function validarcampotelefono() {
    var telefono = document.getElementById("telefono");
    return validartelefono(telefono);
}

function validartelefono(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función direccion

function validarcampodireccion() {
    var direccion = document.getElementById("direccion");
    return validardireccion(direccion);
}

function validardireccion(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 155) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

function validarCamposCorreo() {
    var correo = document.getElementById("correo");
    return validarcorreo(correo);
}

function validarcorreo(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

function validarCamposciuda() {
    var ciudad = document.getElementById("ciudad");
    return validarciudad(ciudad);
}

function validarciudad(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}
// Función Estado

function validarCamposEstado() {
    var estado = document.getElementById("estado");
    return validarestado(estado);
}

function validarestado(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}





// Función para limpiar campos del formulario
// function limpiar() {
//     document.getElementById("documentoIdentidad").value = "";
//     document.getElementById("documentoIdentidad").className = "form-control";
//     document.getElementById("primerNombre").value = "";
//     document.getElementById("primerNombre").className = "form-control";
//     document.getElementById("segundoNombre").value = "";
//     document.getElementById("primerApellido").value = "";
//     document.getElementById("primerApellido").className = "form-control";
//     document.getElementById("segundoApellido").value = "";
//     document.getElementById("Celular").value = "";
//     document.getElementById("Celular").className = "form-control";
//     document.getElementById("Correo").value = "";
//     document.getElementById("Correo").className = "form-control";
//     document.getElementById("Estado").value = "";
//     document.getElementById("Estado").className = "form-control";
// }

// var idMedico = "";
// // Asociar eventos de clic a los iconos dentro de la tabla
// $(document).on("click", ".editar", function () {
//     limpiar();
//     idMedico = $(this).data("id");

//     $.ajax({
//         url: url + idMedico,
//         type: "GET",
//         success: function (medico) {
//             document.getElementById("documentoIdentidad").value = medico.documentoIdentidad;
//             document.getElementById("primerNombre").value = medico.primerNombre;
//             document.getElementById("segundoNombre").value = medico.segundoNombre;
//             document.getElementById("primerApellido").value = medico.primerApellido;
//             document.getElementById("segundoApellido").value = medico.segundoApellido;
//             document.getElementById("Celular").value = medico.celular;
//             document.getElementById("Correo").value = medico.correo;
//             document.getElementById("Estado").value = medico.estado;
//             $('#exampleModal').modal('show');
//         },
//         error: function (error) {
//             alert("Error al obtener los datos del médico: " + error.statusText);
//         }
//     });
// });

// $(document).on("click", ".cambiarEstado", function () {
//     var idMedico = $(this).data("id");
//     $.ajax({
//         url: url + idMedico,
//         type: "DELETE",
//         success: function () {
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Cambio de estado exitoso",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//             listarMedico(); // Actualiza la lista de pacientes en el front-end
//         }
//     });
// });



// $(document).on("click", ".eliminar", function () {
//     // Obtener el ID del médico desde el atributo data del elemento clicado
//     var idMedico = $(this).data("id");

//     // Mostrar un cuadro de diálogo para confirmar la eliminación
//     Swal.fire({
//         title: '¿Estás seguro?',
//         text: "¿Deseas eliminar este medico?",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Eliminar'
//     }).then((result) => {
//         // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
//         if (result.isConfirmed) {
//             $.ajax({
//                 url: url + "eliminarPermanente/" + idMedico,
//                 type: "DELETE",
//                 success: function (eliminarPermanente) {
//                     // Mostrar un mensaje de éxito
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Registro Eliminado",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                     // Actualizar la lista de médicos después de eliminar
//                     listarMedico();
//                 },
//                 error: function (xhr, status, error) {
//                     // Manejo de errores
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Error',
//                         text: 'El registro tiene un ingreso.'
//                     });
//                 }
//             });
//         }
//     });
// });




// // Llamar a la función para listar médicos al cargar la página
// $(document).ready(function () {
//     listarMedico();
// });
// function actualizarlistarMedico() {
//     listarMedico();
// }