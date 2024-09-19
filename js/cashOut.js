document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const yourPin = document.getElementById('your-pin').value;
    const yourAmount = document.getElementById('out-amount').value;

    if (yourPin === '1212') {
        const availableBalance = document.getElementById('available-balance').innerText;
        myAvailableBalance = parseFloat(availableBalance);
        const yoursAmount = parseFloat(yourAmount);

        if (yourAmount > 0) {
            newBalance = myAvailableBalance - yoursAmount;
            document.getElementById('available-balance').innerText = newBalance;
        }

    } else {
        alert('sorry! try again later......')
    }
})