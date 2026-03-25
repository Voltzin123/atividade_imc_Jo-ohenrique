$(document).ready(function () {

    $("#calcular").click(function () {

        let n1 = parseFloat($("#n1").val());
        let n2 = parseFloat($("#n2").val());
        let operacao = $("input[name='operacao']:checked").val();
        let resultado = calcular(n1, n2, operacao);

        switch (operacao) {

            case "parimpar":
                $("#resultado").html("O Número 1 é: " + parimpar(n1));
                break;

            case "posneg":
                $("#resultado").html(posneg(n1));
                break;

            default:
                $("#resultado").html("Resultado: " + resultado);
        }

    });

});

function limpar() {
    $("#n1").val("");
    $("#n1").focus();
    $("#n2").val("");
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao) {
    let resultado = 0;
    if (operacao == "soma") {
        resultado = n1 + n2;
    } else if (operacao == "sub") {
        resultado = n1 - n2;
    } else if (operacao == "mult") {                                    //pode escolher ou o switch case ou o if else pra fazer 
        resultado = n1 * n2;
    } else if (operacao == "div") {
        if (n1 == 0 && n2 == 0) {
            return "Infinito";
        } else if (n2 == 0){
            return "Não é possível dividir por 0"
        }
        resultado = n1 / n2;
    }
    return resultado;
}

function parimpar(n1) {
    if (n1 % 2 == 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

function posneg(n1) {

    if (n1 > 0) {
        return "O Número 1 é POSITIVO";
    }
    else if (n1 == 0) {
        return "O Número 1 é IGUAL A 0";
    }
    else {
        return "O Número 1 é NEGATIVO";
    }

}

/*

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            break;                                                      //pode escolher ou o switch case ou o if else pra fazer 
        case "sub":
            resultado = n1 - n2;
            break;
        case "mult":
            resultado = n1 * n2;
            break;
        case "div":
            resultado = n1 / n2;
            break;

    }*/