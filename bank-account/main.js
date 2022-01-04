let account = function (name, balance){

    account.name = name;
    account.balance = balance;
  
    account.deposit = function (depositAmount) {
      newBalance = account.balance - depositAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
    };
  
    account.withdraw = function (withdrawAmount){
      newBalance = account.balance - withdrawAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
  
    };
  
    account.transfer = function (transferAmount){
  
    }
  
    console.log("Name: " + name + "; Balance: " + balance);
  }
  
  
  let AustinAccount = new account ("Austin", 500);
  let KateAccount = new account ("Kate", 10000);
  let GingerAccount = new account ("Ginger", 70000000);
  let GregAccount = new account ("Greg", 900000000);