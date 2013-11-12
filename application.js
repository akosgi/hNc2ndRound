$(document).ready(function(){
    var rightNum=Math.floor(Math.random()*10);
    var oldNum = 0;
    console.log(rightNum);
    goToBAM = function(){
        window.open("http://www.bigassmessage.com/f25fa");
    }
    guessNumber = function(theGuess){
        console.log(theGuess);
        var guessNum=theGuess;
        if(rightNum == guessNum){
            $('#feedback').html("<p> SPOT ON! </p> <input type='button' value='Play Again?' onClick='window.location.reload()'/>");
            goToBAM();
        }
        else if(Math.abs(rightNum-guessNum) < 3){
            $('#feedback').html('<p> HOT! Try Again. </p>');
        }else{
            $('#feedback').html('<p> COLD! Try Again. </p>');
        };
        
    };
});
