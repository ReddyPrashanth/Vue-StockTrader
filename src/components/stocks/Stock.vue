<template>
    <div class="col-sm-6 col-md-4">
      <div class="card border-success mb-3">
        <div class="card-header">
          {{stock.name}}
          <small>(Price: {{stock.value}})</small>
        </div>
        <div class="card-body text-success">
            <input type="number"
                   class="form-control float-left col-md-8"
                   placeholder="Quantity" v-model="quantity">
            <button class="btn btn-success col-md-3 float-right"
                    @click="buyStock"
                    :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
                    >{{insufficientFunds ? 'insuf': 'Buy'}}
            </button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
          return {
            quantity: 0
          }
        },
      computed: {
        stocks() {
          return this.$store.getters.funds;
        },
        insufficientFunds() {
          return this.quantity * this.stock.value > this.stocks;
        }
      },
      methods: {
          buyStock() {
            const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.value,
              quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
          }
      }
    }
</script>

<style scoped>

</style>
