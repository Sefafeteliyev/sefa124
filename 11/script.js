let arr = [];
let count = 1;
let x = "X";
let o = "O";
let player1;
let player2;


Start();
function Start() {
    player1 = prompt("1-ci oyuncunu daxil edin?", x);
    player2 = prompt("2-ci oyuncunu daxil edin?", o);

    document.getElementById("show1").innerHTML = `Player 1 : ${player1}`;
    document.getElementById("show2").innerHTML = `Player 2 : ${player2}`;

    Arr();
    table();
};
function table() {
    let teble = " ";
    for (let i = 0; i < 3; i++) {
        teble += `<tr>`;
        for (let j = 0; j < 3; j++) {
            teble += `<td onclick="Click(${i},${j})" > ${arr[i][j] == undefined ? " " : arr[i][j]} </td>`;
        }
        teble += `</tr>`;
    }
    document.getElementById("show").innerHTML = teble;

};
function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = []
    }
};
function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        }
        count++;
        table();
        Check();
        Check1();
        Chech2();
        Chech3();
    }
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] != undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            let winner = arr[i][0] == x ? `${player1} - Won ` : `${player2} - Won`;
            alert(winner);
        }
    }

}
function Check1() {
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] != undefined && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
            let winner = arr[0][i] == x ? `${player1} - Won ` : `${player2} - Won`;
            alert(winner);
        }
    }
}
function Chech2() {
    for (let i = 0; i < 3; i++) {
        if (arr[0][0] != undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            let winner = arr[0][i] == x ? `${player1} - Won ` : `${player2} - Won`;
            alert(winner);
        }
    }

}
function Chech3() {
    for (let i = 0; i < 3; i++) {
        if (arr[0][2] != undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
            let winner = arr[i][0] == x ? `${player1} - Won ` : `${player2} - Won`;
            alert(winner);
        }
    }
}