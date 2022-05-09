/*
Ten en cuenta:
    - require('./logger') me da un objeto creado
    - require('./logger').Logger me regresará la clase
    
En este caso estamos agregando una función más al objeto instanciado, no a la clase.
*/

require('./logger').customMessage = function () {   // con el .customMessage = function (){} declaro que le agrego una nueva función a el objeto logger
    console.log('This is a new functionality');
}