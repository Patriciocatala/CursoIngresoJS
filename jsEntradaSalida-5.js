/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	nombre= document.getElementById('elnombre').value;
	edad= document.getElementById('laedad').value;
	alert= ("su nombre es:" + nombre + "y su edad" + edad);
	

}

