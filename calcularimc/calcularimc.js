

const tela = document.getElementById("visor");
const peso = document.getElementById("peso").value;
const altura = document.getElementById("altura").value;


const pesoObj = document.getElementById("peso");
const alturaObj = document.getElementById("altura");

const btLimpar = document.getElementById("btClear");
btLimpar.onclick = () => {
pesoObj.value = "";
alturaObj.value = "";};


pesoObj.onfocus = () => {
let i = 0;
updateInputPeso("btDot");
    while(i<10){
    let ids = "bt"+i;
    updateInputPeso(ids);



    i++;
    }

};

alturaObj.onfocus = () => {
let i = 0;
updateInputAltura("btDot");
    while(i<10){
    let ids = "bt"+i;
    updateInputAltura(ids);



    i++;
    }

};


function clearAll(){updateInputPeso("btClear");updateInputAltura("btClear");}

function updateInputPeso(ids){
    let bt = document.getElementById(ids)
    bt.onclick = () => {
    const expressao = peso/altura*altura;
        //document.write(expressao);
        switch(ids){
        case "bt0" : pesoObj.value += 0;break;
        case "bt1" : pesoObj.value += 1;break;
        case "bt2" :  pesoObj.value += 2;break;
        case "bt3" : pesoObj.value += 3;break;
        case "bt4" :  pesoObj.value += 4;break;
        case "bt5" :  pesoObj.value += 5;break;
        case "bt6" :  pesoObj.value += 6;break;
        case "bt7" :  pesoObj.value += 7;break;
        case "bt8" :  pesoObj.value += 8;break;
        case "bt9" : pesoObj.value += 9;break;
        case "btEqual" :    ;break;
        case "btDot" : pesoObj.value += ".";break;
        default: tela.innerText= "Valor invalido";
        }



    };


}

function updateInputAltura(ids){
    let bt = document.getElementById(ids)
    bt.onclick = () => {
    const expressao = peso/altura*altura;
        //document.write(expressao);
        switch(ids){
        case "bt0" : alturaObj.value += 0;break;
        case "bt1" : alturaObj.value += 1;break;
        case "bt2" :  alturaObj.value += 2;break;
        case "bt3" : alturaObj.value += 3;break;
        case "bt4" :  alturaObj.value += 4;break;
        case "bt5" :  alturaObj.value += 5;break;
        case "bt6" :  alturaObj.value += 6;break;
        case "bt7" :  alturaObj.value += 7;break;
        case "bt8" :  alturaObj.value += 8;break;
        case "bt9" : alturaObj.value += 9;break;
        case "btEqual" :    ;break;
        case "btDot" : alturaObj.value += ".";break;
        default: tela.innerText= "Valor invalido";
        }



    };


}



