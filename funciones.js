window.onload = function(){

	var activar = document.getElementById('activar');
	activar.addEventListener("click", calcularResultado, false);

	var cocienteCont = document.getElementById('cociente');
	var residuoCont = document.getElementById('residuo');

	function calcularResultado() {
		
		var a = parseFloat(document.getElementById('number1').value);
		var b = parseFloat(document.getElementById('number2').value);
		var c = parseFloat(document.getElementById('number3').value);
		var d = parseFloat(document.getElementById('number4').value);
		var r = parseFloat(document.getElementById('number5').value);

		var residuo = (a * (r*r*r)) + (b * (r*r)) + (c*r) + d;
		var cociente = a + "x² + " + (b + (a*r)) + "x + " + (a*(r*r) + (b*r) + c);

		cocienteCont.innerHTML = "El cociente de la división es: " + cociente;
		residuoCont.innerHTML = "El residuo de la división es: " + residuo;

	}
};

