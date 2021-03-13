/*Se pone color al pasar por el boton enviar*/
document.getElementById("primero").focus();

var formulario=document.getElementById("FORMULARIO");

/*Para iniciar las validaciones*/
window.onload =iniciar;
function iniciar(){
	document.getElementById("primero").addEventListener('click',validar,false);
}

/*Validar nombres y apellidos*/
function validaNombreApellido(){
	var elemento=document.getElementById("nombre");
	var elemento=document.getElementById("apellido");
	if (elemento.value==""){
		alert ("El campo no pude estar vacio");
		return false;
	}
		return true;
}

function validaFecha(){
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	var año=document.getElementById("año").value;
	var fecha =new Date(año,mes,dia);
	if (isNaN(fecha)){
		alert("Los campos de la fecha no son correctos");
		return false;
	}
		return true;
}

function validaTelefono(){
	var elemento = document.getElementById("telefono");
	if(isNaN(elemento.value)){
		alert("El campo del telefono debe ser numerico");
		return false;
	}
		return true;
}

function validaCorreo(){
var elemento = document.getElementById("correo");
 if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
    alert('[ERROR] Este campo no esta completo');
      return false;
  }
 }

 function validarCheckbox{
 	var checkbox = document.getElementById('test');
	if(isChecked){
    	alert('checkbox esta seleccionado');
	}
 }

function validar (e){
	if(validaNombreApellido()&& validaFecha()&& validaTelefono() && validaCorreo() && validarCheckbox() && confirm("Click en aceptar si estas seguro de la informacion a enviar")){
		return true;
	}else{
		e.preventDefault();
		return false;
	}
}
