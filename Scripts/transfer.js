document.getElementById("transfer-btn").addEventListener("click", function () {

    // 1. get user account number
    const transferNumber = getValueFromInput("transfer-number");
    if (transferNumber.length != 11) {
        alert("Invalid user account number");
        return;
    }

    // 2. get transfer amount
    const transferAmount = Number(getValueFromInput("transfer-amount"));
    if (transferAmount <= 0) {
        alert("Invalid transfer amount");
        return;
    }

    // 3. get current balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - transferAmount;

    if (newBalance < 0) {
        alert("Insufficient balance");
        return;
    }

    // 4. pin check
    const pin = getValueFromInput("transfer-pin");
    if (pin === "1234") {
        alert("Transfer successful");

        setBalance(newBalance);

        addToHistory(`
            Transfer Money Success to Account: ${transferNumber}, Amount: ${transferAmount} Tk, Time: ${new Date().toLocaleString()}
        `);

        clearInput("transfer-number");
        clearInput("transfer-amount");
        clearInput("transfer-pin");

    } else {
        alert("Invalid pin");
        return;
    }

});