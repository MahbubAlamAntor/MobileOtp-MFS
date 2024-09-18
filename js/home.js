document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault();
    const yourPin = document.getElementById('your-pin').value;
    const yourNumber = document.getElementById('your-number').value;
    // console.log(yourNumber)
    if(yourPin === '1234' && yourNumber > 20){
        const yourBalance = document.getElementById('available-balance').innerText;
        
        const yourNumbers = parseFloat(yourNumber);
        const yourBalances = parseFloat(yourBalance)
        
        const newNumber = yourNumbers + yourBalances;
        
        document.getElementById('available-balance').innerText = newNumber;
        
    }
    else{
        alert('er parlam na mamu')
    }
})