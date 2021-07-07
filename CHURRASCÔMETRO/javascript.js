let inputAdultos = document.getElementById('adultos');
let inputCrianças = document.getElementById('crianças');
let inputDuração = document.getElementById('duração');

let resultado = document.getElementById('resultado');

function calcular(){
    console.log('ta funcionando');
    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duração = inputDuração.value;


    let qdtTotalCarne = carnePP(duração) * adultos + (carnePP(duração)*crianças/2);
    let qdtTotalCerveja = cervejaPP(duração) * adultos ;
    let qdtTotalBebidas = bebidasPP(duração) * adultos + (bebidasPP(duração)*crianças/2);

    resultado.innerHTML = `<p>${qdtTotalCarne/1000}g de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/350)} garrafas de bebidas </p>`


    
}
 
function carnePP(duração){
    if(duração >= 6){
        return  650;
    }else{
    return 400;
}
}

function cervejaPP(duração){
    if(duração >= 6){
        return  2000;
    }else{
    return 1200;
}}
function bebidasPP(duração){
    if(duração >= 6){
        return  1000;
    }else{
    return 1500;
}


}