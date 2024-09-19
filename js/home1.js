document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault();
    const yourNumber = document.getElementById('your-number').value;
    const yourPin = document.getElementById('your-pin').value;
    if(yourPin === '1111'){
        const availableBalance = document.getElementById('available-balance').innerText;
        
        const yourAcNumber = parseFloat(yourNumber);
        const availableBalances = parseFloat(availableBalance);
        
        const newBalance = yourAcNumber + availableBalances;

        document.getElementById('available-balance').innerText = newBalance;
    }
})