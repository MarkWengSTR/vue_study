const vm = Vue.createApp({
  data() {
    return {
      count: 0,
      amount: 0,
      isShow: false,
    }
  },
  computed: {
    modelStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    plus() {
      this.count++;
    },
    clickclick(event){
      console.log(event.target.tagName); // BUTTON
    },
    plus_amount(amount, event){
      console.log(event.target.tagName);
      this.count += amount;
    },
    alert(val){
      alert(val);
    },
    toggleModel(){
      console.log(this.ishow);
      this.isShow = !this.isShow;
    },
    plus_once() {
      this.count++;
    },

  }
}).mount('#app');
