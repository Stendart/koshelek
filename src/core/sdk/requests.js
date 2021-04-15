export function createWsConnection(s = 'btcusdt') {
  const symbol = s.toLowerCase()
  const connection = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`); // wss://stream.binance.com:9443

  connection.onopen = (e) => {
    console.log('connection is opend', e)
  }

  connection.onerror = (e) => {
    console.log('onerror', e)
  }

  return connection
}

export async function getDepthOfMarket (symbol = 'BTCUSDT') {
  const response = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=100`)
    .then((data) => data.json())
  return response

}

