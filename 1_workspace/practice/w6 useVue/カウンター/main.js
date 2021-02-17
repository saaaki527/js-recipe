new Vue({
  el: "#app", // ""忘れない
  //セミコロン「;」じゃなくてカンマ「,」
  data: {
    count: 0,
  },
  methods: {
    //methodじゃなくてmethods(複数形)
    countUp: function() {
      this.count += 1
    },
  },
})
