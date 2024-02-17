
function encriptar() {
  let ingresoTexto = document.getElementById("ingresoTexto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let btnCopiar = document.getElementById('btnCopiar');
    
  let textoCifrado = ingresoTexto 
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    
    if (ingresoTexto.length != 0){
      document.getElementById("ingresoTexto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito.";
      parrafo.textContent = "";
      muñeco.src="./img/hombrepensando.png";
      btnCopiar.style.display = "block";
    }else{
      muñeco.src="./img/muñeco.png";
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal ("Oooops!","Debes ingresar algun texto","warning");;
    }  
      
}
  
function desencriptar(){
  let ingresoTexto = document.getElementById("ingresoTexto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let btnCopiar = document.getElementById('btnCopiar');

  let textoCifrado =  ingresoTexto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (ingresoTexto.length != 0){
      document.getElementById("ingresoTexto").value = textoCifrado; 
      tituloMensaje.textContent = "Texto desencriptado con éxito.";
      parrafo.textContent = "";
      muñeco.src="./img/exitoalencriptar.jpg";
      btnCopiar.style.display = "block";
    }else{
      muñeco.src="./img/muñeco.png";
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal ("Oooops!","Debes ingresar algun texto","warning");
    }

}

function copiar() {
  let btnCopiar = document.getElementById('btnCopiar')
  let texto = document.querySelector(".texto");

    texto.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    
    btnCopiar.textContent = "Copiado";
    
}


