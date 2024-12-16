'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const omikujiResult = getOmikujiResult();
    displayResult(omikujiResult);
  });

  function getOmikujiResult() {
    const results = ['大吉', '中吉', '凶', '小吉'];
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
  }

  function displayResult(result) {
    result.textContent = result;
  }
}