function slots(coins){
    var counter = 0;
    for(var i = coins-1;i >= 0;i--){
        var x = Math.floor((Math.random() * 100) + 1);
        var y = Math.floor((Math.random() * 100) + 1);
        if (x === y){
            var pay = Math.floor((Math.random() * 51) + 50);
            // var winning = coin += i;
            counter += 1;
            i += pay;
            console.log(counter + ". You win! Your total winnings: " + i);
            //i+=pay;
            //break;
        }
        else {
            counter += 1;
            console.log(counter + ". You lost this round")
        }
        if (i === 0){
            console.log("You lose. Go home or head to the ATM.");
        }
    }
}
//Go big or go home!
//slots(50);
slots(100);
//slots(0);
//make over 300
