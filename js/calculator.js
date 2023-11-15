let currentValue = 0;
let operator = '';
let isOperatorClicked = false;
let input = document.getElementById('Calculator');

// Input 포커싱되면 0 제거
function removeZero() {
  if (input.value === '0') {
    input.value = '';
  }
}

// 숫자 입력
function InputNumber(number) {
  if (input.value === '0' || isOperatorClicked) {
    input.value = number;
    isOperatorClicked = false;
  } else {
    input.value += number;
  }
}

// 숫자 외 입력 제한
input.addEventListener('input', function () {
  const filteredValue = input.value.replace(/[^0-9]/g, '');
  if (input.value !== filteredValue) {
    this.value = filteredValue;
  }
});

// 소숫점 입력
function InputPoint() {
  if (input.value.includes('.') !== true) {
    input.value = input.value + '.';
  }
}

// 현재값 양수 음수 전환
function plusMinus() {
  let value = input.value;

  if (value !== '0') {
    if (value.charAt(0) === '-') {
      input.value = value.slice(1);
    } else {
      input.value = '-' + value;
    }
  }
}

// 백분율
function percent() {
  input.value = input.value / 100;
}

// 계산하기
function Calculate(nextOperator) {
  if (operator !== '') {
    switch (operator) {
      case '+':
        currentValue += parseFloat(input.value);
        break;
      case '-':
        currentValue -= parseFloat(input.value);
        break;
      case '*':
        currentValue *= parseFloat(input.value);
        break;
      case '/':
        currentValue /= parseFloat(input.value);
        break;
      default:
        break;
    }
  } else {
    currentValue = parseFloat(input.value);
  }

  input.value = currentValue;
  operator = nextOperator;
  isOperatorClicked = true;
}

// 키보드 조작
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    event.preventDefault();
    InputNumber(key);
  } else {
    switch (key) {
      case '+':
      case '-':
      case '*':
      case '/':
        event.preventDefault();
        Calculate(key);
        break;
      case 'Enter':
        event.preventDefault();
        Calculate('=');
        break;
      case 'Escape':
        event.preventDefault();
        reset();
        break;
      case 'Backspace':
        break;
      default:
        break;
    }
  }
});


// 리셋 버튼
function reset() {
  let input = document.getElementById('Calculator');
  currentValue = 0;
  operator = '';
  input.value = '0';
}
