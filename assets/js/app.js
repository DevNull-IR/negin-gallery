// Color Selector
let colors = document.querySelectorAll('.color');
colors.forEach(function (element) {
    element.addEventListener('click', function (event) {
        document.querySelectorAll('.color').forEach(function (el) {
            el.classList.remove('active');
            element.classList.add('active');
        })
    });
});

// Runner With
let runner = document.querySelectorAll(".selector-input");
// let input_run = document.querySelector("#runner-input");
function runner_app (runner, element) {
    runner.forEach(function (el) {
        console.log(el)
        el.addEventListener("click", function (ev) {
            element.querySelector('.active').classList.remove("active");
            el.classList.remove('active');
            el.classList.add("active");
            el.parentNode.parentNode.querySelector('input.output').value = el.getAttribute("name");
        });
    });
}
console.log(runner)
runner.forEach(function (element) {
    runner_app(element.querySelectorAll('div'), element);
})

document.addEventListener("click", function () {
});

// const runWithOptions = document.getElementById("run-with");
// let activeOption = document.querySelector("#run-with div.active");
// let initialX = null;
//
// runWithOptions.addEventListener("pointerdown", function (event) {
//     initialX = event.pageX - activeOption.offsetLeft;
//
//     document.addEventListener("pointermove", moveCallback);
//     document.addEventListener("pointerup", endCallback);
//     //   activeOption.classList.add('transition');
// });
//
// function moveCallback(event) {
//     event.preventDefault();
//     const moveX = event.pageX - initialX;
//
//     //   activeOption.style.transform = `translateX(${moveX}px)`;
//
//     const nextOption = determineNextOption(moveX);
//
//     if (nextOption) {
//         if (nextOption !== activeOption) {
//             activeOption.classList.remove("active");
//             activeOption = nextOption;
//             activeOption.classList.add("active");
//             input_run.value = activeOption.getAttribute("name");
//             document.querySelectorAll("#run-with div").forEach((element) => {
//                 element.classList.remove("active");
//                 if (element == nextOption) {
//                     element.classList.add("active");
//                 }
//             });
//         }
//     }
// }
//
// function determineNextOption(moveX) {
//     let nextOption = null;
//     const options = Array.from(runWithOptions.children);
//
//     options.forEach(function (option) {
//         const optionBounds = option.getBoundingClientRect();
//
//         if (optionBounds.left <= moveX && moveX <= optionBounds.right) {
//             nextOption = option;
//         }
//     });
//
//     return nextOption;
// }
//
// function endCallback() {
//     document.removeEventListener("pointermove", moveCallback);
//     document.removeEventListener("pointerup", endCallback);
//
//     activeOption.style.transform = "";
// }


let counter = document.querySelectorAll('.selector-count .counter');
counter.forEach(function (value){
    value.addEventListener('click', function (){
        document.querySelectorAll('.selector-count .counter').forEach(function (el){
            el.classList.remove('active');
        });
        value.classList.add('active');
    })
})
