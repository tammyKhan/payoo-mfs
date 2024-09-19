document.getElementById('btn-cash-out').addEventListener('click',function(event){
  event.preventDefault();

  const cashOut = document.getElementById('input-cash-out').value;
  const cashOutPin = document.getElementById('input-cash-out-pin').value;

  console.log(cashOut);
  console.log(cashOutPin);

  if(cashOutPin === '1234'){    
    const balance = document.getElementById('account-balance').innerText;
    const addCashNumber = parseFloat(cashOut);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - addCashNumber;

    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance;

  }else{
    alert('please try again later')
  }

})