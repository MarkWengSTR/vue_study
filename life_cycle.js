const vm = Vue.createApp({
  data() {
    return {
      msg: [],
      isActive: false,
      stateMsg: '',
      stateMessages: ['Hello', 'Vue.js', '好棒棒'],
    }
  },
  methods: {
    toggle() {
      if (!this.isActive) {
        this.empty();
      }
      this.isActive = !this.isActive;
    },
    empty() {
      this.msg = [];
    },
    pushMsg(msg) {
      this.msg.push({
        isHighlight: (msg.includes('===')),
        msg: msg
      });

      this.$nextTick(() => {
        const inspector = document.querySelector('.inspector');
        inspector.scrollTop = inspector.scrollHeight;
      });
    },
    addToMessages() {
      this.stateMessages.push(this.stateMsg);
      this.stateMsg='';

      const el = document.querySelector('.messages');
      this.scrollHeight = el.scrollHeight;
      el.scrollTop = el.scrollHeight;
    }
  },
  watch: {
    msg (val, oldValue) {
      console.log(`新的msg: ${val}`);
      console.log(`舊的msg: ${oldValue}`);
    }
  }
});

vm.component('demo-app', {
  template:'<div> <h3>{{msg}}</h3> <input v-model="msg"></div>',
  data() {
    return {
      msg: 'Hello vue.js'
    }
  },
  beforeCreate() {
    this.$emit('update', '=== beforeCreate! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  created() {
    this.$emit('update', '=== created! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  beforeMount() {
    this.$emit('update', '=== beforeMount! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  mounted() {
    this.$emit('update', '=== mounted! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  beforeUpdate() {
    this.$emit('update', '=== beforeUpdate! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  updated() {
    this.$emit('update', '=== updated! ===');
    this.$emit('update', 'this.msg: ${this.msg}');
    this.$emit('update', 'this.$el: ${this.$el}');
  },
  beforeUnmount() {
    this.$emit('update', '=== beforeUnmount! ===');
  },
  unmounted() {
    this.$emit('update', '=== unmounted! ===');
  },
});

vm.mount('#app')
