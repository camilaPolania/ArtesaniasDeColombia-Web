var posy = 0;
var btnOne;
var btnTwo;
var btnThree;

window.addEventListener("scroll",function(bar){
    posy = window.scrollY;
    if(posy > 200){
        console.log('hkdsfhaskfh');
        document.querySelector('.navbar').style.backgroundColor = 'orange';
    }
    else{
        document.querySelector('.navbar').style.backgroundColor = 'transparent';
    }    
});


btnOne = document.querySelector('.interaccion__container__info__btn__one');
btnOne.addEventListener("click",myFunction);

function myFunction() {
    document.getElementById("imagen").src = "./imagenes/caracteristica_01.png";
    document.getElementById("imagen").style.width = '60%';
};


btnTwo = document.querySelector('.interaccion__container__info__btn__two');
btnTwo.addEventListener("click",myFunctionTwo);

function myFunctionTwo() {
    document.getElementById("imagen").src = "./imagenes/fique01.png";
    document.getElementById("imagen").style.width = '90%';
};


btnThree = document.querySelector('.interaccion__container__info__btn__three');
btnThree.addEventListener("click",myFunctionThree);

function myFunctionThree() {
    document.getElementById("imagen").src = "./imagenes/frutero.png";
    document.getElementById("imagen").style.width = '90%';
};


