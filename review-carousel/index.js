const container = document.querySelector('#review-container');

function moveCarousel(direction){
    const firstCard = container.firstElementChild
    const lastCard = container.lastElementChild

    if (direction === "right"){
        container.insertBefore(lastCard, firstCard) // Move the last card to the front
    }
    else if (direction === "left"){
        container.insertBefore(firstCard, lastCard) // Move the last card to the front
    }
    
}