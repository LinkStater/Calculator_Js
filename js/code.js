
var N1 = "";
var N2 = "";
var Operador = null;
var Resultado = null;


function btn(param) {
    if (N1.length < 5 && Operador == null) {
        N1 = N1 + param;
        document.getElementById("_view").innerHTML = N1;
    }
    else if (N2.length < 5 && Operador != null) {
        N2 = N2 + param;
        document.getElementById("_view").innerHTML = N2;
    }

}



function Operacao(param) {


    if (N1 != "" && Resultado == null && N2 == "") {

        Operador = param;

        switch (Operador) {

            case "Soma":

                document.getElementById("_view_operador").innerHTML = "+";
                document.getElementById("_view").innerHTML = N1;

                break;

            case "Subtracao":
                document.getElementById("_view_operador").innerHTML = "-";
                document.getElementById("_view").innerHTML = N1;

                break;

            case "Multiplicacao":
                document.getElementById("_view_operador").innerHTML = "*";
                document.getElementById("_view").innerHTML = N1;

                break;

            case "Divisao":
                document.getElementById("_view_operador").innerHTML = "/";
                document.getElementById("_view").innerHTML = N1;

                break;

        }

    }

}


function Igualdade() {

    if (N2 != "") {

        N1 = parseInt(N1);
        N2 = parseInt(N2);

        switch (Operador) {

            case "Soma":
                Resultado = N1 + N2;
                document.getElementById("_view").innerHTML = Resultado;
                document.getElementById("_view_operador").innerHTML = "=";
                break;

            case "Subtracao":
                Resultado = N1 - N2;
                document.getElementById("_view").innerHTML = Resultado;
                document.getElementById("_view_operador").innerHTML = "=";
                break;

            case "Multiplicacao":
                Resultado = N1 * N2;
                document.getElementById("_view").innerHTML = Resultado;
                document.getElementById("_view_operador").innerHTML = "=";
                break;

            case "Divisao":
                Resultado = N1 / N2;
                document.getElementById("_view").innerHTML = Resultado;
                document.getElementById("_view_operador").innerHTML = "=";
                break;

        }
    }
}



function Reset() {
    N1 = "";
    N2 = "";
    Operador = null;
    Resultado = null;
    document.getElementById("_view").innerHTML = "";
    document.getElementById("_view_operador").innerHTML = "";
}




