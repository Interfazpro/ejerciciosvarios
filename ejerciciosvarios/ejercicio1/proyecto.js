/*Escribir un programa de extraiga las parte 
numérica de una placa de un auto.*/
'use strict'

let placa='ABA-2138';
let number = placa.indexOf('-');
alert(placa.slice(number+1));