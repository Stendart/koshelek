<template>
    <div class="dropdown-wrapper">
        <span class="title">Выберите валюту: </span>
        <ul class="dropdown">
            <li>{{curentSymbol}}
                <ul class="dropdown__items">
                    <li v-for="s in symbols" @click="changeSymbol(s)" class="dropdown__element">{{s}}</li>
                </ul>
            </li>
        </ul>
    </div>

</template>

<script>
  export default {
    name: "AppChangeSymbol",
    data() {
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
    },
  }
</script>

<style scoped>
    .title {
        font-size: 18px;
        font-weight: bold;
    }
    .dropdown-wrapper {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dropdown {
        width: 100%;
    }
    .dropdown, .dropdown__items {
        border-top: 2px solid #56433D;
        background: #56433D;
        list-style: none;
        margin: 0;
        padding-left: 0;
    }

    li {
        color: #F9C941;
        background: #56433D;
        display: block;
        float: left;
        padding: 1rem 0;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;

        width: 100%;
    }


    li:hover {
        background: #8e7878;
        cursor: pointer;
    }

    .dropdown__items {
        background: orange;
        visibility: hidden;
        opacity: 0;
        min-width: 5rem;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;

        width: 100%;
    }

    ul li:hover > ul,
    .dropdown__items:hover {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    .dropdown__element {
        clear: both;
        width: 100%;
    }
</style>
