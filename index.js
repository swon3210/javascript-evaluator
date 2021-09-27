import {
  $answerButton,
  $clearButton,
  $numbersWrapper,
  $operatorsWrapper,
} from './scripts/elements.js';
import { UIProxy } from './scripts/proxy.js';

const clearFormula = () => {
  UIProxy.formula = '';
};

$numbersWrapper.addEventListener('click', (event) => {
  if (event.target.className !== 'number') {
    return;
  }

  UIProxy.formula = UIProxy.formula + event.target.innerText;
});

$operatorsWrapper.addEventListener('click', (event) => {
  if (event.target.className !== 'operator') {
    return;
  }

  UIProxy.formula = UIProxy.formula + event.target.innerText;
});

$clearButton.addEventListener('click', () => {
  clearFormula();
});

$answerButton.addEventListener('click', () => {
  const userAnswer = prompt('결과값은 무엇입니까?');
  const realAnswer = String(eval(UIProxy.formula));
  if (userAnswer === realAnswer) {
    alert('정답입니다!!');
    clearFormula();
    return;
  }

  alert(`오답입니다! 정답은 ${realAnswer}입니다!`);
});
