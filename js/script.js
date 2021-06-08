var buttonTotal = document.getElementsByClassName('button-total')[0];
var totalOutput = document.getElementsByClassName('total')[0];
var textSales = document.getElementsByClassName('add-sale')[0];
var burgerOutput = document.getElementById('burger-name');
var discount = 20;

var burgerName = prompt('Inserisci il nome del tuo Burger!');
burgerOutput.innerHTML = burgerName;



buttonTotal.addEventListener('click', function(){
    var checkboxes = document.getElementsByClassName('add-food');
    
    var burgerPrice = 50;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            burgerPrice += parseInt(checkboxes[i].value);
        }
    }

    var sale = burgerPrice * discount / 100;

    if (textSales.value === 'SALE20') {
        burgerPrice -= sale;
    }

    burgerPrice = burgerPrice.toFixed(2);

    totalOutput.innerHTML = burgerPrice;
});


