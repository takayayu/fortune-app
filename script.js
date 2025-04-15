// おみくじリスト
const fortunes = [
    {
      type: "超大吉 ✨",
      advice: [
        "今日はあなたのための日！どんなことも前向きに進めよう！",
        "奇跡が起きそうな一日。笑顔でチャンスを掴もう！",
        "最高の運気！何か新しいことに挑戦してみよう！"
      ]
    },
    {
      type: "大吉 😊",
      advice: [
        "とても良い日！感謝の気持ちを持って行動するとさらに運気アップ！",
        "目標に一歩近づける日。やるべきことに集中して◎",
        "楽しいことが舞い込む予感！ポジティブにいこう！"
      ]
    },
    {
      type: "中吉 👍",
      advice: [
        "努力が実る日！コツコツ続けてきた自分を信じて。",
        "周りの人と助け合うことでより良い結果に。",
        "心を整えてリズムよく過ごすとGood！"
      ]
    },
    {
      type: "小吉 🌱",
      advice: [
        "小さな幸せがいっぱい見つかる日。深呼吸して周りを見てみよう。",
        "ゆったりしたペースが◎ 焦らず進もう。",
        "小さな前進が大きな成果に繋がるよ。"
      ]
    },
    {
      type: "吉 😊",
      advice: [
        "自分の直感を信じて動いてみて！",
        "日常にある幸せを見つけて、感謝の気持ちを持とう。",
        "気分転換にぴったりな日！リフレッシュしよう。"
      ]
    },
    {
      type: "未来吉 🌈",
      advice: [
        "今は準備の時。未来に繋がる大事な一歩になるよ。",
        "行動した分だけ未来が明るくなる！",
        "希望を忘れずにいれば、チャンスはすぐそこに。"
      ]
    }
  ];

document.getElementById('fortuneBtn').addEventListener('click', () => {
    const resultEl = document.getElementById('fortuneResult');
    const adviceEl = document.getElementById('fortuneAdvice');

    // 一旦アニメーション用クラスを外す
    resultEl.classList.remove('show');
    adviceEl.classList.remove('show');
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    const randomAdvice = fortune.advice[Math.floor(Math.random() * fortune.advice.length)];

    resultEl.textContent = `運勢：${fortune.type}`;
    adviceEl.textContent = `アドバイス：${randomAdvice}`;

    setTimeout(() => {
      resultEl.classList.add('show');
      adviceEl.classList.add('show');
    }, 50);
});









