const {
  ref,
  watch,
  createApp
} = Vue;

const sum = ref(0);
const plus = () => sum.value++
const reset = () => sum.value = 0;

const app = createApp({
  setup() {
    return {
      sum,
      plus
    }
  }
});

app.component('button-counter', {
  template: `
  <button @click="plus">You clicked me {{ count }} times</button>
  `,
  setup(props, {emit}) {
    const count = ref(0);

    const plus = () => {
      count.value++
      emit('add-sum');
    };

    watch(sum, v => count.value = v === 0 ? 0 : count.value);

    return {
      count,
      plus
    }
  }
});

app.component('button-reset', {
  template: `
  <button @click="reset">reset</button>
  `,
  setup() {
    return {
      reset
    }
  }
});

app.mount('#app');
