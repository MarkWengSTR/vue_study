const vm = Vue.createApp({
  // data() {
  //   return {
  //     twd: 0.278,
  //     jpy: 1,
  //   }
  // },
  // methods: {
  //   twd2jpy () {
  //     this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
  //   },
  //   jpy2twd () {
  //     this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
  //   },
  // },

  data() {
    return {
      twd: 0.278,
      isBtnDisabled: true,
      message: 'Hello',
      picked: 1,
      checkedNames: [], // checkbox必須是Array
      isChecked: false,
      selected:'',
      msg:'Zzz',
    }
  },
  computed: {
    jpy: {
      get () {
        return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
      },
      set (val) {
        this.twd =  Number.parseFloat(Number(val) * 0.278).toFixed(3);
      }
    },
  }

}).mount('#app');
