/*const primerTopping = document.querySelector('.topping');

primerTopping.style.backgroundColor = 'blue';

primerTopping.style.color = '#6dff00';*/

//const titulo= document.getElementById('titulo');

//const enlace = document.getElementsByTagName("a");

//console.log(enlace[0].getAttribute('href'));

const primerTopping = document.querySelector('.topping');
                     //CLASES

//primerTopping.classList.add('texto-verde')

//console.log(primerTopping.classList.contains('fondo-marron'));

//primerTopping.classList.remove('topping');

                //CREAR UN ELEMENTO EN EL DOM

/*const listaDeToppings= document.getElementById('lista-toppings');

const toppingNuevo= document.createElement('li');

toppingNuevo.classList.add('topping', 'fondo-marron');

toppingNuevo.innerText= "Queso Extra";

listaDeToppings.append(toppingNuevo);

toppingNuevo.remove();*/

                    //NODO PADRE
/*const listaDeToppings= document.getElementById('lista-toppings');  
//console.log(listaDeToppings.parentElement.parentElement);
console.log(listaDeToppings.children); */ 

//metodo .ADDEVENTLISTENER

/*const albahaca = document.getElementById('albahaca');

function mostrarClic(e){
    console.log(e.target.innerText);
}

albahaca.addEventListener('click', mostrarClic);*/

const toppings= document.getElementsByClassName('topping');

function mostrarClic(e){
    console.log(e.target.innerText);
}

for (const topping of toppings){
    topping.addEventListener('click', mostrarClic);
}







