const loveCount = document.getElementById("love-count");
const loveBtn = document.getElementsByClassName("love-btn");
let count1 = 0;
for (const button of loveBtn) {
  button.addEventListener("click", function () {
    count1++;
    loveCount.textContent = count1;
  });
}

const copyCount = document.getElementById("copy-count");
const copyBtn = document.getElementsByClassName("copy-btn");
let count2 = 0;
for (const button of copyBtn) {
  button.addEventListener("click", function () {
    count2++;
    copyCount.textContent = count2;
  });
}


let coins = 100;
const coin = document.getElementById("coin");
coin.textContent = coins;


let callHistory = [];
const callButtons = document.querySelectorAll(".call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("You don’t have enough coins to make a call!");
      return;
    }

    coins -= 20;
    coin.textContent = coins;

    const name = btn.getAttribute("data-name");
    const number = btn.getAttribute("data-number");
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    callHistory.push({ name, number, time });

    renderHistory();
  });
}

function renderHistory() {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";

  callHistory.slice().reverse().forEach(data => {
    const div = document.createElement("div");
    div.className = "bg-gray-100 p-3 rounded-lg flex justify-between items-center shadow mt-3 mx-5";
    div.innerHTML = `
      <div>
        <h4 class=" text-2xl font-semibold">${data.name}</h4>
        <p class="text-2xl text-gray-600">${data.number}</p>
      </div>
      <p class="text-2xl text-gray-500">${data.time}</p>
    `;
    historyContainer.appendChild(div);
  });
}


document.getElementById("clear-history").addEventListener("click", () => {
  callHistory = [];
  renderHistory();
});

