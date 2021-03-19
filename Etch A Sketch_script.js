
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

const btn_black = document.querySelector("#btn_black");
const btn_red = document.querySelector("#btn_red");
const btn_blue = document.querySelector("#btn_blue");
const btn_green = document.querySelector("#btn_green");
const btn_yellow = document.querySelector("#btn_yellow");
const btn_plus = document.querySelector("#btn_plus");
const btn_minus = document.querySelector("#btn_minus");
const btn_round = document.querySelector("#btn_round");
const btn_square = document.querySelector("#btn_square");
const btn_download = document.querySelector("#btn_download");
const btn_erase = document.querySelector("#btn_erase");
const buttons = document.querySelectorAll(`[type="button"]`);


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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = `rgba(0, 0, 0, 1)`;  
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";  
}

function resize() {
    canvas.width = 900;
    canvas.height = 600;
}

function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
}

function reposition(event) {
    coord.x = (event.clientX - canvas.offsetLeft);
    coord.y = (event.clientY - canvas.offsetTop);
}

function stop() {
    document.removeEventListener("mousemove", draw);
}

function draw(event) {
    ctx.beginPath();
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

btn_download.addEventListener("click", function(e) {
ctx.globalCompositeOperation = 'destination-over';
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
    var link = document.createElement('a');
    link.download = `your_drawing.jpeg`;
    link.href = canvas.toDataURL()
    link.click();
    link.delete;
  });

  

resize();
resetCanvas();
buttons.forEach(button => button.addEventListener("click", buttonHandler));
document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);


