function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = () => {
    return this.balance;
  },
  this.updateStatement = (value) =>
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


var bank = new MiniBankt (100);
bank.setBalance(200);
console.log("Before updated statement: " + bank.statement)
bank.printBalance;
console.log("After updated statement: " + bank.statement)

var x = prompt("What is your name?").toLowerCase();

if (x === "henry" || x === "jeffrey") {
  alert("You are Henry or Jeffrey.")
}
else {
  alert("You're neither Henry or Jeffrey.")
}

for(var i = 0; i < 10; i++) {
  var number = Math.random();
}
