const imageElement = document.getElementById("cat-image")

// 指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() //結果をjsonとして読み込んで、次のthenに渡す
  })
  .then((data) => {
    imageElement.src = data.url //画像を表示する
  })
