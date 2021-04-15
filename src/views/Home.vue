<template>
  <div class="home">
    <AppDisplayTable :table-title="tableTitle"></AppDisplayTable>
  </div>
</template>

<script>
import AppDisplayTable from '../components/AppDisplayTable';
export default {
  name: 'Home',
  data() {
    return {
      tableTitle: ['Amount', 'Price', 'Total']
    }
  },
  components: {
    AppDisplayTable
  }
}
</script>
