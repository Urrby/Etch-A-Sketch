const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const { width, height } = canvas;
let x  = Math.floor(Math.random() * width);
let y  = Math.floor(Math.random() * height);
let moveAmmount = 10;

const btn_black = document.querySelector("#btn_black");
const btn_red = document.querySelector("#btn_red");
const btn_blue = document.querySelector("#btn_blue");
const btn_green = document.querySelector("#btn_green");
const btn_yellow = document.querySelector("#btn_yellow");
const btn_plus = document.querySelector("#btn_plus");
const btn_minus = document.querySelector("#btn_minus");
const btn_round = document.querySelector("#btn_round");
const btn_square = document.querySelector("#btn_square");
const btn_erase = document.querySelector("#btn_erase");
const buttons = document.querySelectorAll(`[type="button"]`);


ctx.lineWidth = 20;
ctx.strokeStyle = `rgba(0, 0, 0, 1)`;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(e) {
    let { key } = e;
    if(key.includes("Arrow")) {
        e.preventDefault();
        ctx.beginPath();
        ctx.moveTo(x, y);
        switch(key) {
            case "ArrowUp":
                y -= moveAmmount;
                break;
            case "ArrowDown":
                y += moveAmmount;
                break;
            case "ArrowRight":
                x += moveAmmount;
                break;
            case "ArrowLeft":
                x -= moveAmmount;
                break;
    
        }
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function buttonHandler({ currentTarget }) {
    switch(currentTarget.id) {
        case "btn_erase":
            resetCanvas();
            break;
        case "btn_square":
            ctx.lineCap = "square";
            ctx.lineJoin = "square";
            break;
        case "btn_round":
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            break;
        case "btn_plus":
            ctx.lineWidth += 10;
            break;
        case "btn_minus":
            ctx.lineWidth -= 10;
            break;
        case "btn_black":
            ctx.strokeStyle = `rgba(0, 0, 0, 1)`;
            break;
        case "btn_red":
            ctx.strokeStyle = `rgba(204, 51, 51, 1)`;
            break;
        case "btn_blue":
            ctx.strokeStyle = `rgba(51, 89, 204, 1)`;
            break;
        case "btn_green":
            ctx.strokeStyle = `rgba(82, 204, 51, 1)`;
            break;
        case "btn_yellow":
            ctx.strokeStyle = `rgba(204, 199, 51, 1)`;
            break;
    }
}

function resetCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = `rgba(0, 0, 0, 1)`;
    x  = Math.floor(Math.random() * width);
    y  = Math.floor(Math.random() * height);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

window.addEventListener("keydown", draw);
buttons.forEach(button => button.addEventListener("click", buttonHandler));

