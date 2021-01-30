function amountChange(classChange, isIncreas) {
    const inputNumber = document.getElementById(classChange +'-number');
    const countNumber = parseInt(inputNumber.value);
    let countNewNumber = countNumber;
    if(isIncreas == true){
        countNewNumber = countNumber +1;
    }
    if(isIncreas == false && countNewNumber>0 ){
        countNewNumber = countNumber -1;
    }
    inputNumber.value = countNewNumber;
   
    let totalPrice = 0;
    if(classChange == 'first'){
        totalPrice = countNewNumber*150;
    }
    if(classChange == 'economy'){
        totalPrice =countNewNumber*100;
    }
    document.getElementById(classChange +'Price').innerText = totalPrice;
    calculate()
}
function calculate(){
    
    const countFirst = getInputValue('first');
    const countEconomy = getInputValue('economy');
    const subTotal = countFirst*150 + countEconomy*100;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = Math.round(subTotal*0.1);
    document.getElementById('tex-amount').innerText = tax;

    const total = subTotal+tax;
    document.getElementById('amount').innerText = total;
}
function getInputValue(classChange){
    const ClassCount = document.getElementById(classChange +'-number');
    const countClass = parseInt(ClassCount.value);
    return countClass;
}