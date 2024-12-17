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
      { fortune: '大吉', message: '今日は最高の日です！' },
      { fortune: '中吉', message: '今日は良い日です！' },
      { fortune: '吉', message: '今日はまあまいい日です。' },
      { fortune: '凶', message: '今日はいろいろ気を付けましょう。' },
      { fortune: '大凶', message: '今日はひたすら耐えましょう…。' }
    ];
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
  }

  function displayResult(omikujiResult) {
    result.textContent = omikujiResult.fortune;
    message.textContent = omikujiResult.message; // メッセージを表示
  }
}