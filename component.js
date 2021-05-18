const app = Vue.createApp({
  data() {
    return {
      msg: '這是外層元件的msg',
      books: [
        {
          id: 'a00001',
          name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
          author: 'Kuro Hsu',
          publishedAt: '2019/09'
        },
        {
          id: 'a00002',
          name: '重新認識 Vue.js',
          author: 'Kuro Hsu',
          publishedAt: '2021/02'
        },
      ],
      message: "Hello Vue!",
    }
  },
  provide(){
    return {
      provideMsg: this.message,
      provideMsg2: Vue.computed(()=>this.message) // 希望inject能與provide連動的寫法
    }
  }
  // methods: {
  //   updateInfo(val){
  //     const idx = this.books.findIndex(d => d.id === val.id);
  //     this.books[idx] = val;
  //   }
  // },
});
app.component('my-component', {
  // template: `
  // <div class="component">
  //   <div>從props 來的parentMsg ==> {{ parentMsg }}</div>
  //   <div>自己的 msg ==> {{ msg }}</div>
  // </div>`,
  // template: `
  // <div class="child-app">
  //   <div><input type="text" v-model="bookInfo.name"></div>
  //   <div><input type="text" v-model="bookInfo.author"></div>
  //   <div><input type="text" v-model="bookInfo.publishedAt"></div>
  // </div>
  // `,
  // template: `
  // <div class="child-app">
  //   <div><input type="text" v-model="name"></div>
  //   <div><input type="text" v-model="author"></div>
  //   <div><input type="text" v-model="publishedAt"></div>
  // </div>
  // `,
  // template: `
  // <div class="child-app">
  //   <div><input type="text" v-model="bookName"></div>
  //   <div><input type="text" v-model="bookAuthor"></div>
  //   <div><input type="text" v-model="bookPublishedAt"></div>
  // </div>
  // `,
  // template: `
  // <div class="child-app">
  //   <div><input type="text" v-model="bookInfo.name"></div>
  //   <div><input type="text" v-model="bookInfo.author"></div>
  //   <div><input type="text" v-model="bookInfo.publishedAt"></div>
  // </div>
  // `,
  // template: `
  // <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  // `,
  template: `
  <ul>
    <li v-for="i in 3">{{ i }} <list-item /></li>
  </ul>
  `,
  components: {
    'list-item': {
      inject:['provideMsg', 'provideMsg2'],
      template: `
      <div>{{ provideMsg }}</div>
      <div>{{ provideMsg2.value }}</div>
      `
    }
  },
  data () {
    return {
      bookInfo: {
        id: this.id,
        name: this.name,
        author: this.author,
        publishedAt: this.publishedAt
      }
    }
  },
  // props: ['id', 'name', 'author', 'published-at'],
  props: ["modelValue"],
  // watch: {
  //   bookInfo: {
  //     deep: true,
  //     handler(val){
  //       this.$emit('update', val);
  //     },
  //   },
  // },
  // props: {
  //   // 'parent-msg': {
  //   //   type: String
  //   // },
  //   bookInfo: {
  //     type: Object
  //   },
  // },
  // data(){
  //   return {
  //     msg: '這是子元件的msg',
  //   }
  // },
});

app.mount('#app');
