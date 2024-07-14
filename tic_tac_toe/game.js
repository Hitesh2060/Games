let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector("#win");
let win_cont = document.querySelector(".win_cont");
let turn0 = "true";

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const reset = () => {
    turn0 = true;
    enableboxes();
    win_cont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
})
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos1 == pos2 && pos2 == pos3) {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1);

                showWinner(pos1);
            }
        }
    }
}
const showWinner = (winner) => {
    msgcont.innerText = `Congratulations ${winner} won the game`;
    win_cont.classList.remove("hide");
    disableboxes();
}

resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);