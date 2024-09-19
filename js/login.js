// step - 1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){
  //  step - 2 prevent default behavior (prevent reloading browser)
  event.preventDefault();

//  step - 3 get the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  console.log(phoneNumber);
  console.log(pinNumber);

  // step - 4 validate phone and pin
  if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
    // step-5: allow user to use the website
  }else{
    alert('Wrong phone Number or Pin');
  }

})
