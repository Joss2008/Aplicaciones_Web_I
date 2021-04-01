//Validacion para que los campos no esten vacios
function validacion(){
         valor1 =document.getElementById('name').value;
         valor2 =document.getElementById('apelli').value;
         valor3 =document.getElementById('telefono').value;
         valor4 =document.getElementById('date').value;
         valor5 =document.getElementById('check').checked;
         valor8 =document.getElementById('contra1').value;
         valor9 =document.getElementById('contra2').value;
		/*VALIDACION PARA LA FECHA */
		var dateArray = valor4.split('/');
   		var day = parseInt(dateArray[0]);
    	var month = parseInt(dateArray[1]);
    	var year = parseInt(dateArray[2]);
    	var dataObject = new Date(year, month , day);

	if (valor1==null || valor1.length ==0) {
	    alert("Algunos campos estan vacios");
	    return false;
	}
    if (valor2==null || valor2.length ==0) {
      alert("Algunos campos estan vacios");
      return false;
	}
	 if (valor3==null || valor3.length ==0) {
      alert("Algunos campos estan vacios");
      return false;
	}
	if( isNaN(valor3) ) { 
		alert("El campo telefono tiene que ser numérico"); 
		return false; 
	} 
	if (dataObject.getFullYear() !== year && dataObject.getMonth() !== month && dataObject.getDate() !== day) {
		alert ("La fecha es incorrecta");
		return false; 
    }
    if (valor8==null || valor8.length ==0) {
      alert("Algunos campos estan vacios");
      return false;
	}
	if (valor9==null || valor9.length ==0) {
      alert("Algunos campos estan vacios");
      return false;
	}
	if (valor8 != valor9) {
	   alert("Las passwords deben de coincidir");
	   return false;
	}
    if( !valor5 ) { 
    	alert ("No ha aceptado los terminos");
        return false; 
    }
	alert("Formulario enviado");
	return true;
}

