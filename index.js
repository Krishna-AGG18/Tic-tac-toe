let resetbtn = document.getElementById("resett");
let winnershow = document.getElementById("winshow");
let boxes = document.querySelectorAll(".box");
let winnercond = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
let turn0 = true;
let win = 0;

// Function to reset
resetbtn.addEventListener("click", () => {  
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winnershow.innerText = "--------";
    turn0 = true;
    win = 0;
});

// Function to disable all boxes after a win
const disablebtns = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Add click event for each box
boxes.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (turn0) {
            elem.innerText = "O";
            turn0 = false;
        } else {
            elem.innerText = "X";
            turn0 = true;
        }
        elem.disabled = true;
        checkwin();
    });
});

// Function to check for a win
const checkwin = () => {
    for (let cond of winnercond) {
        let pos1val = boxes[cond[0]].innerText;
        let pos2val = boxes[cond[1]].innerText;
        let pos3val = boxes[cond[2]].innerText;
        
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log(`Winner is player with ${pos1val}`);
            disablebtns();
            winnershow.innerText = `Winner is player with ${pos1val}`;
            win = 1;
            return; // Stop checking further
        }
    }
    // Check for a draw if no winner
    if (win === 0) {
        checkdraw();
    }
};

// Function to check for a draw
const checkdraw = () => {
    let blank = 0;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            blank += 1;
        }
    });
    if (blank === 0 && win === 0) {
        winnershow.innerText = `Draw`;
    }
};
