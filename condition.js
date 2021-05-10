const vm = Vue.createApp({
  data: () => {
    return {
      isShow: true,
      count: 0,
      t_value: 'A',
      arr: ['008', 'JS', 'js', 'awesome'],
      books: {
        title: '08js',
        author: 'Kuro',
        publisheAt: '2019/09',
      },
      lists: [
        {
          id: 'task001',
          title: '選項1',
          isDone: false
        },
        {
          id: 'task002',
          title: '選項2',
          isDone: false
        },
        {
          id: 'task003',
          title: '選項3',
          isDone: false
        },
      ],
      list_test: [ "Vue", "is", "Awesome" ],
    }
  },
  created() {
    console.log("create");
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("unmounted");
  },
  computed: {
    todoLists(){
      return this.lists.filter( d => !d.isDone )
    },
    doneLists() {
      return this.lists.filter( d => d.isDone )
    }
  },
  methods: {
    changeVal () {
      // this.$set(this.list_test, 0, "08JS")
      alert(this.list_test);
    }
  }
}).mount('#app')
