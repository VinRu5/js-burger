var buttonTotal = document.getElementsByClassName('button-total')[0];

var totalOutput = document.getElementsByClassName('total')[0];

var textSales = document.getElementsByClassName('add-sale')[0];



buttonTotal.addEventListener('click', function(){
    var checkboxes = document.getElementsByClassName('add-food');
    
    var burgerPrice = 50;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            burgerPrice += parseInt(checkboxes[i].value);
        }
    }

    var sale20 = burgerPrice * 20 / 100;

    if (textSales.value === 'SALE20') {
        burgerPrice -= sale20;
    }

    burgerPrice = burgerPrice.toFixed(2);

    totalOutput.innerHTML = burgerPrice;
});


