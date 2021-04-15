<template>
    <div>
        <span class="title">Журнал</span>
        <ul class="log-list">
            <li v-for="log in readLogger" class="log-list__item">{{log}}</li>
        </ul>
    </div>

</template>

<script>
  export default {
    name: "AppLogList",
    computed: {
      readLogger() {
        return this.$store.getters.getLogger
      }
    }
  }
</script>

<style scoped>
    .log-list {
        border-top: 2px solid #56433D;
        background: #56433D;
        list-style: none;
        margin: 0;
        padding-left: 0;

        display: flex;
        flex-wrap: wrap;

        max-height: 40vh;
        overflow: auto;
    }

    .log-list__item {
        color: #F9C941;
        background: #56433D;
        padding: 1rem;
        text-decoration: none;
        border: 1px solid #f1dbdb;
    }
    .title {
        font-size: 18px;
        font-weight: bold;
    }
</style>
