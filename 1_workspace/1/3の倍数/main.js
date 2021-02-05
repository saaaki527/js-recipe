<<<<<<< HEAD
const love3 = function(number) {
  for (let n=1; n<=number; n++) {
    if (n % 3 === 0) {
      console.log(n + `!!!!!!!`);
    } else if (n % 10 === 3) {
        console.log(n + `!!!!!!!`)
      } else if (n = 30~39) { //30以上39以下の数字としても良い
        console.log(n + `!!!!!!!`)
        } else {
          console.log(n)
          }
  }
}

// Stringは文字列のString(n) n


=======
const genkiFunction = function(number) {
  for (let n=1; n<=number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
    }
}

//FizzBuzz

const FizzBuzzFunction = function(number) {
  for (let n=1; n<=number; n++) {
    if (n % 15 === 0) {
      console.log(`FizzBuzz`);
    } else if (n % 3 === 0) {
      console.log(`Fizz`);
    } else if (n % 5 === 0) {
      console.log(`Buzz`);
    } else {
        console.log(n)
      }
  }
}
>>>>>>> 14063d20e2f153c713b4195967b18b97cf92a104
