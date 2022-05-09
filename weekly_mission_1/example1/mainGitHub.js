// 1. Creación de un objeto con propiedades
console.log("Holi");

let myCar = new Object();   //Crea a un objeto nuevo
myCar.make = 'Ford';        //Guarda un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);     //Imprime el objeto

// 2. Declaración de un objeto con variables locales y publicas

const myModule = (() => {   //Declara una arrow function de parametros vacios

    //Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,2,3];
    const baz = "Soy un valor que va a ser expuesto";       //Se muestra el valor ya que lo llama la funcion de variable loval

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }

    // Exposición de las variables locales
    return exported
})()

console.log(myModule)