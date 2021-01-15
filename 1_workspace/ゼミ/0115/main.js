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
