//There will be A LOT of comments, probably will be unreadable to most but it's more helpful to me

//I haven't really used querySelector before but it looks useful :>
// selects the first elem determined by the parameter
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d") // gives context on how canvas will be rendered, in 2d, c = context

//Creates a 16 by 9 aspect ratio
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

class Player { //Create a player

    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        this.width = 100
        this.height = 100

        this.sides = {
            top: this.position.y - this.height,
            bottom: this.position.y + this.height,
            left: this.position.x - this.width,
            right: this.position.y + this.width,
        }
    }
    draw(){
        //Player customizations
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        if (this.sides.bottom < canvas.height){
            this.position.y ++
            this.sides.bottom = this.position.y + this.height
        }
    }
}

const player = new Player()

function animate(){
    console.log("Animating")
    window.requestAnimationFrame(animate) //Loops back to the function to animate

    //Create the map as well as clears the map
    c.fillStyle = "white"
    // Takes four arguments, rect stands for rectangle, basically draws a rectangle
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()
}
animate()