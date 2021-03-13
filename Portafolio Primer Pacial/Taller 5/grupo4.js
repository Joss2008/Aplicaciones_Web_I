//Array de los meses
var meses = ["Enero", "Febrero",
	"Marzo", "Abril", "Mayo", "Junio",
	"Julio", "Agosto", "Septiembre",
	"Octubre", "Noviembre", "Diciembre"];

//mostrar cada uno de los meses mediante un for 
function mostrar(meses){
	 for(var x=0; x<meses.length; x++){
	 	alert(meses[x]);
	 }
}
//Declaracion e inicializacion de objetos
function Productoalimenticio(codigo, nombre, precio){
	this.codigo = codigo;
	this.nombre = nombre;
	this.precio = precio;
	this.imprimeDatos = imprimeDatos;
}

//Instancia de los objetos 
var productos = new Array(3);
productos[0] = new Productoalimenticio('0001','Lenteja','1.30');
productos[1] = new Productoalimenticio('0002','Aceite','1.85');
productos[2] = new Productoalimenticio('0003','Mantequilla','2.75');

/*Funcion que muestra los datos*/
function imprimeDatos(){
    alert('--------------------------\nProductos Alimenticios '+
	'\n--------------------------\nCodigo:      ' + this.codigo + '\n'
	 + 'Nombre:    '+this.nombre+ '\n' + 'Precio:       '+ this.precio +
	  '\n' +'*********************'+'\n');
}
//Funcion que llama el html de la cual se llama a la funcion imprimir 
//datos para que esta pueda mostrar los datos 
function for1(productos){
	for(var x=0; x<productos.length; x++){
	    var y = document.createElement("y");
	    y.innerHTML = productos[x].imprimeDatos();
	}
}

