"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4*a*c;

  if(D===0) {
    arr.push(-b / (2*a));
  } else {
    if(D>0) {
      arr.push((-b + Math.sqrt(D)) / (2*a));
      arr.push((-b - Math.sqrt(D)) / (2*a));
    }
  }

  return arr;
}

function checkNumberValue(value, valueName) {
  if(isNaN(value) === true) {
    return `Параметр ${valueName} содержит неправильное значение ${value}`;
    } else {
      return Number(value);
    }
}

function reportError(value, isError) {
  if(isNaN(value) === true) {
    console.log(value);
    return true;
  } else {
    return isError;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let isError = false;

  percent = checkNumberValue(percent, "percent");
  isError = reportError(percent, isError);

  contribution = checkNumberValue(contribution, "contribution");
  isError = reportError(contribution, isError);

  amount = checkNumberValue(amount, "amount");
  isError = reportError(amount, isError);

  if(isError === true) {
    return "Во введённые данных содержатся ошибки, смотрите лог консоли для подробностей.";
  }

  let today = Date.now();
  let loanBody = amount - contribution;
  let monthQuantity = (date - today) / 1000 / 60 / 60 / 24 / (365 / 12);    // вы некорректно считаете дробное количество дней в месяце, т.е. без учёта високосного года
  // let monthQuantity = (date - today) / 1000 / 60 / 60 / 24 / ((365*3 + 366) / 4 / 12);
  let monthlyPercent = (percent / 100) / 12;
  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** monthQuantity) - 1));
  let totalAmount = monthlyPayment * monthQuantity;
  totalAmount = totalAmount.toFixed(2);
  console.log("Общая сумма, которую придется заплатить клиенту = " + totalAmount);

  return totalAmount;
}
