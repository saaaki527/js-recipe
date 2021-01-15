//入力した値をコンソールに表示

const inputText = document.getElementById('input-text')
const inputDate = document.getElementById('input-date')

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

//押したキーの名前をコンソールに表示

document.onkeydown = function (e) {
  console.log(e.key) ;
}
