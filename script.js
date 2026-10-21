const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");

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


