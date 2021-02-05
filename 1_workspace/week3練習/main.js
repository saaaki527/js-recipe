// // シンプルなメモ帳のプログラム

// const input = document.getElementById("input");
// const container = document.getElementById("container");
// const addButton = document.getElementById("add-button");
// const removeAllButton = document.getElementById("remove-all-button")

// // 状態を表現する変数
// let list = []

// if (localStorage.list) {
//   // 状態の更新 list: [] -> ["こんにちは"]
//   list = JSON.parse(localStorage.list)

//   // 状態の変化を画面に表示する
//   for (const text of list) {
//     const card = document.createElement("div")
//     card.className = "card"
//     card.textContent = text
//     container.append(card)
//   }
// }

// addButton.onclick = function () {
//   const text = input.value

//   // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
//   list.push(text)
//   localStorage.list = JSON.stringify(list)

//   // 状態の変化を画面に表示する
//   const card = document.createElement("div")
//   card.className = "card"
//   card.textContent = text
//   container.append(card)

//   input.value = ""

//   // クリックするとカードをすべて削除するボタン
//   removeAllButton.onclick = function () {
//     // 状態の更新
//     list = []
//     localStorage.list = JSON.stringify(list)

//     // 状態の表示
//     container.textContent = ""
//   }
// };

// //3択クイズ

// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const feedback = document.getElementById("feedback")

// choice1.onclick = function() {
//   feedback.textContent = "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }
// choice2.onclick = function() {
//   feedback.textContent = "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }
// choice3.onclick = function() {
//   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// }

const inputText = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")
const todoDisplay = document.getElementById("display")
// listに空っぽの配列を作っている
let list = []
// localstorageにいれたリストをとりだす
if(localStorage["list"]) {
  list = JSON.parse(localStorage["pastMemo"])
}

// console.log(localStorage["pastMemo"]) いったん消しとく

// 要素をつくる、リストの個数分
for (let i = 0; i < list.length; i++) {
  const todo = document.createElement("div")
  // 要素に リストの要素 を入れる
  todo.textContent = list[i]
  // todoDisplayに追加する
  todoDisplay.append(todo)
}

addButton.onclick = function() {
  const todo = document.createElement("div")
  todo.textContent = inputText.value
  todoDisplay.append(todo)
  
  // リストに入力した内容を入れる
  list.push(inputText.value) 

  console.log(list)
  // ローカルストレージにリストを保存する
  localStorage["pastMemo"]=JSON.stringify(list)

  inputText.value = ""
}