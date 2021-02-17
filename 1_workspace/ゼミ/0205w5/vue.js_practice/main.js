new Vue({
  //Vueのプログラムを読み込んだことで使えるようになった関数。設定をはじめますって感じ
  el: "#app", //idがappの要素のdivの中でのみvue.jsを適用させる。cssのid型セレクタ(#app)といっしょ。
  data() {
    //data: {}(教材)
    //methodなので()をつける。
    //returnにすることで値を「保持」する
    return {
      drinkPrice: 110,
      totalMoney: 0,
      inputMoney: 0,
      isPurchased: false,
      drinkNumber: 0,
      drinks: ["カルピス", "コーヒー", "コーラ"],
    }
  },
  methods: {
    //投入関数 methods: {}っていう形覚える。dataみたいに()はつけない
    //methodにはイベントハンドラ（など）を入れる
    addTotalMoney: function() {
      this.totalMoney += Number(this.inputMoney)
      //dataの中の値を使うときはthis.が必要！！thisは自分が定義したものが全部入ったオブジェクト、と捉える。
    },
    //購入関数
    purchase: function() {
      if (this.totalMoney >= this.drinkPrice) {
        this.totalMoney -= this.drinkPrice
        this.isPurchased = true
        this.drinkNumber++
      }
    },
  },
})
