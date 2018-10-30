console.log("Entro a la pagina");

var posy=0;

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

document.querySelector(".material").addEventListener("change",function(){

    console.log("Filtro material");
    var url= "/tienda/"

});