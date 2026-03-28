document.getElementById("cashout-btn").addEventListener("click",function () {
    //1 get the agent number and validate
    const cashoutNumber=getValueFromInput("cashout-number");
if (cashoutNumber.length !=11) {
    alert("invalid number");
    return;
}
    //2- get the amount ,validate,convert to number
    const cashoutAmount=getValueFromInput("cashout-amount");

     const currentBalance=getBalance();

//4-calculate new balance 
const newBalance=currentBalance-Number(cashoutAmount);
console.log(newBalance);
if (newBalance<0) {
    alert("invalid amount");
    return;
}
const pin=getValueFromInput("cashout-pin");
if (pin==='1234') {
   alert("cashout successfull") ;
  setBalance(newBalance);


  //1-history container declare
    const history = document.getElementById("history-container");

    //2- create new div
    const newHistory= document.createElement("div");

    //3. add new html in new div

    newHistory.innerHTML=  `
    <div class="transaction-card p-5 bg-base-100">
                Cashout ${cashoutAmount} TAKA Success to  ${cashoutNumber}, at ${new Date()}
    </div>
    `;

    //4- newdiv append in history container

       history.append( newHistory);
} 
else{
    alert("invalid pin");
    return;
}
});
// document.getElementById("cashout-btn").addEventListener("click",function(){
//     //1 get the agent number and validate
//  const cashoutNumberInput = document.getElementById("cashout-number");
//  const cashoutNumber = cashoutNumberInput.value;
//  console.log(cashoutNumber);
//  if (cashoutNumber.length !=11) {
//     alert("Invalid Agent Number");
//     return;
//  }

//     //2- get the amount ,validate,convert to number
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount);

//     //3- get current balance,validate,convert to number
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);

//     //4-calculate new balance
//     const newBalance=Number(balance) - Number(cashoutAmount);
    
//     if(newBalance<0){
//         alert("Invalid Amount");
//         return;
//     }
   
//     //5-get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin=='1234') {
//         //5-1 true::: show an alert> set balance
//      alert("cashout successful");
//       console.log("new balance", newBalance);
//       balanceElement.innerText=newBalance;
//     }else{
// //5-2 False:::show an error alert > return

// alert("invalid pin");
// return;
//     }
// });