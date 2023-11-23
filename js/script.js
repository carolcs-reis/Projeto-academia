//alert('js carregado!');

//Variáveis no JS

//variável btnMenu recebe a seleção do elemento HTML que tem a classe btn-menu
var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu");

//console.log(btnMenu);
//console.log(menu);

//Eventos do Javascript
//Ao clicar no botão do meu mobile
btnMenu.addEventListener("click", function () {
  //memu.style.display = 'block';
  //menu.classList.add('menu-open');
  //menu.classList.remove('teste');

  menu.classList.toggle("menu-open");
  btnMenu.classList.toggle("x");
});

//Ao clicar na área do menu
menu.addEventListener("click", function () {
  menu.classList.remove("menu-open");
  btnMenu.classList.remove("x");
});
