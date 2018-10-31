console.log("Entro a la pagina");

var posy=0;

window.addEventListener("scroll",function(bar){
    posy = window.scrollY;
    if(posy > 50){
        console.log('hkdsfhaskfh');
        document.querySelector('.navbar').style.backgroundColor = 'orange';
    }
    else{
        document.querySelector('.navbar').style.backgroundColor = 'black';
    }    
});
