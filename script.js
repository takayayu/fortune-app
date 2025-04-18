// 今日の日付を表示する
const today = new Date();
const options = { year: "numeric", month: "2-digit", day: "2-digit" };
const formattedDate = today.toLocaleDateString("ja-JP", options);
document.getElementById("todayDate").textContent = `本日の日付：${formattedDate}`;

// ポケモン画像の連番を動的に作成（例：001.png～100.png）
const totalPokemonImages = 500;

// ポケモン画像をランダムに表示する関数
function getRandomPokemonImage(pokemonNumber) {
  const fileName = String(pokemonNumber).padStart(4, '0') + ".png";
  return fileName;
}

// ポケモン詳細ページのリンクを作成
function getPokemonLink(pokemonNumber) {
  return `https://zukan.pokemon.co.jp/detail/${String(pokemonNumber).padStart(4, '0')}`;
}

// おみくじリスト
const fortunes = [
  {
    type: "超大吉 ✨",
    advice: [
      "今日はあなたのための日！どんなことも前向きに進めよう！",
      "奇跡が起きそうな一日。笑顔でチャンスを掴もう！",
      "最高の運気！何か新しいことに挑戦してみよう！",
    ],
  },
  {
    type: "大吉 😊",
    advice: [
      "とても良い日！感謝の気持ちを持って行動するとさらに運気アップ！",
      "目標に一歩近づける日。やるべきことに集中して◎",
      "楽しいことが舞い込む予感！ポジティブにいこう！",
    ],
  },
  {
    type: "中吉 👍",
    advice: [
      "努力が実る日！コツコツ続けてきた自分を信じて。",
      "周りの人と助け合うことでより良い結果に。",
      "心を整えてリズムよく過ごすとGood！",
    ],
  },
  {
    type: "小吉 🌱",
    advice: [
      "小さな幸せがいっぱい見つかる日。深呼吸して周りを見てみよう。",
      "ゆったりしたペースが◎ 焦らず進もう。",
      "小さな前進が大きな成果に繋がるよ。",
    ],
  },
  {
    type: "吉 😊",
    advice: [
      "自分の直感を信じて動いてみて！",
      "日常にある幸せを見つけて、感謝の気持ちを持とう。",
      "気分転換にぴったりな日！リフレッシュしよう。",
    ],
  },
];

// 占うボタン押下時
document.getElementById("fortuneBtn").addEventListener("click", () => {
  const resultEl = document.getElementById("fortuneResult");
  const adviceEl = document.getElementById("fortuneAdvice");
  const fortuneBtn = document.getElementById("fortuneBtn");

  // ボタンを無効化
  fortuneBtn.disabled = true;

  // 一旦アニメーション用クラスを外す
  resultEl.classList.remove("show");
  adviceEl.classList.remove("show");

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  const randomAdvice =
    fortune.advice[Math.floor(Math.random() * fortune.advice.length)];

  resultEl.textContent = `運勢：${fortune.type}`;
  adviceEl.textContent = `アドバイス：${randomAdvice}`;

  setTimeout(() => {
    resultEl.classList.add("show");
    adviceEl.classList.add("show");
    // 背景色を変える（class追加）
    document.body.classList.add("change-bg");
    createStars();

    // 今日のポケモン画像を表示
    const pokemonNumber = Math.floor(Math.random() * totalPokemonImages) + 1; // 1回だけランダムに番号を生成
    const imagePath = `images/pokemon/${getRandomPokemonImage(pokemonNumber)}`; // 同じ番号で画像名を取得
    const pokemonLink = getPokemonLink(pokemonNumber); // 同じ番号でリンクを作成

    // 画像とリンクを設定
    document.getElementById("pokemonImage").src = imagePath;
    document.getElementById("pokemonLink").href = pokemonLink;
    document.getElementById("pokemonLink").textContent = `ポケモン詳細ページ: ${pokemonNumber}`;

    // pokemonSectionの表示
    document.getElementById("pokemonSection").style.display = "block";
    document.getElementById("pokemonImage").style.display = "block";
  }, 50);
});

// 星が舞うエフェクト
function createStars() {
  const container = document.getElementById("stars");

  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 2 + "s";
    star.style.animationDelay = Math.random() * 1 + "s";
    container.appendChild(star);

    // 星を消す（重くならないように）
    setTimeout(() => {
      container.removeChild(star);
    }, 5000);
  }
}
