const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const gameLavel = document.querySelector('#gameLavel');

const btnPlayer1 = document.querySelector('#btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');

const reset = document.querySelector('#reset');

// Winner point
let selectValue = 3
gameLavel.addEventListener('change', (e) => {
    selectValue = e.target.value;

    player1.textContent = 0;
    player2.textContent = 0;

    a = 0, b = 0;
})

// Check the winner
function check(player1, value) {
    if (player1 >= value){
        return true;
    }
}

// Change the value
var a = 0;
btnPlayer1.addEventListener('click', () => {
    player1.textContent = a;
    if(check(a, selectValue)){
        player1.style.color = 'green';
        btnPlayer1.classList.add('disabled');
        btnPlayer2.classList.add('disabled');
        a = 0
    }
    a += 1;
})

var b = 0
btnPlayer2.addEventListener('click', () => {
    player2.textContent = b;
    if(check(b, selectValue)){
        player2.style.color = 'green';
        btnPlayer1.classList.add('disabled');
        btnPlayer2.classList.add('disabled');
        b = 0
    }
    b += 1;
})

// reset players value
reset.addEventListener("click", () => {
    player1.textContent = 0;
    player2.textContent = 0;

    btnPlayer1.classList.remove('disabled');
    btnPlayer2.classList.remove('disabled');

    player1.style.color = '';
    player2.style.color = '';

})


