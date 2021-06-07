var buttonTotal = document.getElementsByClassName('button-total')[0];

var totalOutput = document.getElementsByClassName('total')[0];

buttonTotal.addEventListener('click', function(){
    var checkboxes = document.getElementsByClassName('add-food');
    
    var result = 50;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += parseInt(checkboxes[i].value);
        }
    }

    totalOutput.innerHTML = result;
});