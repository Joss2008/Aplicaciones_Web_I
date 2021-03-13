	//1. Transformar hora actual en segundos
	function transformar(){
		var d = new Date();
		var segundototal= ((d.getHours()*3600)+(d.getMinutes()*60)+d.getSeconds());
	    alert("Segundos en total: " +segundototal);
	}
	
	//2. Calcular el area de un triangulo, que es igual a (base*altura)/2
	function AreaTriangulo(){
		var base=parseInt(prompt("Ingrese la base del triangulo"));
		var altura=parseInt(prompt("Ingrese la altura del triangulo"));
		alert("El resultado al calcular el area del triangulo es: " + ((base * altura)/2));
	}

	//3. Calcular la raiz cuadrada de un numero impar y muestre el resultado con tres digitos
	function RaizCuadrada(){
		var raiz=parseInt(prompt("Ingrese el numero del cual desea sacar la raiz"));
		var resultado= Math.sqrt(raiz);
		alert("Resultado de la raiz cuadrada: " +resultado.toPrecision(3));
	}
	
	//4. Ingresar una cadena de texto y mostrar la longitud de la cadena 
	function CadenaTexto(){
		var mensaje =prompt("Ingrese un mensaje ");
		alert("La longitud de su mensaje es de: " +mensaje.length);
	}
	
	//5. Concatenar los arrays1 (Lunes, Martes, Miercoles, Jueves, Viernes) y arrays 2 (Sabado, Domingo)
	function Arrays(){
		var laborales = new Array("Lunes ", "Martes ", "Miercoles ", "Jueves ", "Viernes " );
		var nolaborales = new Array("Sabado ", "Domingo " );
		alert("El resultado al concatenar es: "+laborales.concat(nolaborales));
	}
	
	//6. Mostrar la version del navegador
	function Navegador(){
		alert("Nombre del navegador: " + navigator.appName+" "+ navigator.codeName);
	}
	
	//7. Mostrar el ancho y la altura de la pantalla
	function Pantalla(){
        alert("Altura total: "+screen.height+"   Altura disponible:"+screen.availHeight+"   Anchura total:"+screen.width+"    Anchura disponible:"+screen.availWidth);
	}
    
    //8. Imprimir la pagina
    function Imprimir(){
    	window.print();
    }
