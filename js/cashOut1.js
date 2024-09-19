document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('money-amount-add').value;
    // console.log(cashOutAmount);
    const cashOutAmounts = parseFloat(cashOutAmount);
    const yourPinNumber = document.getElementById('your-pin-number').value;
    if(yourPinNumber === '1212'){
        const availableBalance = document.getElementById('available-balance').innerText;
        const availableBalances = parseFloat(availableBalance)
        console.log(availableBalances, cashOutAmounts)
        newBalances = availableBalances - cashOutAmounts;
        document.getElementById('available-balance').innerText = newBalances;
    }else {
        alert ('oi mama na pls....')
    }
})