const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
var address1 = document.getElementById("password");
var validarpass = false;

function send(){
	object=document.getElementById("email");
	valueForm=object.value;
	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var patron2 = /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})\S{10,20}$/;
	if(!valueForm.search(patron)==0){
		alert("Formato de email no valido");
	}
}
function send2(){
	object=document.getElementById("email");
	valueForm=object.value;
	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var patron2 = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{10,20}$/;
	const input = document.getElementById('nombre');
	if(input.checkValidity() && input.value.length>10) {
    	if(valueForm.search(patron)==0){
			if(address1.value.search(patron2)==0){
				alert("Registrado correctamente");
				return false;
			}else{
				alert("La contraseña debe incluir al menos una letra mayuscula, una minuscula, un digito, y debe ser mayor a 10 caracteres");
				return false;
			}
		}else{
			alert("Formato de email no valido");
			return false;
		}
	} else {
		alert("Nombre demasiado corto");
		return false;
	}
	
}