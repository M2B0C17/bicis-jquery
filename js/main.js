function validateForm(){
	$(document).ready(function(){
		$('#input-password').focusin(function(){ // evento focusin
			$('this').addClass('miClase'); // añadimos una clase
		});

		$('#input-password').focusout(function(){
			if($('this').val().length > 0 && $(this).val().length <= 5){ // estamos diciendoq ue si el valor ingresado por el usuario es menor o igual a 5.
				$('#mensajeError4').html('<span class="errores" style = "color: #BF9AE1;">Escribe tu contraseña. Debe ser al menos de 6 carácteres y distinto a 123456 o 098765</span>');
			}else if($('this').val().length > 5){
				$('#mensajeError4').html('<span class="errores" style="color: #BF9AE1;">Contraseña valida</span>');
			}else{
				$('mensajeError4').html("");
			}
		});
	});
}

/*
// NO FUNCIONA T.T

function validateForm(){
	var expre = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var expreNom = /[a-z]/;

	$(document).ready(function(){
		$('#boton').click(function(){
			var nombre = $('#name').val();
			var apellido = $('#lastname').val();
			var correo = $('#input-email').val();
			var clave = $('#input-password').val();
			// Ahora Validaremos

			// Nombre
			if($('#name').val() == "" || $('#name').val() != expreNom.test($('#name').val())){
				$('#mensajeError1').fadeIn(); // fadeIn() nos dara una animacion de opacidades, es solo para que se muestre el mensaje mas bonito
				return false;
			}else{
				$('#mensajeError1').fadeOut(); // fadeOut() oculta la animación.
			}

			// Apellido
			if($('#lastname').val() == "" || $('#lastname').val() != expreNom.test($('#lastname').val())){
				$('#mensajeError2').fadeIn(); // fadeIn() nos dara una animacion de opacidades, es solo para que se muestre el mensaje mas bonito
				return false;
			}else{
				$('#mensajeError2').fadeOut(); // fadeOut() oculta la animación.

			}

			// Correo
			if($('#input-email').val() == "" || $('#input-email').val() != expre.test($('#input-email').val())){
				$('#mensajeError3').fadeIn(); // fadeIn() nos dara una animacion de opacidades, es solo para que se muestre el mensaje mas bonito
				return false;
			}else{
				$('#mensajeError3').fadeOut(); // fadeOut() oculta la animación.
			}

			// Clave
			if($('#input-password').val() == "" || $('#input-password').val() > 6 || $('#input-password').val() == "123456" || $('#input-password').val() == "098765"){
				$('#mensajeError4').fadeIn(); // fadeIn() nos dara una animacion de opacidades, es solo para que se muestre el mensaje mas bonito
				return false;
			}else{
				$('#mensajeError4').fadeOut(); // fadeOut() oculta la animación.
			}
	})
}


*/