'use strict';

//variaveis

let somaMozarela = 0;
let somaMista = 0;
let somaCalabresa = 0;

let vendaMozarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e) {
    if (document.getElementById('mozarela').checked) {
        somaMozarela = somaMozarela + 1;
        vendaMozarela = vendaMozarela + 28.00;
        document.getElementById('resultMozarela').innerHTML = somaMozarela;
        document.getElementById('vendaMozarela').innerHTML = vendaMozarela.toFixed(2);
    } else if (document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 21.00;
        document.getElementById('resultMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 23.00;
        document.getElementById('resultCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estorno(e) {
    if (document.getElementById('mozarela').checked) {
        somaMozarela = somaMozarela - 1;
        vendaMozarela = vendaMozarela - 28.00;
        if (somaMozarela < 0) {
            somaMozarela = 0;
            vendaMozarela = 0.00;
        }
        document.getElementById('resultMozarela').innerHTML = somaMozarela;
        document.getElementById('vendaMozarela').innerHTML = vendaMozarela.toFixed(2);
    } else if (document.getElementById('mista').checked) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 21.00;
        if (somaMista < 0) {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 23.00;
        if (somaCalabresa < 0) {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function planilha(e) {
    TableToExcel.convert(document.getElementById('table'));
}