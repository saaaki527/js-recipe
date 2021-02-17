new Vue({
  el: "#app",
  data: {
    answer: "",
  },
  methods: {
    judge1: function() {
      this.answer = "正解！"
    },
    judge2: function() {
      this.answer = "ざんねん"
    },
    judge3: function() {
      this.answer = "ちがうよ～"
    },
  },
})
