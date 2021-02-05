const buttonCola = document.getElementById("buttonCola")
const button100 = document.getElementById("button100")
const display = document.getElementById("display")
const toridashiGuchi = document.getElementById("display2")
const buttonOtsuri = document.getElementById("otsuri")
const otsuriDisplay = document.getElementById("otsuriDisplay")

let totalMoney = 0

button100.onclick = function() {
  totalMoney += 100
  display.textContent = "現在のお金" + totalMoney + "円"
  if (totalMoney >= 120) {
    buttonCola.style.color = "red"
  }
}

buttonCola.onclick = function() {
  if (totalMoney >= 120) {
    totalMoney -= 120
    display.textContent = "現在のお金" + totalMoney + "円"
    toridashiGuchi.textContent = "コーラどうぞ"
    if (totalMoney >= 120) {
      buttonCola.style.color = "red"
    } else {
      // 120円よりtotalMoneyが少なければおつりが出てくる
      buttonCola.style.color = "black"
      otsuriDisplay.textContent =
        totalMoney + "円のお返しです。ありがとうございました。"
      display.textContent = "現在のお金0円"
      toridashiGuchi.textContent = "コーラどうぞ"
    }
  } else {
    display.textContent += "お金が足りません"
  }
}

buttonOtsuri.onclick = function() {
  otsuriDisplay.textContent =
    totalMoney + "円のお返しです。ありがとうございました。"
  display.textContent = "現在のお金0円"
}
