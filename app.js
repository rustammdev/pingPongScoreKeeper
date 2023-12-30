const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

const gameLavel = document.querySelector('#gameLavel')

const btnPlayer1 = document.querySelector('#btnPlayer1')
const btnPlayer2 = document.querySelector('#btnPlayer2')

const reset = document.querySelector('#reset')

// Winner point
let selectValue = 3
gameLavel.addEventListener('change', (e) => {
    selectValue = e.target.value
})

// Check the winner
function check(player1, value) {
    if (player1 >= value){
        return true
    }
}

// Change the value
let a = 0
btnPlayer1.addEventListener('click', () => {
    a += 2
    player1.textContent = a
})

let b = 0
btnPlayer2.addEventListener('click', () => {
    b += 2
    player2.textContent = b
})


