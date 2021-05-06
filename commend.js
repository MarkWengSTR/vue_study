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
      num1: 1,
      num2: 2,
      msg_trim:'gogo',
      text: 'Hello',
      html_text: '<h1>HELLO</h1>',
      text_for_css_ts: '',
      text_for_js_attr_ts: '',
    }
  },
  computed: {
    jpy: {
      get () {
        return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
      },
      set (val) {
        this.twd =  Number.parseFloat(Number(val) * 0.278).toFixed(3);
      },
    },
    sum () {
      return this.num1 + this.num2;
    },
    isValid: function() {
      return this.text_for_js_attr_ts.length <= 10;
    },
    msgStyle: function() {
      return {
        'border': this.isValid ? '' : 'red solid 1px',
        'color': this.isValid ? '' : 'red'
      };
    }
  }

}).mount('#app');
