window.addEventListener('load',function(){

    var shoppingBag__num=0;

    var shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'));
    if(shoppingBag == null){
        shoppingBag = [];
    }

    function shoppingBag__render(){
        shoppingBag.forEach(function(elem){ 
            shoppingBag__num += parseInt(elem.price);
        });
        document.querySelector('.navbar__container__items__list__bag').innerText = shoppingBag.length;
    }

    

    shoppingBag__render();

    document.querySelectorAll('.products__crafts__icon__add').forEach(function(elemento){
        elemento.addEventListener('click', function(evento){
            evento.preventDefault();
            let parent = elemento.parentElement.parentElement.parentElement;
            let products = {
                tittle : parent.querySelector('h3').innerText,
                price : parent.querySelector('h4').innerText,
            };

            shoppingBag.push(products);
            localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
            shoppingBag__render();
        });
    });




    document.querySelectorAll('.section__info__btn__design').forEach(function(elemento){
        elemento.addEventListener('click', function(evento){
            evento.preventDefault();
            let parent = elemento.parentElement.parentElement.parentElement;
            let products = {
                tittle : parent.querySelector('h1').innerText,
                price : parent.querySelector('h2').innerText,
            };

            shoppingBag.push(products);
            localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
            shoppingBag__render();
        });
    });
    console.log(shoppingBag);
});