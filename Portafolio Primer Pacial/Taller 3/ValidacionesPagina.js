function AbrirVentana(){
	myWindow = window.open('', 'Ventana Secundaria', 'width=300, height=200');
	myWindow.document.write('<html>');
	myWindow.document.write('<head>'); 
	myWindow.document.write('<title>Ventana secundaria</title>');
	myWindow.document.write('</head>'); 
	myWindow.document.write('<body><center>'); 
	myWindow.document.write('Mis nombres y apellidos son: ');
	myWindow.document.write('<p style=" color:#EB105E "> MACIAS PICO JOSSELYN STEFANY </p>'); 
	myWindow.document.writeln('Se han utilizado las propiedades: '); 
	myWindow.document.write('<li>height = 200 </li><li>width = 300</li>'); 
	myWindow.document.write('<button onclick="window.close();">Cerrar esta ventana</button><br> ');
	myWindow.document.write('</center></body>'); 
	myWindow.document.write('</html>');
};
