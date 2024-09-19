
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
   

    const addMoney = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('Input-pin-number').value;


    if(pinNumberInput === '1234'){
      
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance

        
    }
    else{
        alert('failed to try again')
    }
})