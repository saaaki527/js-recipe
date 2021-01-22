//クイズ練習！

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const feedback = document.getElementById("feedback")

button1.onclick = function () {
  feedback.textContent = "不正解"
}

button2.onclick = function () {
  feedback.textContent = "不正解"
}

button3.onclick = function () {
  feedback.textContent = "不正解"
}

button4.onclick = function () {
  feedback.textContent = "正解！YoutubeやNetflixを大画面で観られる幸せを日々感じています"
}

//オブジェクトの使い方！
const saki = {
  name: "おかべさき",
  birthDay: "5月27日", //keyとvalueをカンマで区切って(!!)並べる
  homeTown: "岐阜", //最後のカンマはなくてもいいけどあった方が入れ替えカンタンだから（自動で補完される？）
  hobbies: ["映画音楽", "声優", "Youtubeを観る"],//中かっこがオブジェクトで角かっこが配列！
}

console.log(saki.name) //"おかべさき"
console.log(saki.age) 
console.log(saki.birthDay)

const hobbies = ["ゲーム", "映画音楽", "料理", "声優"] //複数の値をカンマで区切って並べることを配列という、ただの値なのでオブジェクトの中に入れられる

saki.hobbies[0] //"映画音楽"(console内で表示)

// week2 小テスト 
//条件１：name プロパティに好きな人物の名前（実在でも架空でも、何でも構いません）の文字列をもつ。
//条件２：character.mother.name で、その人物の母親の名前の文字列を取り出せる。
//条件３：character.hobbies[0] で、その人物の一番の趣味を取り出せる。

const character = {
  name: 櫻井孝宏,
  mother: {
    name: "櫻井孝宏ママ",
  },
  hobbies: ["読書", "ラジオ", "映画鑑賞"],
}

//条件１：関数名は multiply。
//条件２：引数は a と b の２つ。
//条件３：返り値は a と b の値を * を使ってかけ合わせた結果。

const multiply = function (a, b) {
  return a * b
}

//2 から 10 までの偶数をコンソールに出力するコード

for (let n=2; n<=10; n++) {
  if (n % 2 === 0) {
    console.log(n)
  }
}