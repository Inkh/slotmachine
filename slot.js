function slots(coins){
    for(var i = coins-1;i >= 0;i--){
        var x = Math.floor((Math.random() * 100) + 1);
        var y = Math.floor((Math.random() * 100) + 1);
        if (x === y){
            var coin = Math.floor((Math.random() * 51) + 50);
            var winning = coin + i;
            console.log("You win! Your total winnings: " + winning);
            break;
        }
        if (i === 0){
            console.log("You lose. Go home or head to the ATM.");
        }
    }
}

slots(50);
