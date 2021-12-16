// Função que limpa as caixas de texto da calculadora e todas as variáveis existentes.
function Limpar() {
    // limpa o valor da caixa de texto num1 do formulário calculadora do documento HTML
    document.calculadora.num1.value = '';
    // limpa o valor da caixa de texto num2 do formulário calculadora do documento HTML
    document.calculadora.num2.value = '';
    // limpa o valor da caixa de texto resultado do formulário calculadora do documento HTML
    document.calculadora.resultado.value = '';
    // apaga a variável de memória valor1
    delete valor1;
    // apaga a variável de memória valor2
    delete valor2;
    // apaga a variável de memória valor
    delete valor;
}

const valorpot = 2;

// Função que executa as quatro operações básicas da calculadora, passando como parâmetro a operação (oper)
function Calcula(oper) {
    // cria a variável de memória valor1 com o valor da caixa de texto num1 do formulário calculadora do documento HTML
    var valor1 = document.calculadora.num1.value;
    // cria a variável de memória valor2 com o valor da caixa de texto num2 do formulário calculadora do documento HTML
    var valor2 = document.calculadora.num2.value;
    // verifica se a operação é de soma
    if (oper == "somar") {
        // cria a variável de memória valor com o valor da soma de valor1 e valor2 convertidos para float
        var valor = parseFloat(valor1) + parseFloat(valor2);
    }
    // verifica se a operação é de subtração
    else if (oper == "subtrair") {
        // cria a variável de memória valor com o valor da subtração de valor1 e valor2 convertidos para float
        var valor = parseFloat(valor1) - parseFloat(valor2);
    }

    // verifica se a operação é de multiplicação
    else if (oper == "multiplicar") {
    // cria a variável de memória valor com o valor da multiplicação de valor1 e valor2 convertidos para float
        var valor = parseFloat(valor1) * parseFloat(valor2);
    }
    // verifica se a operação é de divisão
    else if (oper == "dividir") {
        // cria a variável de memória valor com o valor da divisão de valor1 e valor2 convertidos para float
        var valor = parseFloat(valor1) / parseFloat(valor2);
    }

    else if (oper == "potencia") {
        var valor = Math.pow(parseFloat(valor1), parseFloat(valor2));
    }

    else if (oper == "quadrado") {
        var valor = Math.pow(parseFloat(valor1), valorpot);
    }

    else if (oper == "raiz") {
        var valor = Math.sqrt(valor1);
    }

    

    // atribui o conteúdo de valor para a caixa de texto resultado do formulário calculadora do documento HTML
    document.calculadora.resultado.value = valor;
}
