

//ANIMACION PARA EL DEZPLEGABLE 
// const btnToggle = document.querySelector('.toggle-btn');
// btnToggle.addEventListener('click', function () {
//     console.log('clik')
//     document.getElementById('sidebar').classList.toggle('active');
//     console.log(document.getElementById('sidebar'))
// });




function buscarClientePorFiltro(nombrecliente) {
    if (nombrecliente === '') {
        ListarCliente(); // Mostrar todos los cliente si estado es vacío
    } else {
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/busquedafiltro/" + nombrecliente,
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
                            <i class="fas fa-edit editar"  onclick="editar" data-id="${result[i]["idcliente"]}"></i>
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

}

function buscarClientePorCiudad(ciudad) {
    if (ciudad === '') {
        ListarCliente(); // Mostrar todos los cliente si estado es vacío
    } else {
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/filtrarciudad/" + ciudad,
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
                            <i class="fas fa-edit editar"  onclick="editar" data-id="${result[i]["idcliente"]}"></i>
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

}


function buscarClientePorEstado(estado) {
    if (estado === '') {
        ListarCliente(); // Mostrar todos los clientes si estado es vacío
    } else if (estado === 'H') {
        // Mostrar solo los clientes habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/filtrarestado/" + estado,
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
                            <i class="fas fa-edit editar"  onclick="editar" data-id="${result[i]["idcliente"]}"></i>
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
    } else {
        // Mostrar solo los cliente deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/filtrarestado/" + estado,
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
                            <i class="fas fa-edit editar"  onclick="editar" data-id="${result[i]["idcliente"]}"></i>
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
}


// Espera a que el contenido de la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento select de estado
    var selectEstado = document.getElementById("estado");
    // Establece la opción predeterminada en "Todos"
    selectEstado.value = " ";
});






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
                        <i class="fas fa-edit editar"  onclick="editar;" data-id="${result[i]["idcliente"]}"></i>
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
            text: "¡Llene todos los campos correctamente!1",
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
        "correo": correo.value,
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
            text: "¡Llene todos los campos correctamente!2",
            icon: "error"
        });
    }
};








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

    if (valor.length < 5 || valor.length > 13) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


function validarCamposnombretipo() {
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
        cuadroNumero.className = "form-select is-valid";
    } else {
        cuadroNumero.className = "form-select is-invalid";
    }

    return valido;
}





// Función nombrecliente

function validarCamposnombrecliente() {
    var primerNombre = document.getElementById("nombrecliente");
    return validarnombrecliente(nombrecliente);
}

function validarnombrecliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 45) {
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

function validarCamposapellidocliente() {
    var apellidocliente = document.getElementById("apellidocliente");
    return validarapellidocliente(apellidocliente);
}

function validarapellidocliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 45) {
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

function validarCampostelefono() {
    var telefono = document.getElementById("telefono");
    return validartelefono(telefono);
}

function validartelefono(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 13) {
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

function validarCamposdireccion() {
    var direccion = document.getElementById("direccion");
    return validardireccion(direccion);
}

function validardireccion(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 45) {
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

    if (valor.length < 1 || valor.length > 45) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

function validarCamposciudad() {
    var ciudad = document.getElementById("ciudad");
    return validarciudad(ciudad);
}

function validarciudad(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 45) {
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

    if (valor.length < 1 || valor.length > 2) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-select is-valid";
    } else {
        cuadroNumero.className = "form-select is-invalid";
    }

    return valido;
}



// Función para limpiar campos del formulario
function limpiar() {
    document.getElementById("tipoidentificacion").value = "";
    document.getElementById("tipoidentificacion").className = "form-select";
    document.getElementById("identificacioncliente").value = "";
    document.getElementById("identificacioncliente").className = "form-control";
    document.getElementById("nombrecliente").value = "";
    document.getElementById("nombrecliente").className = "form-control";
    document.getElementById("apellidocliente").value = "";
    document.getElementById("apellidocliente").className = "form-control";
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").className = "form-control";
    document.getElementById("direccion").value = "";
    document.getElementById("direccion").className = "form-control";
    document.getElementById("correo").value = "";
    document.getElementById("correo").className = "form-control";
    document.getElementById("ciudad").value = "";
    document.getElementById("ciudad").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-select";
}

var idcliente = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idcliente = $(this).data("id");

    $.ajax({
        url: url + idcliente,
        type: "GET",
        success: function (Cliente) {
            document.getElementById("tipoidentificacion").value = Cliente.tipoidentificacion;
            document.getElementById("identificacioncliente").value = Cliente.identificacioncliente;
            document.getElementById("nombrecliente").value = Cliente.nombrecliente;
            document.getElementById("apellidocliente").value = Cliente.apellidocliente;
            document.getElementById("telefono").value = Cliente.telefono;
            document.getElementById("direccion").value = Cliente.direccion;
            document.getElementById("correo").value = Cliente.correo;
            document.getElementById("ciudad").value = Cliente.ciudad;
            document.getElementById("estado").value = Cliente.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del cliente: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idcliente = $(this).data("id");
    $.ajax({
        url: url + idcliente,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            ListarCliente(); // Actualiza la lista de cliente en el front-end
        }
    });
});



$(document).on("click", ".eliminar", function () {
    // Obtener el ID del cliente desde el atributo data del elemento clicado
    var idcliente = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este cliente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idcliente,
                type: "DELETE",
                success: function (eliminarPermanente) {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de cliente después de eliminar
                    ListarCliente();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene un ingreso.'
                    });
                }
            });
        }
    });
});


