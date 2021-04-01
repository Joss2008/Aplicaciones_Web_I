//Validacion para que los campos no esten vacios
function validacion(){
	valor1 =document.getElementById('campo').value;
	valor2 =document.getElementById('campo1').value;
	valor3 =document.getElementById('campo2').value;
	valor4 =document.getElementById('campo3').value;
	valor5 =document.getElementById('telefono').value;
	valor6 =document.getElementById('campo5').value;
	elemento = document.getElementById("check"); 
	var p1 = document.getElementById("campo3").value;
	var p2 = documen..getElementById("campo6").value;
    var dateArray = valor6.split('/');
    var day = parseInt(dateArray[0]);
    var month = parseInt(dateArray[1]);
    var year = parseInt(dateArray[2]);
    var dataObject = new Date(year, month , day);

	if (valor1==null || valor1.length ==0) {
		alert("Algunos campos estan vacios");
		return false;
	}else{
		if (valor2==null || valor2.length ==0) {
		alert("Algunos campos estan vacios");
		return false;
		}else{
			if (valor3==null || valor3.length ==0) {
				alert("Algunos campos estan vacios");
				return false;
			}else{
				if (valor4==null || valor4.length ==0) {
					alert("Algunos campos estan vacios");
					return false;
				}else{
					if (valor5==null || valor5.length ==0) {
						alert("Algunos campos estan vacios");
						return false;
					}//Aqui validas si en el campo de telefono solo se ingresaron numeros
					if( isNaN(valor5) ) { 
						alert("El campo telefono tiene que ser numérico"); 
						return false; 
					} 
                    if (dataObject.getFullYear() === year && dataObject.getMonth() === month && dataObject.getDate() === day) {
                       return true;
                    }
                    else {
                        alert ("La fecha es incorrecta");
                    }
                    if( !elemento.checked ) { 
                    	return false; 
                    }else{
                    	alert("El elemento ha sido selecciionado ")
                    }
                    if (p1 != p2) {
					  alert("Las passwords deben de coincidir");
					  return false;
					} else {
					  return true; 
					}
                }
			}
		}
	}
}
/*
//Defines la función "comprobar"
function comprobar() {
  for (var i = 0; i < document.forms["frm"].length; i++) { //Haces un bucle para cada elemento dentro de un <form id="frm"> en el que previamente has metido los inputs
    if (document.forms["frm"].elements[i].checked) { //Determinas si cada elemento (checkboxes) estan activadas (checked)
      return; //Si hay una sola que esté activada, salir de la funcion "comprobar"
    }
  }
  document.forms["frm"].elements[0].checked = true; // Si se ha acabado el bucle y no se ha salido de la funcion "comprobar" (porque ningún checkbox estaba activado), entonces, activar el primer checkbox del form "frm" (el 1º es 0, el 2º es 1, el 3º es 2...)
}

comprobar();*/

/////////////////
//function validaemail(){
		// valor = document.getElementById("campo2").value; 
		//  if(!(/\w+([-+.’]\w+)*@\w+([-.]\w+)*/.test(valor)) )
		//    {  
			//		  alert ("email incorrecto")
		//				return false;
		//			   } return true;
  //  }

///////////////////
/*
function validaDNI(){
	valor = document.getElementById("dni").value;
	 var letras = ["T", "R", "W", "A", "G", "M", "Y",
	  "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", 
	  "V", "H", "L", "C", "K", "E", "T"];
	   if( !(/^\d{8}[A-Z]$/.test(valor)) )
	   { alert("dni incorrecto")
		   return false; } 
	   if(valor.charAt(8) != letras[(valor.substring(0, 8))%23])
		{ return false; } 
		alert("dni incorrecto")
		return true; 
	}

	function validaTelefono(){
		 valor = document.getElementById("telefono").value;
		  if( !(/^\d{10}$/.test(valor)) ) 
		  { 
			alert("telefono incorrecto")
			  return false; }
			   return true; }

// validar url 
function validateUrl() {
	url =document.getElementById("url").value;
	if(!(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url)) ) 
	{
		alert ("url incorrecta")
		return false;
	}
	 return  true;
	 } 
// validacion de fecha 
function fechas(){
	fecha1 =document.getElementById("campo5").value;
	if(!(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(fecha1)) ) 
	{
		alert ("fecha incorrecta")
		return false;
	}
	 return  true;
	 } 
// validar contraseña 
    function validarcontraseña (){
	 contra=document.getElementById("campo3").value;
 	if(!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(contra)) ) 
	{
		alert ("contraseña incorrecta")
				return false;
 	}
	 return  true;
		  } 
  function validarcontraseña1 (){
	contra=document.getElementById("campo6").value;
	if(!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(contra)) ) 
   {
	   alert ("contraseña incorrecta")
			   return false;
	}
	return  true;
		 } 
*/