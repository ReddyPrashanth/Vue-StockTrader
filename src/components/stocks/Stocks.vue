<template>
    <div class="row">
      <app-stocks-stock v-for="stock in stocks" :stock="stock"></app-stocks-stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue';
    export default {
      components: {
          'app-stocks-stock': Stock
      },
      computed: {
        stocks() {
          return this.$store.getters.stocks;
        }
      }
    }
</script>

<style scoped>

</style>
