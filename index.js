const loveCount = document.getElementById("love-count");
const loveBtn = document.getElementsByClassName("love-btn");
let count1 = 0;
for(const button of loveBtn){
    console.log("btn click")
    button.addEventListener("click",function(){
        count1 ++;
        loveCount.textContent = count1;
})
}


const copyCount = document.getElementById("copy-count");
const copyBtn = document.getElementsByClassName("copy-btn");
let count2 = 0;
for(const button of copyBtn){
    console.log("btn click")
    button.addEventListener("click",function(){
        count2 ++;
        copyCount.textContent = count2;
})
}

let coins = 100;
const coin = document.getElementById("coin");
const callBtn = document.getElementsByClassName("call-btn");
for(const btn of callBtn){
    btn.addEventListener("click",function(){
    if(coins >= 20){
        coins -= 20;
        coin.textContent = coins;
    } else{
        alert("You have not enough coin.")
    }
})
}