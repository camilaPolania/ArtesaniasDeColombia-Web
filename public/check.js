window.addEventListener('load', function (elem) {
    var shoppingBag__num = 0;

    var posy = 0;

    window.addEventListener("scroll", function (bar) {
        posy = window.scrollY;
        if (posy > 200) {
            console.log('hkdsfhaskfh');
            document.querySelector('.navbar').style.backgroundColor = 'orange';
        } else {
            document.querySelector('.navbar').style.backgroundColor = 'transparent';
        }
    });

    function check(elem) {
        var div = document.createElement('div');
        div.setAttribute('class', 'contain__info');

        var h1 = document.createElement('h1');
        h1.setAttribute('class', 'contain__info__tittle');
        h1.innerText = elem.price;

        var h2 = document.createElement('h2');
        h2.setAttribute('class', 'contain__info__tittle');
        h2.innerText = elem.tittle;

        div.append(h1);
        div.append(h2);

        document.querySelector('.contain__info__products').appendChild(div);
    }

    var shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'));
    if (shoppingBag == null) {
        shoppingBag = [];
    }

    shoppingBag.forEach(function (elem) {
        check(elem);
    });
});