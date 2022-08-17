let letras = ["a","e","i","o","u"];
let encriptado = ["ai","enter","imes","ober","ufat"];

function checkType(words) {

  words = String(words).trim();

  const regxs = "/^[a-z0-9 ]+$/";
  if (regxs.lower.test(words)) return '0';
  }

function encriptar(){
  let texto = document.getElementById("codificar").value;
  if(/^[a-z0-9 ]+$/.test(texto)){
  separar = texto.split("")
  for(let n = 0; n < separar.length; n++){
    for(let x = 0; x < letras.length; x++){
      if(separar[n] == letras[x]){
              separar[n] = separar[n].replace(letras[x],encriptado[x]);
      }
    }
  }
  document.getElementById("codificado").innerHTML = separar.join("");
  document.getElementById("oculto").style.display = "none";
  document.querySelector(".box-right").style.display = "block";
  document.getElementById("codificar").value = "";
}else{
  alert("No se permiten caracteres especiales o letras en mayusculas");
}
}

function desencriptar(){
  let cadena = document.getElementById("codificar").value;
  if(/^[a-z0-9 ]+$/.test(cadena)){
    for(let x = 0; x < encriptado.length; x++){
      cadena = cadena.replace(new RegExp(encriptado[x],"g"),letras[x]);
    }
  document.getElementById("codificado").innerHTML = cadena;
  document.getElementById("oculto").style.display = "none";
  document.querySelector(".box-right").style.display = "block";
  }else{
    alert("No se permiten caracteres especiales o letras en mayusculas");
  }
}

function copiar(){
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("codificado").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert('Texto a sido Copiado al Portapapeles');
}
