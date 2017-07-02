function validateForm(){
	var expre = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var expreNom = /[a-z]/;

	$(document).ready(function(){
		$('#boton').click(function(){
			var nombre = $('#name').val();
			var apellido = $('#lastname').val();
			var correo = $('#input-email').val();
			var clave = $('#input-password').val();
			/* Ahora Validaremos */

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


// NO FUNCIONA T.T