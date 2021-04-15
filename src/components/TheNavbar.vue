<template>
    <nav class="navbar">
        <h3>Koshelek</h3>
        <ul class="navbar__menu">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: "TheNavbar"
  }
</script>

<style scoped>
    .navbar {
        display: flex;
        padding: 0 2rem;
        justify-content: space-between;
        align-items: center;
        /*position: fixed;
        z-index: 20;*/
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
    }

    .navbar__menu {
        list-style: none;
        display: flex;
    }

    .navbar__menu li {
        margin-right: 2rem;
    }

    .navbar__menu li a {
        color: #2c3e50;
        text-decoration: none;
    }

    .navbar__menu li a:hover, .navbar__menu li a.active {
        border-bottom: 2px solid #3eaf7c;
    }
</style>
