const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

document.querySelector("#ani").addEventListener("click", function() {
    document.querySelector("#animal").style.display = "flex";
});

document.querySelector("#ani").addEventListener("mouseleave", function() {
    document.querySelector("#animal").style.display = "none";
});

document.querySelector("#bir").addEventListener("click", function() {
    document.querySelector("#bird").style.display = "flex";
});

document.querySelector("#bir").addEventListener("mouseleave", function() {
    document.querySelector("#bird").style.display = "none";
});

document.querySelector("#but").addEventListener("click", function() {
    document.querySelector("#butterfly").style.display = "flex";
});

document.querySelector("#but").addEventListener("mouseleave", function() {
    document.querySelector("#butterfly").style.display = "none";
});

document.querySelector("#fis").addEventListener("click", function() {
    document.querySelector("#fish").style.display = "flex";
});

document.querySelector("#fis").addEventListener("mouseleave", function() {
    document.querySelector("#fish").style.display = "none";
});

document.querySelector("#flo").addEventListener("click", function() {
    document.querySelector("#flower").style.display = "flex";
});

document.querySelector("#flo").addEventListener("mouseleave", function() {
    document.querySelector("#flower").style.display = "none";
});

document.querySelector("#tre").addEventListener("click", function() {
    document.querySelector("#tree").style.display = "flex";
});

document.querySelector("#tre").addEventListener("mouseleave", function() {
    document.querySelector("#tree").style.display = "none";
});

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