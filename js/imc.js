$("#calcular").click(function () {
    let peso = parseFloat($("#peso").val());
    let altura = parseFloat($("#altura").val());

    // converte a altura para metros
    if (altura > 10) {
        altura = altura / 100;
    }

    let imc = calcular(altura, peso);
    let classificacao = classificarIMC(imc);

    // Exibe o resultado
    $("#resultado").html("Seu IMC é: " + imc.toFixed(2) + "<br>" + classificacao);
});

//calculo do imc
function calcular(altura, peso) {
    return peso / (altura * altura);
}

//verificar a classificação do imc
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) { 
        return "Peso normal"; 
    } else if (imc < 30) { 
        return "Sobrepeso"; 
    } else { 
        return "Obesidade"; 
    }
}

// Função limpar
function limpar() {
    $("#altura").val("");
    $("#peso").val("");
    $("#altura").focus();
    $("#resultado").html("Resultado aparecerá aqui");
}