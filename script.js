const resultList = document.getElementById("resultList");
const newResultInput = document.getElementById("newResult");
const output = document.getElementById("output");

let multipliers = [];

function addResult() {
  const val = parseFloat(newResultInput.value.trim());
  if (!isNaN(val)) {
    multipliers.push(val);
    updateList();
    predict();
    newResultInput.value = "";
    newResultInput.focus();
  }
}

function updateList() {
  resultList.innerHTML = "";
  multipliers.forEach((value, index) => {
    const li = document.createElement("li");
    li.textContent = `#${index + 1}: ${value.toFixed(2)}x`;
    resultList.appendChild(li);
  });
}

function predict() {
  if (multipliers.length < 9) {
    output.textContent = `⚠️ Enter at least 9 multipliers to predict. (${multipliers.length}/9)`;
    return;
  }

  const lastNine = multipliers.slice(-9);
  const avg = lastNine.reduce((a, b) => a + b) / lastNine.length;

  let prediction = "🟢 Safe Zone (1.10x – 2x)";
  if (avg > 3) prediction = "🟠 Risk Zone (2x – 10x)";
  if (avg > 8) prediction = "🔴 High Risk (10x+)";

  output.textContent = `Predicted Zone: ${prediction}`;
}

// Optional: Press "Enter" to add result
newResultInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addResult();
  }
});
