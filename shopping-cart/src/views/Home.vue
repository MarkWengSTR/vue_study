<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="product-cards-container">
      <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import items from '@/data/items.js'
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
    ProductSummaryCard
  },
  data () {
    return {
      items: items
    }
  }
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
