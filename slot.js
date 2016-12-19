function slots(){
    for(var i = 100;i >= 0;i--){
        var x = Math.trunc((Math.random() * 100) + 1);
        if (x === 1){
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

slots();
