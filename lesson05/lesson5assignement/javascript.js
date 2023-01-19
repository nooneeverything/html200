let balance = 100;

  function banking() {
  let Prompt = prompt("Please choose one of the following options:  Q to Quit / W to Withdraw / D to Deposit / B to View Balace");

  switch (Prompt) {
    case "Q":
      function quit() {
        let quitapp = "quit bank app";
        console.log(quitapp);
      }
      quit();
      break;

    case "W":
      function Withdraw() {
        let withdraw = prompt("How much would you like to withdraw?");
        balance = balance - withdraw;

        alert("Amount withdrawn-" + withdraw + "; New balance: $" + balance);
      }
      Withdraw();
      break;

    case "D":
      function Deposit() {
        let deposit = prompt("Amount to be deposited:");
        balance= parseInt(balance) + parseInt(deposit);
        alert("Deposit-" + deposit + "; New balance: $" + balance);
      }
      Deposit();
      break;


      case "B":
      function Balance() {

        alert("Your balance is - $" + balance);
      }
      Balance();
      break;


    default:
      console.log("Menu is unavaibale");
  }
}
