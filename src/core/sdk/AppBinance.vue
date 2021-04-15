<template>
    <div>
        <button @click="subscribe">Request on server</button>
        <button @click="getDepthOfMarket()">getDepthOfMarket</button>
    </div>
</template>

<script>
    import requests from './requests';
  export default {
    name: "AppBinance",
    mixins: [requests],
    data() {
      return {
        // connection: null
      }
    },
    methods: {
      // subscribe() {
      //   this.connection.send(JSON.stringify(
      //     {
      //       method: "subscribe", topic: "marketDiff", symbols: ["BNB_BTCB-1DE"]
      //     }))
      // }
    },
    created() {
      // this.connection = new WebSocket('wss://dex.binance.org/api/ws'); // wss://stream.binance.com:9443
      //
      // this.connection.onopen = (e) => {
      //   console.log('connection is opend', e)
      // }
      //
      // this.connection.onmessage = (e) => {
      //   console.log('onmessage', e)
      // }
      //
      // this.connection.onerror = (e) => {
      //   console.log('onerror', e)
      // }
    }
  }
</script>

<style scoped>

</style>
