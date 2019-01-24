<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.value}}) | (Quantity: {{stock.quantity}})</small>
      </div>
      <div class="card-body text-success">
        <input type="number"
               class="form-control float-left col-md-8"
               placeholder="Quantity" v-model="quantity">
        <button class="btn btn-success col-md-3 float-right"
                @click="sellStock"
                :disabled="insufficientStocks || quantity <= 0 || Number.isInteger(quantity)"
                >{{insufficientStocks ? 'insuf' : 'Sell'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      stocks() {
        return this.$store.getters.funds
      },
      insufficientStocks() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeStockOrder: 'sellStock'
      }),
     sellStock() {
       const order = {
         stockId: this.stock.id,
         stockPrice: this.stock.value,
         quantity: this.quantity
       };
       this.placeStockOrder(order);
     }
    }
  }
</script>

<style scoped>

</style>
