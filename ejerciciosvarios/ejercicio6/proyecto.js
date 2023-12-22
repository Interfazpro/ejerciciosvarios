/*Escribir un programa que obtenga el nombre 
de usuario de facebook desde la url.
#Ejemplo
Entrada: facebook.com/nombreuser
Salida: nombreuser */


let urlInstagram = 'Instagram.com/eddie';
let slash = urlInstagram.lastIndexOf('/');
let nombreusuario = urlInstagram.slice(slash + 1);

alert('su usuario es: ' + nombreusuario);