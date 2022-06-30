<template>
  <div id="app">
    <NavBar />
    <section>
      <router-link to="/">🏠Home</router-link> |
      <router-link to="/gamelist">🎮GameList</router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import GamesList from "./components/GamesList.vue";
export default {
  components: {
    NavBar,
    GamesList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: linear-gradient(
    90deg,
    rgb(191, 240, 237) 0%,
    rgb(30, 180, 148) 50%,
    rgb(106, 224, 145) 100%
  );
}

section {
  padding: 30px;
}

section a {
  font-weight: bold;
  color: #2c3e50;
}

section a.router-link-exact-active {
  color: #121615;
}
</style>
