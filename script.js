const history = [];

function addMultiplier() {
  const input = document.getElementById("multiplierInput");
  const value = parseFloat(input.value);
  if (!isNaN(value)) {
    history.push(value);
    updateUI();
    input.value = "";
  }
}

function updateUI() {
  const list = document.getElementById("historyList");
  list.innerHTML = history.map((h, i) => `<li>Round ${i + 1}: ${h}x</li>`).join("");
  document.getElementById("prediction").innerText = getPredictionFromHistory(history);
}

function getPredictionFromHistory(history) {
  if (history.length < 5) return "Need more data to predict.";
  const avg = history.slice(-5).reduce((a, b) => a + b, 0) / 5;
  if (avg < 2) return "Low crash likely again.";
  else return "Chance of 2x+ incoming.";
}
