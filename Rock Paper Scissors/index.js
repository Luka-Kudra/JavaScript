let hands = ["rock", "paper", "scissor"]
let computerHand = hands[Math.floor(Math.random()*3)]
let myHand = hands[Math.floor(Math.random()*3)]

console.log("Computer:",computerHand)
console.log("You:",myHand)

if (computerHand === myHand){
    console.log("draw")
} else if (computerHand === "rock" && myHand === "paper"){
    console.log("you win")
} else if (computerHand === "paper" && myHand === "scissor"){
    console.log("you win")
} else if (computerHand === "scissor" && myHand === "rock"){
    console.log("you win")
} else if (computerHand === "scissor" && myHand === "paper"){
    console.log("you lose")
} else if (computerHand === "rock" && myHand === "scissor"){
    console.log("you lose")
}  else if (computerHand === "paper" && myHand === "rock"){
    console.log("you lose")
}