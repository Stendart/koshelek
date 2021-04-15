<template>
    <div class="info">
        <AppChangeSymbol></AppChangeSymbol>
        <AppLogList ></AppLogList>
    </div>
</template>

<script>
    import AppLogList from '../components/AppLogList';
    import AppChangeSymbol from '../components/AppChangeSymbol';
  export default {
    /*data() {
      return {
        //curentSymbol: 'BTCUSDT',
        symbols: ['BTCUSDT', 'BNBBTC', 'ETHBTC']
      }
    },
    methods: {
      changeSymbol(symbol) {
        //this.curentSymbol = symbol
        this.$store.commit('changeSymbol', symbol)
        this.$store.commit('logger', symbol)
      }
    },
    computed: {
      curentSymbol() {
        return this.$store.getters.getCurentSymbol
      },
      readLogger() {
        return this.$store.getters.getLogger
      }
    },*/
    components: {
      AppLogList,
      AppChangeSymbol
    }
  }
</script>

<style scoped>
.info {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    height: 80vh;
}
</style>
