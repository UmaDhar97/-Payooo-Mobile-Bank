console.log("Machine Added");

//machine id--input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}
//machine->balance
function getBalance() {
  const balanceElement=document.getElementById("balance")  ;
  const balance=balanceElement.innerText;
  console.log("current balance" , Number(balance));
  return Number(balance);
}

//machine value -> set balance

function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//machine id> hide all> show id

function showOnly(id) {
    const sections = [
        "add-money",
        "cashout",
        "transfer-money",
        "get-bonus",
        "pay-bill",
        "history"
    ];

    for (const sectionId of sections) {
        document.getElementById(sectionId).classList.add("hidden");
    }

    document.getElementById(id).classList.remove("hidden");
}

// machine -> clear input value
function clearInput(id) {
    document.getElementById(id).value = "";
}

// machine -> add transaction history
function addToHistory(message) {
    const history = document.getElementById("history-container");

    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl shadow">
            ${message}
        </div>
    `;

    history.prepend(newHistory);
}