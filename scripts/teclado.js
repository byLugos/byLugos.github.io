function addNumber(value,elemento) {
  const inputField = document.getElementById(elemento);
  const currentValue = inputField.value;

  // Verificar si el valor es un signo negativo y si ya está presente
  if (value === '-' && currentValue.includes('-')) {
    return;
  }

  // Verificar si el valor ya contiene un signo negativo
  if (currentValue.includes('-') && !currentValue.startsWith('-')) {
    inputField.value = '-' + currentValue.replace('-', '');
  } else {
    inputField.value = currentValue + value;
  }
}

function clearInput(elemento) {
  document.getElementById(elemento).value = '';
}