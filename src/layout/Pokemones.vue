<template>
  <div class="container">
    <!-- pokemones -->
    <div class="row">
      <h1 class="mt-4">Lista de Pokemones</h1>
    </div>
    <div>
      <div class="row">
        <table class="table table-bordered col-sm-12">
          <thead>
            <tr>
              <th scope="col" class="col-2">Pokemon</th>
              <th scope="col" class="col-2">Nombre</th>
              <th scope="col" class="col-2">Stats</th>
              <th scope="col" class="col-2">moves</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pokemon, key) in pokemons" :key="key">
              <td scope="row">
                <img
                  class="card-img-top"
                  style="width:auto;"
                  :src="pokemon.url"
                  alt=""
                />
              </td>
              <td>{{ pokemon.name }}</td>
              <td>{{ pokemon.ability }}</td>
              <td>{{ pokemon.move }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {},
})
export default class Pokemones extends Vue {
  pokemons: any = [];
  async mounted() {
    // console.log("mounted");
    await this.getTodos();
  }
  updated() {}

  getTodos() {
    for (let i = 0; i <= 2; i++) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((respuesta) => {
          // console.log(respuesta.data.moves);
          let pokemon = {
            name: respuesta.data.name,
            url: respuesta.data.sprites.front_default,
            ability: respuesta.data.abilities[0].ability.name,
            move: respuesta.data.moves[0].move.name,   
          };

          this.pokemons.push(pokemon);
          // console.log(this.pokemons);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>
