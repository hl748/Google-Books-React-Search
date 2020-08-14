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
