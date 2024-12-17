'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const message = document.getElementById('message'); // メッセージ要素を追加

  btn.addEventListener('click', () => {
    const omikujiResult = getOmikujiResult();
    displayResult(omikujiResult);
  });

  function getOmikujiResult() {
    const results = [
      { fortune: '大吉', message: '今日は最高の日です！', probability: 0.1 },
      { fortune: '中吉', message: '今日は良い日です！', probability: 0.2 },
      { fortune: '吉', message: '今日はまあまいい日です。', probability: 0.3 },
      { fortune: '凶', message: '今日はいろいろ気を付けましょう。', probability: 0.3 },
      { fortune: '大凶', message: '今日はひたすら耐えましょう…。', probability: 0.1 }
    ];
    const random = Math.random();
    let cumulativeProbability = 0;
    for (const result of results) {
      cumulativeProbability += result.probability;
      if (random < cumulativeProbability) {
        return result;
      }
    }
  }

  function displayResult(omikujiResult) {
    result.textContent = omikujiResult.fortune;
    message.textContent = omikujiResult.message; // メッセージを表示
  }
}