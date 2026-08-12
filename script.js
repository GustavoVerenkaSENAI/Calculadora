const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        // Permite apenas números e operadores básicos
        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            display.value = "Erro";
            return;
        }

        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (erro) {
        display.value = "Erro";
    }
}