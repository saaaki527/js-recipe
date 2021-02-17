const inputForm = document.getElementById("inputForm")
const inputButton = document.getElementById("inputButton")
const inputMoney = document.getElementById("inputMoney")
const 

// 投入金額とおつり、ドリンク本数
let totalMoney = 0
let charge = 0
let num = 0

// 投入するための関数
const add TotalMoney = dunction() {
    totalMoney += Number(inputForm.value);
    inputMoney.textContent = totalMoney;
    inputForm.value = 0;
}

// 水を購入するときの関数
const getDrink = function () {
    //投入金額不足のとき
    if (totalMoney < 100) {
        return;
    }
    totalMoney -= 100;
    num ++;
    drinkNumber.textContent = num;
}

//お釣りを取り出すための関数
const getCharge = function() {
    charge = totalMoney;
    totalMoney = 0;
    chargeMoney.textContent = charge;
    inputMoney.textContent = totalMoney;
}

inputButton.onclick = function() {
    addTotalMoney();
}

buyButton.onclick = function() {
    getDrink();
}

chargeButton.onclick = function() {
    getCharge();
}

// const buttonCola = document.getElementById("buttonCola")
// const button100 = document.getElementById("button100")
// const display = document.getElementById("display")
// const toridashiGuchi = document.getElementById("display2")
// const buttonOtsuri = document.getElementById("otsuri")
// const otsuriDisplay = document.getElementById("otsuriDisplay")

// button100.onclick = function() {
//   totalMoney += 100
//   display.textContent = "現在のお金" + totalMoney + "円"
//   if (totalMoney >= 120) {
//     buttonCola.style.color = "red"
//   }
// }

// buttonCola.onclick = function() {
//   if (totalMoney >= 120) {
//     totalMoney -= 120
//     display.textContent = "現在のお金" + totalMoney + "円"
//     toridashiGuchi.textContent = "コーラどうぞ"
//     if (totalMoney >= 120) {
//       buttonCola.style.color = "red"
//     } else {
//       // 120円よりtotalMoneyが少なければおつりが出てくる
//       buttonCola.style.color = "black"
//       otsuriDisplay.textContent =
//         totalMoney + "円のお返しです。ありがとうございました。"
//       display.textContent = "現在のお金0円"
//       toridashiGuchi.textContent = "コーラどうぞ"
//     }
//   } else {
//     display.textContent += "お金が足りません"
//   }
// }

// buttonOtsuri.onclick = function() {
//   otsuriDisplay.textContent =
//     totalMoney + "円のお返しです。ありがとうございました。"
//   display.textContent = "現在のお金0円"
// }
