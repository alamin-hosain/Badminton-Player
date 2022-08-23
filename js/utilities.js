function getInputFieldValuById(inputId) {
    const inputVieldValueSelect = document.getElementById(inputId);
    const inputVieldValueSelectString = inputVieldValueSelect.value;
    const inputValue = parseInt(inputVieldValueSelectString);

    return inputValue;
}

function setElementValueByID(elementId, value) {
    const elementValueSet = document.getElementById(elementId);
    elementValueSet.innerText = value;
}
