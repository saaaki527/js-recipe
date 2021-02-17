new Vue({
  el: "#app",
  data: {
    answer: "",
  },
  methods: {
    judge: function(choice) {
      if (choice === 1) {
        this.answer = "正解！"
      } else if (choice === 2) {
        this.answer = "ざんねん"
      } else {
        this.answer = "ちがうよ～"
      }
    },
    // judge1: function() {
    //   this.answer = "正解！"
    // },
    // judge2: function() {
    //   this.answer = "ざんねん"
    // },
    // judge3: function() {
    //   this.answer = "ちがうよ～"
    // },
  },
})
