function hallarIMC(){

	var imc;
    var peso= document.getElementById("peso").value;
 	var altura = document.getElementById("altura").value;

 	imc = parseFloat(peso)/parseFloat((altura*altura));

   	return imc;
}



function obtenerClasificacion(){

	var cad="";

	var valorIMC = hallarIMC();

	if(valorIMC<16.00){
  cad="Infrapeso: Delgadez Severa";
}else if(valorIMC<=16.00 || valorIMC<=16.99){
  cad="Infrapeso: Delgadez moderada";
}else if(valorIMC<=17.00 ||valorIMC<=18.49){
  cad="InfrapesovalorIMC: Delgadez aceptable";
}else if(valorIMC<=18.50 || valorIMC<=24.99){
  cad="Peso Normal";
}else if(valorIMC<=25.00 || valorIMC<=29.99){
  cad="Sobrepeso";
}else if(valorIMC<=30.00 || valorIMC<=34.99){
  cad="Obeso: Tipo I";
}else if(valorIMC<=35.00 || valorIMC<=39.99){
  cad="Obeso: Tipo II";
}else if(valorIMC>=40){
	cad="Obeso: Tipo III";
}


 return cad;

}



function mostrar(){

	var nombres= document.getElementById("nombre").value;
	var apellidos= document.getElementById("apellido").value;
	var edad = document.getElementById("edad").value;

	var texto="<h5> <b> Bienvenido "+nombres+" "+apellidos+" su edad es: "+edad+"</b> </h5>";

	texto+="<br>";
    
    texto+="<h5> IMC obtenido es: "+hallarIMC().toFixed(3)+"</h5>"

    texto+="<br>";
    texto+="<h5> Clasificación obtenida es: "+obtenerClasificacion()+"</h5> <br>";
    document.getElementById("reemplazar").innerHTML = texto;



}