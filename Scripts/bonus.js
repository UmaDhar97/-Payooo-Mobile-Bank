document.getElementById("bonus-btn").addEventListener("click", function () {

    const coupon = getValueFromInput("bonus-coupon");

    if (coupon === "") {
        alert("Please enter a coupon code");
        return;
    }

    let bonusAmount = 0;

    if (coupon === "PAYOO100") {
        bonusAmount = 100;
    } else if (coupon === "PAYOO200") {
        bonusAmount = 200;
    } else {
        alert("Invalid coupon code");
        return;
    }

    const currentBalance = getBalance();
    const newBalance = currentBalance + bonusAmount;

    setBalance(newBalance);

    alert(`Bonus ${bonusAmount} Tk added successfully`);

    addToHistory(`
        Bonus Added Successfully, Coupon: ${coupon}, Bonus: ${bonusAmount} Tk, Time: ${new Date().toLocaleString()}
    `);

    clearInput("bonus-coupon");
});