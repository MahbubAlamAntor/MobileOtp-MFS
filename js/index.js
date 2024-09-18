// document.getElementById('login-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('your-pin').value;
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('I am Okey Please Click Next Button');
//     }
//     else {
//         alert('please input right number or pin')
//     }
// })

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('your-pin').value;
    if (phoneNumber ===  '017' && pinNumber === '1234'){
        window.location.href = './home.html'
        console.log('Oi Mama Na pls.....');
    }
    else {
        alert('please enter right phone number or pin')
    }
})