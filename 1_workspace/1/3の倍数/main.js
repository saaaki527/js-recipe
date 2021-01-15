const number = 24

// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
// 「for」が繰り返すって意味。 
for (let n=1 ; n<=number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}
