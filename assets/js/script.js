let button = document.getElementById('button');
let multCall = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let result = document.getElementById('result');

function caractNumber(e) {
  const valueCpf = document.getElementById('input').value;
  if (!isNaN(valueCpf)) {
    if (valueCpf.length === 11) {
      authentication(valueCpf);
    } else {
      return (result.innerHTML =
        'Por favor digite seu numero de CPF com 11 digitos!');
    }
  } else {
    return (result.innerHTML = 'Digite somente numeros!');
  }
}

function validatorCPF(valueCpf) {
  let sum = 0;
  for (let i in multCall) {
    sum += Number(valueCpf[i] * multCall[i]);
  }
  let formula = 11 - (sum % 11);
  if (formula > 9) {
    return (formula = 0);
  } else {
    return formula;
  }
}

function authentication(valueCpf) {
  let dig10 = validatorCPF(valueCpf);
  multCall.unshift([11]);
  let dig11 = validatorCPF(valueCpf);
  multCall.shift();
  if (valueCpf === valueCpf.slice(0, 9).concat(dig10, dig11)) {
    result.innerHTML = 'CPF Verdadeiro';
    result.style.color = 'black';
  } else {
    result.innerHTML = 'CPF Invalido';
    result.style.color = 'red';
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  caractNumber();
});
