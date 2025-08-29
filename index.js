const history = []

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

document.getElementById("nation-call").addEventListener("click", function(){
    const data = {
        name : "National Emergency Number",
        number : "999",
        time: new Date().toLocaleTimeString()
    }
    history.push(data)
})


document.getElementById("history-click").addEventListener("click", function(){
    const transactionContainer = document.getElementById("History-container")
transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.number}</p>
                    <p>${data.time}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)


    }
})