let btn = document.querySelector("#btn");

btn.addEventListener("click",guessGame);

function guessGame(){
    let max = prompt("Enter the maximum number:");
    console.log(max);

    num = Math.floor(Math.random()*max)+1;
    console.log(num);

    let guess = prompt("Please enter your guess for the random number generated:");

    while(true){
        if(guess=="quit"){
            alert("You quit!")
            console.log("you quit!");
            break;
        }
        if(guess==num){
            alert("You are right! congrats!!")
            console.log("you are right! congrats!!");
            break;
        }else if(guess < num){
            guess = prompt("hint: your guess is too small. please try again:");
        }else{
            guess = prompt("hint: your guess is too large. please try again:");
        }
    }
}

// let max = prompt("Enter the maximum number:");
// console.log(max);

// num = Math.floor(Math.random()*max)+1;
// console.log(num);

// let guess = prompt("Please enter your guess for the random number generated:");

// while(true){
//     if(guess=="quit"){
//         console.log("you quit!");
//         break;
//     }
//     if(guess==num){
//         console.log("you are right! congrats!!");
//         break;
//     }else if(guess < num){
//         guess = prompt("hint: your guess is too small. please try again:");
//     }else{
//         guess = prompt("hint: your guess is too large. please try again:");
//     }
// }