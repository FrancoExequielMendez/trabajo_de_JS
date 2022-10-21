//Imprimir datos
var Apellido= "Mendez";
console.log(Apellido);
let Nota= 7;
console.log(Nota);
const Promedio= 7;
console.log(Promedio);
//Funcion de calculos matematicos
function Sumatoria(N1,N2){
    var Suma= N1+N2;
    return (Suma);
}
function Multiplicacion(N1,N2){
    var Mult= N1*N2;
    return (Mult);
}
function Divisor(N1,N2){
    var Divicion= N1/N2;
    return Divicion
}
function Resto(N1,N2){
    var Resta= N1-N2;
    return (Resta);
}
var N1=10;
var N2=30;
var Suma=Sumatoria(N1,N2);
var Mult=Multiplicacion(N1,N2);
var Divicion=Divisor(N1,N2);
var Resta=Resto(N1,N2);
console.log(Suma, Resta, Mult, Divicion);
//Array
Nota="Aprobado";
let arr=[{Apellido:"Mendez", Materia:"Programacion"}];
for(var{Apellido,Materia} of arr){
    console.log (Materia, Apellido);
    console.log ("El alumno esta: " + (Nota ? "Aprobado" : "Desaprobado"));
}
