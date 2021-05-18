const app = Vue.createApp({
  data() {
    return {
      msg: 'Parent !',
      options: ['header', 'footer', 'default'],
      dynamic_slot_name: 'header',
      langOptions: [{
        name: '繁體中文',
        val: 'tw'
      },
      {
        name: '日本語',
        val: 'jp'
      },
      {
        name: 'English',
        val: 'en'
      },
      ],
      lang: 'tw'
    }
  }
});

//保留一個空間可以從外部傳入內容， 而子元件本身對 slot 並沒有控制權
// 預設內容是 外部沒呼叫msg時會出現的值
app.component('custom-component', {
  template: `
  <div>
  Hello!
  <slot></slot>
  <slot>預設內容</slot>
  </div>
  `,
  data() {
    return {
      msg: 'Child!'
    }
  }
});

app.component('light-box', {
  template: `
  <div class="lightbox">
    <div class="model-mask" :style="modelStyle">
      <div class="model-container" @click.self="toggleModel">
        <div class="model-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <main>
            <slot name="default" v-bind:hello="helloString[lang]"></slot>
          </main>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>
      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>
  `,
  props: {
    lang: {
      type: String,
      default: 'tw'
    }
  },
  data: () => ({
    helloString: {
      'tw': '哈囉 世界',
      'jp': 'ハロー・ワールド',
      'en': 'Hello World'
    },
    isShow: false
  }),
  computed: {
    modelStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModel() {
      this.isShow = !this.isShow;
    }
  }
})

app.mount('#app');
