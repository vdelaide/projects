const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");

const counterwrap = document.getElementById("counter-wrap");
const list = counterwrap.querySelector("ul");

function control(direction) {

    const transformValue = window.getComputedStyle(list).transform;
    let currentX = extractTranslateX(transformValue);

    function extractTranslateX(transformValue) {
        const regex = /matrix\(.*, (.*), .*, .*, .*, .*\)/;
        const match = transformValue.match(regex);
        return match ? parseFloat(match[1]) : 0;
    }

    let newTranslateX;

    if (direction === "left") {
        newTranslateX = currentX + 20;
        console.log(direction, newTranslateX, currentX)
    } else if (direction === "right") {
        newTranslateX = currentX - 20;
        console.log(direction, newTranslateX, currentX)
    }

    list.style.transform = `translateX(${newTranslateX}px)`;
}