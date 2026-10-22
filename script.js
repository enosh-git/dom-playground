const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const colorChanger = document.querySelector("#changeColor");
const boxColorChanger = document.querySelector(".random-color-box");

let ctr = 0;


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

