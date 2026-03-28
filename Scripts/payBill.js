document.getElementById("bill-btn").addEventListener("click", function () {

    // 1. get bill type
    const billType = getValueFromInput("bill-type");
    if (billType === "") {
        alert("Please select a bill type");
        return;
    }

    // 2. get bill account number
    const billNumber = getValueFromInput("bill-number");
    if (billNumber.length != 11) {
        alert("Invalid bill account number");
        return;
    }

    // 3. get bill amount
    const billAmount = Number(getValueFromInput("bill-amount"));
    if (billAmount <= 0) {
        alert("Invalid bill amount");
        return;
    }

    // 4. balance check
    const currentBalance = getBalance();
    const newBalance = currentBalance - billAmount;

    if (newBalance < 0) {
        alert("Insufficient balance");
        return;
    }

    // 5. pin check
    const pin = getValueFromInput("bill-pin");
    if (pin === "1234") {
        alert(`${billType} bill paid successfully`);

        setBalance(newBalance);

        addToHistory(`
            ${billType} Bill Paid Successfully, Account: ${billNumber}, Amount: ${billAmount} Tk, Time: ${new Date().toLocaleString()}
        `);

        clearInput("bill-number");
        clearInput("bill-amount");
        clearInput("bill-pin");
        document.getElementById("bill-type").value = "";

    } else {
        alert("Invalid pin");
        return;
    }

});