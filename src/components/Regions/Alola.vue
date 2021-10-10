<template>
  <div>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <!-- Region de Alola -->
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
            >
              Alola Pokédex
            </span>
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
                    Pokémon
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
                    Pokémon Shiny
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
                    Peso
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
                    Abilidades
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
                    Tipos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pokemon, key) in alola" :key="key">
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
                      <img
                        style="width: auto"
                        :src="pokemon.url_shiny"
                        alt=""
                      />
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
                    {{ pokemon.weight }} kg
                  </td>
                  <!-- Abilidades -->
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

                  <!-- pokemon tipo -->
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
                    <!-- Tipos de pokemon por color -->
                    <div class="flex flex-wrap">
                      <!-- tipo pokemon 0 -->
                      <div class="w-full">
                        <div v-if="pokemon.type_0 == 'dark'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              dark
                              text-dark
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'fire'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              fire
                              text-fire
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'grass'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              grass
                              text-grass
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'water'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              water
                              text-water
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'bug'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              bug
                              text-bug
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'electric'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              electric
                              text-electric
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'ground'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              ground
                              text-ground
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'rock'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              rock
                              text-rock
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'fairy'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              fairy
                              text-fairy
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'poison'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              poison
                              text-poison
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'psychic'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              psychic
                              text-psychic
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'flying'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              flying
                              text-flying
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'dragon'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              dragon
                              text-dragon
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'fighting'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              fighting
                              text-fighting
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'normal'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              normal
                              text-normal
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'ghost'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              ghost
                              text-ghost
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'ice'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              ice
                              text-ice
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'sinister'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              sinister
                              text-sinister
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_0 == 'steel'">
                          <span
                            class="
                              text-xs
                              font-semibold
                              inline-block
                              py-1
                              px-2
                              uppercase
                              rounded
                              steel
                              text-steel
                              uppercase
                              last:mr-0
                              mr-1
                            "
                          >
                            {{ pokemon.type_0 }}
                          </span>
                        </div>
                      </div>
                    </div>
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

@Component({
  components: {
  },
})
export default class Alola extends Vue {
  // Regiones
  kanto: any = []; //0-151
  johto: any = []; //152-251
  hoenn: any = []; //252-386
  sinnoh: any = []; //387-493
  teselia: any = []; //494-649
  kalos: any = []; //650-721
  alola: any = []; //722-809
  galar: any = []; //809-898

  async mounted() {
    // console.log("mounted");
    await this.getTodosAlola();
  }
  updated() { }

  async getTodosAlola() {
    for (let i = 722; i <= 809; i++) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((respuesta) => {
          // si no te cargan todos los pokemons es por que hay muchos datos cargados, la solucion es formatear tu pc
          console.log(respuesta.data);

          // si te sale un error en (respuesta.data.#la_variable) no se por que sera xd pero funciona
          let pokemon = {
            name: respuesta.data.name.toUpperCase(),
            url: respuesta.data.sprites.front_default,
            url_shiny: respuesta.data.sprites.front_shiny,
            // traigo las habilidades
            ability: respuesta.data.abilities[0].ability.name,
            weight: respuesta.data.weight,
            // traigo el tipo 1 y 2
            type_0: respuesta.data.types[0].type.name,
            // type_1: respuesta.data.types[1].type.name,
          };
          this.alola.push(pokemon);
          // console.log(this.pokemons);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>