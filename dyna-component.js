const app = Vue.createApp({
  data(){
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive'],
    }
  },
  computed: {
    currentTabComponent () {
      return `tab-${ this.currentTab.toLowerCase() }`
    }
  }
});

app.component('tab-home', {
  name: 'tab-home',
  template: `
  <div class="demo-tab"><input v-model="title"></div>
  `,
  data: () => ({ title: 'Home component' })
});
app.component('tab-posts', {
  template: `
  <div class="demo-tab"><input v-model="title"></div>
  `,
  data: () => ({ title: 'Posts component' })
});

app.component('tab-archive', {
  template: `
  <div class="demo-tab"><input v-model="title"></div>
  `,
  data: () => ({ title: 'Archive component' })
});

app.mount('#app');
