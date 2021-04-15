<template>
    <div class="card center">
        <table class="table">
            <thead class="table__head">
            <tr>
                <th class="table__th" v-for="(tabName, index) in tableHead" :key="index">
                    {{tabName}}
                </th>
            </tr>
            </thead>
            <slot name="loader"></slot>
            <tbody >
            <tr v-for="p in dataList" :key="p.myId">
                <td>{{p[0]}}</td>
                <td>{{p[1]}}</td>
            </tr>
            </tbody>
        </table>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "tableComponent",
    props: {
      dataList: Array,
      tableHead: Array
    },
  }
</script>

<style scoped>
    .table {
        width: 90%;
        border-collapse: collapse;
    }

    .table__head {
        border: 2px solid #56433D;
    }
    .table__th {
        padding: 10px 20px;
        background: #56433D;
        color: #F9C941;
        border-right: 2px solid;
        font-size: 0.9em;

        cursor: pointer;
    }

    .table__th:last-child {
        border-right: none;
    }

    .table td {
        vertical-align: middle;
        padding: 10px;
        font-size: 14px;
        text-align: center;
        border-top: 2px solid #56433D;
        border-bottom: 2px solid #56433D;
        border-right: 2px solid #56433D;
    }
    .table td:first-child {
        border-left: 2px solid #56433D;
    }

    .table tbody tr:hover {
        background: #eee;
        cursor: pointer;
    }
</style>
