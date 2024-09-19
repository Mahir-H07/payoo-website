

document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault()
    console.log('cashout button click');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber = document.getElementById('Cashout-pin').value;
    
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balance - cashOutNumber;

      document.getElementById('account-balance').innerText = newBalance;
    
    }
    else{
        alert('failed cash out')
    }
})