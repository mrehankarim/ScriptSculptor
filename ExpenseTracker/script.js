let expense = document.querySelector("#expense");
let income = document.querySelector("#income");
let transactionCont = document.querySelector(".transaction-history");
let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let btn = document.querySelector("button");
let balance = document.querySelector("#balance");
//This function takes both inputs and validate them
const checkInput = (inputArray) => {
  let count = 0;
  inputArray.forEach((input) => {
    if (input.value === "") {
      const small = input.nextElementSibling;
      small.innerText = "Enter valid input";
      small.style.visibility = "visible";
      count++;
    } else {
      const small = input.nextElementSibling;
      small.innerText = "message";
      small.style.visibility = "hidden";
    }
  });
  return count;
};
//This function updates value of Expense and income
const addExpense = (amount) => {
  if (amount >= 0) {
    let currentIncome = parseInt(income.innerText);
    currentIncome += amount;
    income.innerText = currentIncome.toString();
  } else {
    let currentIncome = parseInt(expense.innerText);
    currentIncome += amount;
    expense.innerText = currentIncome.toString();
  }
};
//it calls all the functions and also Add transaction history block
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkInput([description, amount]) === 0) {
    addExpense(parseInt(amount.value));
    balance.innerText = (
      parseInt(income.innerText) + parseInt(expense.innerText)
    ).toString();
    let box = document.createElement("div");
    box.innerText = description.value;
    if (parseInt(amount.value) >= 0) {
      box.classList = "transaction border-right-income";
    } else {
      box.classList = "transaction border-right-expense";
    }
    transactionCont.insertBefore(box, transactionCont.children[1]);
  }
});
