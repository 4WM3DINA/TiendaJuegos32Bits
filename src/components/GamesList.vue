<template>
  <div class="container">
    <h3 class="fw-bold">Tienda 32 Bits</h3>
    <hr />
    <h5 class="fw-bold">Lista de Juegos</h5>
    <div>
      <table class="table mt-4" style="background-color:rgb(255, 164, 196)">
        <thead>
          <tr class="table-danger">
            <th scope="col">#</th>
            <th scope="col">Código</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, index) in games" :key="index" :style="{color: game.color}">
            <td>{{game.codigo}}</td>
            <td>
              <select v-model="game.color">
                <option value="red">Rojo</option>
                <option value="green">Verde</option>
                <option value="black">Negro</option>
                <option value="blue">Azul</option>
              </select>
            </td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>${{Number(game.precio).toLocaleString() }}</td>
            <td>
              <button @click="increase(index)">+</button>
              <button @click="decrease(index)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h5 class="fw-bold">Total: {{totalGames}} juegos</h5>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from "vuex";
export default {
  name: "App",
  computed:{
    ...mapState(["games"]),
    ...mapGetters(["totalGames"])
  },
  methods:{
    ...mapActions(["increase", "decrease"]),
  },
};
</script>

<style scoped></style>
