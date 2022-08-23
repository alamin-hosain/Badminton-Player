

document.getElementById('player-select').addEventListener('click', function (event) {
    const selectPlayer = event.target.parentNode;
    const playerName = selectPlayer.querySelector('.card-title').innerText;

    const newPlayer = document.createElement('li');
    newPlayer.innerText = playerName;


    const selectedPlayer = document.getElementById('selected-player');
    const selecTedTotal = selectedPlayer.querySelectorAll('li');

    if (selecTedTotal.length < 5) {
        selectedPlayer.appendChild(newPlayer);
    }
    else {
        alert('You Only Can Add Upto 5 Players')
    }
})

function getInputFieldValuById(inputId) {
    const inputVieldValueSelect = document.getElementById(inputId);
    const inputVieldValueSelectString = inputVieldValueSelect.value;
    const inputValue = parseInt(inputVieldValueSelectString);

    return inputValue;
}

document.getElementById('calculate').addEventListener('click', function (event) {

    const selectedPlayer = document.getElementById('selected-player');
    const selecTedTotalPlayer = selectedPlayer.querySelectorAll('li');

    const selectedCurrentPlayer = selecTedTotalPlayer.length;

    const budgetPerPlayer = getInputFieldValuById('budget-per-player');


    const playerExpense = budgetPerPlayer * selectedCurrentPlayer;

    const playerExpentElement = document.getElementById('player-total-expense');
    playerExpentElement.innerText = playerExpense;
})