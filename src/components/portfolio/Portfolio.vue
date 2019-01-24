<template>
   <div>
      <app-portfolio-stock v-for="stock in stocks" :stock="stock"></app-portfolio-stock>
   </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';
    export default {
        computed: {
          ...mapGetters({
            stocks: 'stockPortfolio'
          })
        },
      components: {
          'app-portfolio-stock': Stock
      }
    }
</script>

<style scoped>

</style>
