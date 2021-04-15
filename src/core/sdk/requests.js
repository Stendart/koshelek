// const getDepthOfMarket = () => {
//   const symbol = 'BNBBTC'
//   const url = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=1000`
// }

export default {
  data() {
    return {
      connection: null
    }
  },
  // created () {
  //   this.connection = new WebSocket('wss://dex.binance.org/api/ws'); // wss://stream.binance.com:9443
  //
  //   this.connection.onopen = (e) => {
  //     console.log('connection is opend', e)
  //   }
  //
  //   this.connection.onmessage = (e) => {
  //     console.log('onmessage', e.data)
  //   }
  //
  //   this.connection.onerror = (e) => {
  //     console.log('onerror', e)
  //   }
  // },
  methods: {
    subscribe(symbol="BNB_BTCB-1DE") {
      this.connection.send(JSON.stringify(
        {
          method: "subscribe", topic: "marketDiff", symbols: [symbol]
        }))
    },
  //   async getDepthOfMarket (symbol = 'BNBBTC') {
  //     console.log('symbol', symbol)
  //     const response = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=1000`)
  //       .then((data) => data.json())
  //
  //     console.log('response', response)
  //
  //   }
  }
}

export function subscribe(wss, symbol="BNB_BTCB-1DE") {
  if(wss.readyState  === 1) {
    wss.send(JSON.stringify(
      {
        method: "subscribe", topic: "marketDiff", symbols: [symbol]
      }))
  } else {
    console.log('wss wait connecting')
    setTimeout(() => {
      subscribe(wss)
    },100);
  }
}

export function createWsConnection() {
  const connection = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth'); // wss://stream.binance.com:9443

  connection.onopen = (e) => {
    console.log('connection is opend', e)
  }

  // connection.onmessage = (e) => {
  //   console.log('onmessage', e.data)
  // }

  connection.onerror = (e) => {
    console.log('onerror', e)
  }

  return connection
}

export async function getDepthOfMarket (symbol = 'BTCUSDT') {
  const response = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=100`)
    .then((data) => data.json())
  console.log('===========',response)
  return response

}

