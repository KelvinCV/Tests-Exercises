// Método de Newton-Raphson;

var xi = parseInt(prompt("valor de x:"));
var xf;
var precisao = 0.001; 

function f(x) {
    return 2-(x*x); // inserir aqui a equação;

}

function derivada(x) {
    return -2*x; // inserir aqui o valor da derivada da equação;
}


while ( Math.abs(f(xi)) > precisao){
     xf = xi - (f(xi)/derivada(xi))
    document.write(xf + "<br>");
    xi = xf;
}
