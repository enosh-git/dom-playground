const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const colorChanger = document.querySelector("#changeColor");
const boxColorChanger = document.querySelector(".random-color-box");
const redButton = document.querySelector(".color-btn-red");
const greenButton = document.querySelector(".color-btn-green");
const blueButton = document.querySelector(".color-btn-blue");
const boxColorChanger3 = document.querySelector(".color-box");
const inputText = document.querySelector("#inputText");
const textPreview = document.querySelector("#textPreview");
const toggleTheme = document.querySelector("#toggleTheme");


let ctr = 0;
let flag = true;

function checkCount() {
  if (ctr > 0) {
    count.classList.add("count-positive");
    count.classList.remove("count-negative");
  } else if (ctr === 0) {
    count.classList.remove("count-positive", "count-negative");
  } else if (ctr < 0) {
    count.classList.add("count-negative");
    count.classList.remove("count-positive");
  }
}

function updateCount() {
  count.textContent = ctr;
  checkCount();
}

function randomColor() {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);

  return `rgb(${color1}, ${color2}, ${color3})`;
}


increase.addEventListener("click", function () {
  ctr+=1;
  updateCount();
});

reset.addEventListener("click", function () {
  ctr = 0;
  updateCount();
});

decrease.addEventListener("click", function () {
  ctr-=1;
  updateCount();
});

colorChanger.addEventListener("click", function () {
  boxColorChanger.style.backgroundColor = randomColor();
});

redButton.addEventListener("click", function() {
  boxColorChanger3.style.backgroundColor = "red";
});

greenButton.addEventListener("click", function() {
  boxColorChanger3.style.backgroundColor = "green";
});

blueButton.addEventListener("click", function() {
  boxColorChanger3.style.backgroundColor = "blue";
});

inputText.addEventListener("input", function () {
  textPreview.textContent = inputText.value;
});

toggleTheme.addEventListener("click", function() {
  if (flag === true) {
    document.body.classList.add("dark");
    toggleTheme.textContent = "Light Mode";
    flag = false;
  } else if (flag === false) {
    document.body.classList.remove("dark");
    toggleTheme.textContent = "Dark Mode";
    flag = true;
  }
});