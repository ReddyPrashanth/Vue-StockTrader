<template>
    <div>
      <h1>Trade or View your Portfolio</h1>
      <h6>You can save & load your data</h6>
      <h6>Click 'end day' to begin a New Day!</h6>
      <hr>
      <p>Your funds: {{funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
          funds() {
            return this.$store.getters.funds;
          }
        }
    }
</script>

<style scoped>

</style>
