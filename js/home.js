

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
   


    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);

    const pinNumberInput = document.getElementById('Input-pin-number').value;
    console.log(pinNumberInput);
})