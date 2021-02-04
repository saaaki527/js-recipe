const img1 = document.getElementById("favorite1")
const img2 = document.getElementById("favorite2")
const img3 = document.getElementById("favorite3")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")

img1.onclick = function() {
  text1.textContent =
    "「音」「声」が好きです。ゲーム（どうぶつの森, ポケモンダイパ,..）や映画（ジュラシックパーク, ズートピア,...）のサウンドトラック、声優（櫻井孝宏, 梅原裕一郎, 早見沙織,...）。ああ、好き。"
}

img2.onclick = function() {
  text2.textContent =
    "お茶、ハーブティーにハマってます。今家にあって気に入っているのは吉祥寺山利屋の玄米茶と無印の白桃グリーンティ。「すてきな生活してる自分かわいい」って思っている節はあります。まあ単純にお茶、美味いです。"
}

img3.onclick = function() {
  text3.textContent =
    "腰痛、肩凝り改善のために高校生のころからヨガやってます。最近は部屋をきれいに保てているおかげでヨガスペースができて、前より頻繁にできてます。精神的にも身体的にもなんかめっちゃいいっす。"
}
