document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('cash-in').classList.remove('hidden')
    document.getElementById('cash-out').classList.add('hidden')


})

document.getElementById('cash-out-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('cash-out').classList.remove('hidden');
    document.getElementById('cash-in').classList.add('hidden');
})