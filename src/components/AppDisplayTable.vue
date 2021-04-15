<template>
    <div class="table-wrapper">
        <caption class="table-wrapper__title">Coin list</caption>
        <div class="table-wrapper__column-wrapp">
            <tableComponent v-if="depth"
                            :table-head="tableTitle"
                            :data-list="depth.asks"
            ></tableComponent>
            <tableComponent v-if="depth"
                            :table-head="tableTitle"
                            :data-list="depth.bids"
            ></tableComponent>
        </div>
    </div>
</template>

<script>
import tableComponent from './tableComponent';
import requests from '../core/sdk/requests';
import {createWsConnection, subscribe, getDepthOfMarket} from '../core/sdk/requests';

export default {
  name: "AppDisplayTable",
  data() {
    return {
      depth: null,
      ws: null,
      tableTitle: ['Amount', 'Price', 'Total']
    }
  },
  components: {
    tableComponent
  },
  async created() {
    this.ws = createWsConnection()
    this.depth = await getDepthOfMarket()
  },
  mounted() {
    // subscribe(this.ws)

    this.ws.onmessage = (msg) => {
      const updateData = JSON.parse(msg.data)
      // console.log('Its work', updateData)
      // console.log('[ ', updateData.U,'===', updateData.u, ']')
      // console.log('this.depth?.lastUpdateId', this.depth?.lastUpdateId)
      if (updateData.U <= this.depth?.lastUpdateId+1 && updateData.u >= this.depth?.lastUpdateId+1) {
        this.depth.asks.shift(updateData.a)
        this.depth.bids.shift(updateData.b)
        console.log('Обновление состоялось')
      }
    }
  },
}
</script>

<style scoped>
    .table-wrapper__column-wrapp {
        display: flex;
        justify-content: space-around;

        height: 70vh;
        overflow: hidden;
    }
    .table-wrapper__column-wrapp:hover {
        margin-right: calc(-1 * (100vw - 100%));
        overflow-y: scroll;
    }
    .table-wrapper__title {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: bold;
        font-size: 21px;
    }
    .table-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>
