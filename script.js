function calculateZakat() {
    var gold = parseFloat(document.getElementById("gold").value);
    var silver = parseFloat(document.getElementById("silver").value);
    var cash = parseFloat(document.getElementById("cash").value);
  
    var totalWealth = gold + (silver / 60) + cash;
    var zakatAmount = 0;
  
    if (totalWealth >= 3500) {
      zakatAmount = totalWealth * 0.025;
    }
  
    document.getElementById("result").innerHTML =
      "Your Zakat amount is: " + zakatAmount.toFixed(2) + " in your local currency.";
  }
  