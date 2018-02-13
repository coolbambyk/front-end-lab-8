let access = confirm("Do you want to play a game?");

if(access) {
    let maxRange = 5, count = 3, guess, prize = 10, currentPrize = prize, totalPrize = 0;
    let ProgNum = Math.floor(Math.random() * 1000000000)  %  maxRange;

    while(count > 0) {
        Playerchoise = +prompt("Enter a number from 0 to " + maxRange +
                         "\nAttempts left:" + count +
                         "\nTotal prize:" + totalPrize + "$" +
                         "\nPossible prize on current attempt:" + currentPrize +"$", "");


         if(Playerchoise === ProgNum){
             let continueGame = confirm("Do you want to continue game?");
             totalPrize += currentPrize;
             if(continueGame){
                 maxRange *= 2;
                 ProgNum = Math.floor(Math.random() * 1000000000)  %  maxRange;
                 prize *= 3;
                 currentPrize = prize;
                 count = 3;
                 continue;
             } else {
                 console.log("Thank you for a game. Your prize is:" + totalPrize + "$");
                 break
             }
         }

        if (count === 1 && Playerchoise !== ProgNum){
            console.log("Thank you for a game. Your prize is:" + totalPrize);
            let playMore = confirm("Do you want to play again?");
            if(playMore){
                maxRange = 5;
                count = 3;
                prize = 10;
                currentPrize = prize;
                totalPrize = 0;
                ProgNum = Math.floor(Math.random() * 1000000000)  %  maxRange;
                continue;
            } else {
                console.log("You did not become a millionaire");
                break;
            }
        }

        currentPrize = Math.floor(currentPrize / 2);
        count--;
    }

} 