<template>
    <div class="table-wrapper">
        <caption class="table-wrapper__title">People list</caption>
        <div class="table-wrapper__column-wrapp">
            <tableComponent :table-head="tableTitle"></tableComponent>
            <tableComponent :table-head="tableTitle"></tableComponent>
        </div>
    </div>
</template>

<script>
import tableComponent from './tableComponent';
import requests from '../core/sdk/requests';
import {createWsConnection, subscribe, getDepthOfMarket} from '../core/sdk/requests';

export default {
  name: "AppDisplayTable",
  // mixins: [requests],
  props: {
    tableTitle: Array
  },
  data() {
    return {
      depth: null,
      ws: null
    }
  },
  components: {
    tableComponent
  },
  created() {
    this.ws = createWsConnection()
    this.depth = getDepthOfMarket()
  },
  mounted() {
    subscribe(this.ws)

    this.ws.onmessage = (msg) => {
      console.log('Its work', JSON.parse(msg.data))
    }
  },
}
</script>

<style scoped>
    .table-wrapper__column-wrapp {
        display: flex;
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
