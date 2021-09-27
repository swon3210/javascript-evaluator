import {
  $answerButton,
  $clearButton,
  $numbersWrapper,
  $operatorsWrapper,
  $result,
} from './scripts/elements.js';

let formula = '';

$numbersWrapper.addEventListener('click', (event) => {
  if (event.target.className !== 'number') {
    return;
  }

  formula = formula + event.target.innerText;
  $result.innerText = formula;
});

$operatorsWrapper.addEventListener('click', (event) => {
  if (event.target.className !== 'operator') {
    return;
  }

  formula = formula + event.target.innerText;
  $result.innerText = formula;
});

$clearButton.addEventListener('click', () => {
  $result.innerText = '0';
  formula = '';
});

$answerButton.addEventListener('click', () => {
  const userAnswer = prompt('결과값은 무엇입니까?');
  const realAnswer = String(eval(formula));
  if (userAnswer === realAnswer) {
    alert('정답입니다!!');
    $result.innerText = '0';
    formula = '';
    return;
  }

  alert(`오답입니다! 정답은 ${realAnswer}입니다!`);
});
