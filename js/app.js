

// jokhhon disable hosche tokhon oie disable button a r notun kono event add hbena....




document.getElementById('player-select').addEventListener('click', function (event) {
    event.preventDefault();

    const selectPlayer = event.target.parentNode;
    const playerName = selectPlayer.querySelector('.card-title').innerText;
    const btnSelected = selectPlayer.querySelector('.btn');
    btnSelected.disabled = 'disabled';


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



document.getElementById('calculate').addEventListener('click', function (event) {

    const selectedPlayer = document.getElementById('selected-player');
    const selecTedTotalPlayer = selectedPlayer.querySelectorAll('li');

    const selectedCurrentPlayer = selecTedTotalPlayer.length;

    const budgetPerPlayer = getInputFieldValuById('budget-per-player');
    const playerExpense = budgetPerPlayer * selectedCurrentPlayer;


    if (isNaN(budgetPerPlayer)) {

        alert('You Forgot to Add a Valid Number');

        const perPlayerInput = document.getElementById('budget-per-player');
        perPlayerInput.value = '';

    }
    else {
        setElementValueByID('player-total-expense', playerExpense)
    }


})




document.getElementById('calculate-total').addEventListener('click', function () {
    const managerExpense = getInputFieldValuById('manager-expense');
    const coachExpense = getInputFieldValuById('coach-expense');
    const playerExpenseElement = document.getElementById('player-total-expense').innerText;
    const playerTotalExpense = parseInt(playerExpenseElement);


    const managerAndCoachExpense = managerExpense + coachExpense;
    const totalExpense = playerTotalExpense + managerAndCoachExpense;

    if (isNaN(managerExpense) && isNaN(coachExpense)) {

        alert('You Forgot to Add a Valid Number');

        const managerExpenseInput = document.getElementById('manager-expense');
        managerExpenseInput.value = '';

        const coachExpenseInput = document.getElementById('coach-expense');
        coachExpenseInput.value = '';
    }
    else {

        setElementValueByID('total-expense', totalExpense);
    }

})