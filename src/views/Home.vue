<template>
  <div>
    <!-- <IndexNavbar /> -->
    <div class="mt-10"></div>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4 flex-1 md:w-auto md:flex-none">
          <div>
            <span
              class="
                text-sm
                block
                my-4
                p-3
                text-blueGray-700
                rounded
                border border-solid border-blueGray-100
              "
              >Lista de Pokémon 1 Generación</span
            >
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Pokemon
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Nombre
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Stats
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    moves
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pokemon, key) in pokemons" :key="key">
                  <th
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                      text-left
                    "
                  >
                    <div>
                      <img style="width: auto" :src="pokemon.url" alt="" />
                    </div>
                  </th>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    {{ pokemon.name }}
                  </td>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    <span
                      class="
                        text-xs
                        font-semibold
                        inline-block
                        py-1
                        px-2
                        uppercase
                        rounded
                        text-blueGray-600
                        bg-blueGray-200
                        uppercase
                        last:mr-0
                        mr-1
                      "
                    >
                      {{ pokemon.ability }}
                    </span>
                  </td>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    <span
                      class="
                        text-xs
                        font-semibold
                        inline-block
                        py-1
                        px-2
                        uppercase
                        rounded-full
                        text-red-600
                        bg-red-200
                        uppercase
                        last:mr-0
                        mr-1
                      "
                    >
                      {{ pokemon.move }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

@Component({
  components: {
    IndexNavbar,
  },
})
export default class Pokemones extends Vue {
  pokemons: any = [];
  async mounted() {
    // console.log("mounted");
    await this.getTodos();
  }
  updated() { }

  getTodos() {
    for (let i = 0; i <= 151; i++) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((respuesta) => {
          // console.log(respuesta.data.moves);
          let pokemon = {
            name: respuesta.data.name.toUpperCase(),
            url: respuesta.data.sprites.front_default,
            ability: respuesta.data.abilities[0].ability.name.toUpperCase(),
            move: respuesta.data.moves[0].move.name.toUpperCase(),
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
