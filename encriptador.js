const texto1 = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const texEncriptado = encriptar(texto1.value);
    mensaje.value = texEncriptado;
    mensaje.style.backgroundImage ="none";
    texto1.value = "";
}

function btnDesencriptar(){
    const textEncriptado =  desencriptar(texto1.value);
    mensaje.value = textEncriptado;
    texto1.value = "";
}


function encriptar(stringEncripta){

    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringEncripta = stringEncripta.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncripta.includes(matrizCodigo[i][0])){
            stringEncripta = stringEncripta.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        return stringEncripta;
    }
}


function desencriptar(stringDesencripta){

    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDesencripta = stringDesencripta.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencripta.includes(matrizCodigo[i][1])){
            stringDesencripta = stringDesencripta.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
        return stringDesencripta;
    }
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje = "";

}

//expresiones regulares
//regEx reamplaza cadenas con repacle, g es de global y i caracteres, toLowercase devuelve minusculas.
//function encriptarTexto(){

//   const encripto = {"e" : "enter", "i" : "imes", "a" : "ai", "o" : "ober", "u" : "ufat"},
 //  texto = prompt("Ingrese texto : " ).toLowerCase();
  //  const r = texto.replace(/[eiaou]/g, i => encripto[i]);
 //   console.log(r);
//}

