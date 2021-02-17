new Vue({
  el: "#app",
  data: {
    text: "",
    list: JSON.parse(localStorage["list"] || "[]"),
  },
  methods: {
    addCard: function() {
      this.list.push(this.text)
      localStorage["list"] = JSON.stringify(this.list)
      //inputの文字を消す（input.value=""みたいな）
      this.text = ""
    },
  },
})
