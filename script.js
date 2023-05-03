const txtn1 = document.querySelector("#n1");
const respuesta = document.getElementById("respuesta");
const btncopiar = document.getElementById("copiar");
const bntencriptar = document.getElementById("encriptar");
const btndesencriptar = document.getElementById("desencriptar");
bntencriptar.addEventListener("click", encriptar);
btndesencriptar.addEventListener("click", desencriptar);
btncopiar.addEventListener("click", copiar);

function encriptar() {
	let mensaje = txtn1.value;
	let resp = txtn1.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

	respuesta.value = resp;
	txtn1.value = "";
}

function desencriptar() {
	let mensaje = txtn1.value;
	let resp = txtn1.value.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

	respuesta.value = resp;
	txtn1.value = "";
}

function copiartxtn() {
	let button = document.getElementById("copiar");

	navigator.clipboard.writeText(respuesta.value);
	button.textContent = "copiado";
}
