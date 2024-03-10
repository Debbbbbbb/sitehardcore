//alert ('JS carregando')

//seleção de DOM

//console.log:para verificar se está correto

var btnMenu = document.querySelector ('.btn-menu');
var menu = document.querySelector('.menu');

var btnPopup = document.querySelector ('.close');
var bgPopup = document.querySelector ('.bg-popup');


//console.log (btnMenu)
//console.log (menu)

//Eventos:ações causada pelo usuário


//Duas maneiras de chamar uma função:
//1- quero que a função seja reutilizada:

/*function boasVindas(){
    alert ('olá');
}*/

//btnMenu.addEventListener('click', boasVindas);

btnMenu.addEventListener('click', function(){
//    alert('olá2!');

    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x')

})

menu.addEventListener ('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x')
})

//Fechar a estrutura do popup ao clicar no botão x

btnPopup.addEventListener('click',function(){

    //bgPopup.classList.add('bg-popup-none');
    bgPopup.style.display = 'none';

})


