const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

document.querySelector("#ani").addEventListener("mouseover", function () {
  document.querySelector("#animal").style.display = "flex";
  document.querySelector("#butterfly").style.opacity = 1;
});

document.querySelector("#ani").addEventListener("mouseleave", function () {
  document.querySelector("#animal").style.display = "none";
});

document.querySelector("#bir").addEventListener("mouseover", function () {
  document.querySelector("#bird").style.display = "flex";
});

document.querySelector("#bir").addEventListener("mouseleave", function () {
  document.querySelector("#bird").style.display = "none";
});

document.querySelector("#but").addEventListener("mouseover", function () {
  document.querySelector("#butterfly").style.display = "flex";
});

document.querySelector("#but").addEventListener("mouseleave", function () {
  document.querySelector("#butterfly").style.display = "none";
});

document.querySelector("#fis").addEventListener("mouseover", function () {
  document.querySelector("#fish").style.display = "flex";
});

document.querySelector("#fis").addEventListener("mouseleave", function () {
  document.querySelector("#fish").style.display = "none";
});

document.querySelector("#flo").addEventListener("mouseover", function () {
  document.querySelector("#flower").style.display = "flex";
});

document.querySelector("#flo").addEventListener("mouseleave", function () {
  document.querySelector("#flower").style.display = "none";
});

document.querySelector("#tre").addEventListener("mouseover", function () {
  document.querySelector("#tree").style.display = "flex";
});

document.querySelector("#tre").addEventListener("mouseleave", function () {
  document.querySelector("#tree").style.display = "none";
});

//Runner

let count = 0;
const runner = document.getElementById("digitRunner");

function updateRunner() {
  count += 10;
  runner.textContent = count + "+";
  if (count < 5450) {
    // You can change 100 to any limit you want
    setTimeout(updateRunner, 1); // Adjust speed by changing 100 (milliseconds)
  }
}

// Start the digit runner
updateRunner();

let countt = 0.0;
const runner1 = document.getElementById("percentcounter");

function updateRunnerr() {
  countt += 0.02;
  runner1.textContent = countt.toFixed(2) + "%";
  if (countt <= 9.34) {
    // You can change 100 to any limit you want
    setTimeout(updateRunnerr, 1); // Adjust speed by changing 100 (milliseconds)
  }
}

// Start the digit runner
updateRunnerr();

let counttt = 0;
const runner2 = document.getElementById('tigpop');

    function updateRunnerrr() {
        counttt+=1;
        runner2.textContent = counttt + "%";
        if (counttt <= 24) { // You can change 100 to any limit you want
            setTimeout(updateRunnerrr, 100); // Adjust speed by changing 100 (milliseconds)
        }
    }

    // Start the digit runner
    updateRunnerrr();

let countttt = 0;
const runner3 = document.getElementById('agriland');

    function updateRunnerrrr() {
        countttt+=0.2;
        runner3.textContent = countttt.toFixed(2) + "%";
        if (countttt <= 54.4) { // You can change 100 to any limit you want
            setTimeout(updateRunnerrrr, 1); // Adjust speed by changing 100 (milliseconds)
        }
    }

// Start the digit runner
updateRunnerrrr();
// const counts = document.querySelectorAll('.count')
// const speed = 97

// counts.forEach((counter) => {
//     function upDate(){
//         const target = Number(counter.getAttribute('data-target'))
//         const count = Number(counter.innerText)
//         const inc = target / speed
//         if(count < target){
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upDate, 15)
//         }else{
//             counter.innerText = target
//         }
//     }
//     upDate()
// })

// function animateCounter(elementId, start, target, speed) {
//     let counterElement = document.getElementById(elementId);
//     let count = start;

//     function updateCounter() {
//         if (count < target) {
//             count++;
//             counterElement.innerText = count;
//             setTimeout(updateCounter, speed);
//         }
//     }

//     updateCounter();
// }

// // Add multiple counters
// animateCounter('counter1', 0, 100, 50);  // Counter 1: from 0 to 100, speed 50ms
// animateCounter('counter2', 50, 200, 50); // Counter 2: from 50 to 200, speed 30ms
// animateCounter('counter3', 10, 150, 50); // Counter 3: from 10 to 150, speed 70ms
