// function input value
function inputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputAmount = parseFloat(input.value);
  console.log(inputAmount);
  if (isNaN(inputAmount) || inputAmount < 0) {
    return alert("You can't input negative amount of money");
  } else {
    return inputAmount;
  }
}
// calculate Button

document.getElementById("cal-btn").addEventListener("click", function () {
  const income = inputValue("income");
  const food = inputValue("food");
  const rent = inputValue("rent");
  const clothes = inputValue("clothes");

  if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert("You can't input negative amount of money");
  } else {
    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;
    if (totalExpense <= income) {
      document.getElementById("totalExpenses").innerText = totalExpense;
      document.getElementById("balance").innerText = balance;
    } else {
      alert("Sorry!! Not enough balance for saving");
    }
  }
});

// Saving calculate Button
document.getElementById("save-btn").addEventListener("click", function () {
  const income = inputValue("income");
  const remaining = document.getElementById("balance").innerText;
  const save = inputValue("save");
  if (save <= 100) {
    const totalSaving = (income * save) / 100;
    if (totalSaving < parseFloat(remaining)) {
      const remaingBalance = parseFloat(remaining) - totalSaving;
      document.getElementById("savingAmount").innerText = totalSaving;
      document.getElementById("remaningAmount").innerText = remaingBalance;
    } else {
      alert("Your remaining balance is less then the amount you want save.");
    }
  } else {
    alert("Select the pereentage between 0 to 100");
  }
});
