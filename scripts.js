
const squaresContainer = document.getElementById("squaresContainer"),
    rgb_info = document.getElementById("rgb_info"),
    reset_btn = document.querySelector("button");


function getRandomColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        rgb = `rgb(${r}, ${g}, ${b})`;
    
    return rgb;
}

function checkColor(selSquare) {
    (rgb_info.innerText == selSquare.style.backgroundColor) ? alert("Correct") : alert("Wrong");
}


function setup_squares(){
    rgb_info.innerText = getRandomColor();
    let squaresNum = 6,
        random_i = 0;

    while(random_i == 0) {
        random_i = Math.round(Math.random() * squaresNum);
    }

    for (let i = 1; i <= squaresNum; i++) {
        let squareHtml = `<span class="square" style="background-color:${i == random_i ? rgb_info.innerText : getRandomColor()};"></span>`;
        squaresContainer.innerHTML += squareHtml;
    }

    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((eachSquare)=>{
        eachSquare.addEventListener("click",(e)=>{
            checkColor(e.target);
        })
    })
}

reset_btn.addEventListener("click",()=>{
    squaresContainer.innerHTML = "";
    setup_squares();
});

setup_squares();



