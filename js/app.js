// Variables
const buscador = document.querySelector('#icon_buscador');
const formulario = document.querySelector('#enviar-datos');
// Variables del formulario
const contacto = document.querySelector('#contacto');
const email = document.querySelector('#email');
const numero = document.querySelector('#numero');
const fEmail = document.querySelector('#part-email');
const fContacto = document.querySelector('#part-contacto');
const fNumero = document.querySelector('#part-numero');
const enviar = document.querySelector('#btnEnviar');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Eventos
eventListener();
function eventListener(){
    // Formulario sin datos
    document.addEventListener('DOMContentLoaded', sinRegistro);
    
    // Validación del email
    email.addEventListener('blur', validarFormulario);
    contacto.addEventListener('blur', validarFormulario);
    numero.addEventListener('blur', validarFormulario);
    
    // Envía el formulario
    formulario.addEventListener('submit', enviarEmail);

    // Buscador
    buscador.addEventListener('click', mostrarBuscador);
}

function sinRegistro(){
    enviar.disabled = true;
    enviar.classList.add('boton-inicial');
}

function validarFormulario(e){
    
    if(e.target.value.length > 0){
        // Eliminar el mensaje Error
        const error = document.querySelector('p.mensaje-error');
        if(error){
            error.remove();
        }
        
        e.target.classList.remove('error');
        e.target.classList.add('correcto');
    } else {
        e.target.classList.remove('correcto');
        e.target.classList.add('error');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        if ( er.test(e.target.value) ){
            // Eliminar el mensaje Error
            const error = document.querySelector('p.mensaje-error');
            if(error){
                error.remove();
            }
    
            e.target.classList.remove('error');
            e.target.classList.add('correcto');
        } else {
            e.target.classList.remove('correcto');
            e.target.classList.add('error');
            mostrarError('Email inválido');
        }
    }

    if( er.test(email.value) && contacto.value !== '' && numero.value !== '' ){
        enviar.disabled = false;
        enviar.classList.add('boton-inicial');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mensaje-error');

    const advertenciaError = document.querySelectorAll('.mensaje-error');
    if( advertenciaError.length === 0 ){
        formulario.appendChild(mensajeError);
    }
}

// Enviar Email
function enviarEmail(e) {
    e.preventDefault();
    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    fEmail.style.display = 'none';
    fContacto.style.display = 'none';
    fNumero.style.display = 'none';
    enviar.style.display = 'none';

    // Después de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        // Mensaje de enviado
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Sus datos han sido enviados correctamente';
        parrafo.classList.add('mensaje-correcto');
        // Inserta el mensaje antes del Spinner
        formulario.insertBefore(parrafo, spinner);
        setTimeout(() => {
            parrafo.remove();
            fEmail.style.display = 'flex';
            fContacto.style.display = 'flex';
            fNumero.style.display = 'flex';
            enviar.style.display = 'flex';
            resetearFormulario();
        }, 4000);

    }, 3000);
}

function resetearFormulario(){
    formulario.reset();
    sinRegistro();
}

function mostrarBuscador(){
    console.log('Primera conexión en JS');
}




function Cliente(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const cliente = new Cliente('Javier', 21);
console.log(cliente);

function formatearCliente(cliente){
    const {nombre, edad} = cliente;
    return `El Cliente ${nombre} tiene ${edad} años`;
}

console.log(formatearCliente(cliente));

function Empresa(nombre, edad, categoria){
    this.nombre = nombre;
    this.edad = edad;
    this.categoria = categoria;
}

const CJ = new Empresa('Consultoría Javier', 21, 'tecnología');
console.log(CJ);

function formatearEmpresa(empresa){
    const {nombre, edad, categoria} = CJ;
    return `La empresa ${nombre} tiene un ranking ${edad} de 100 en el rubro de ${categoria}`;
}

console.log(formatearEmpresa(Empresa));