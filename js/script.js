var buttonTotal = document.getElementsByClassName('button-total')[0];
var totalOutput = document.getElementsByClassName('total')[0];
var textSales = document.getElementsByClassName('add-sale')[0];
var discount = 20;

buttonTotal.addEventListener('click', function(){
    var chooseBurger = document.getElementById('choose-burger');
    var checkboxes = document.getElementsByClassName('add-food');
    
    for (x = 0; x < chooseBurger.length; x++) {
        if (chooseBurger.value === 'cheese') {
            var burgerPrice = 45;
        } else if (chooseBurger.value === 'home') {
            var burgerPrice = 50;
        } else if (chooseBurger.value === 'double') {
            var burgerPrice = 60;
        } else if (chooseBurger.value === 'chicken') {
            var burgerPrice = 48;
        }
    }

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            burgerPrice += parseInt(checkboxes[i].value);
        }
    }

    var sale = burgerPrice * discount / 100;

    if (textSales.value === 'SALE20') {
        burgerPrice -= sale;
    } else if (textSales.value.length > 0) {
        alert('Codice sconto errato!');
    }

    burgerPrice = burgerPrice.toFixed(2);

    totalOutput.innerHTML = burgerPrice;
});


