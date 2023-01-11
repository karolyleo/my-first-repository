function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price, change = [], currencyUnits = [{name: "ONE HUNDRED", value: 100.00},{name: "TWENTY", value: 20.00},{name: "TEN", value: 10.00},{name: "FIVE", value: 5.00},{name: "ONE", value: 1.00},{name: "QUARTER", value: 0.25},{name: "DIME", value: 0.10},{name: "NICKEL", value: 0.05},{name: "PENNY", value: 0.01}
  ];
  let cidTotal = cid.reduce((acc, cur) => acc + cur[1], 0);
  // check if cash in drawer is less than change due
  if (cidTotal < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }// check if cash in drawer is equal to change due
  else if (cidTotal === changeDue) {
    return {status: "CLOSED", change: cid};
  }// cash in drawer is greater than change due
  else {
    currencyUnits.forEach(unit => {
      let coinName = unit.name, coinValue = unit.value, coinTotal = cid.find(c => c[0] === coinName)[1], coinAmount = 0;
      while(changeDue >= coinValue && coinTotal > 0) {
        changeDue -= coinValue;
        coinTotal -= coinValue;
        coinAmount += coinValue;
        changeDue = Math.round(changeDue * 100) / 100;
      }
      if (coinAmount > 0) {
        change.push([coinName, coinAmount]);
      }
    });
  }// check if changeDue is greater than 0 and return appropriate object
  if (changeDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    return {status: "OPEN", change: change};
  }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);