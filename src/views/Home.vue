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
              >Kanto Pokédex</span
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
                    Abilidad
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
                    Tipo
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
                    <!-- Tipos de pokemon por color -->
                    <div>
                      <div v-if="pokemon.type == 'fire'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'grass'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'water'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'bug'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'electric'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'ground'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'rock'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'fairy'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'poison'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'psychic'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'flying'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'dragon'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'fighting'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'normal'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'ghost'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'ice'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'sinister'">
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
                          {{ pokemon.type }}
                        </span>
                      </div>
                      <div v-if="pokemon.type == 'steel'">
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
                          {{ pokemon.type }}
                        </span>
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

import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

@Component({
  components: {
    IndexNavbar,
  },
})
export default class Pokemones extends Vue {
  pokemons: any = [];
  // abilities: any = []; 
  // moves: any = [];
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

          // // abilities
          // for (let i = 0; i < respuesta.data.abilities.length; i++) {
          //   this.abilities.push(respuesta.data.abilities[i].ability.name);
          //   console.log(this.abilities);
          // }
          // // moves
          // for (let i = 0; i < respuesta.data.moves.length; i++) {
          //   this.moves.push(respuesta.data.moves[i].move.name);
          //   console.log(this.moves);
          // }
          console.log(respuesta.data.types[0].type);


          let pokemon = {
            name: respuesta.data.name.toUpperCase(),
            url: respuesta.data.sprites.front_default,
            ability: respuesta.data.abilities[0].ability.name,
            type: respuesta.data.types[0].type.name,
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
<style>
/* color de letra */
.text-fire {
  color: #a14b4b;
}
.text-grass {
  color: #289c28;
}
.text-electric {
  color: #b89405;
}
.text-water {
  color: #3899f8;
}
.text-ground {
  color: #a1936f;
}
.text-rock {
  color: #998549;
}
.text-fairy {
  color: #a773a7;
}
.text-poison {
  color: #854a7a;
}
.text-bug {
  color: #8d9921;
}
.text-dragon {
  color: #6350b6;
}
.text-psychic {
  color: #9c4966;
}
.text-flying {
  color: #98a8f0;
}
.text-fighting {
  color: #a05038;
}
.text-normal {
  color: #837d72;
}
.text-ghost {
  color: #6060b0;
}
.text-ice {
  color: #4397aa;
}
.text-sinister {
  color: #7a5848;
}
.text-steel {
  color: #a8a8c0;
}
/* color de fondo */
.fire {
  background-color: #f57d7dad;
}
.grass {
  background-color: #82f182b2;
}
.electric {
  background-color: #fcdf69b4;
}
.water {
  background-color: #78b9faad;
}
.ground {
  background-color: #e9d6a49c;
}
.rock {
  background-color: #c5ae69a9;
}
.fairy {
  background-color: #e6a3e6b0;
}
.poison {
  background-color: #e075ccad;
}
.bug {
  background-color: #c1cc5db4;
}
.dragon {
  background-color: #8c77ec9f;
}
.psychic {
  background-color: #fc81acab;
}
.flying {
  background-color: #98a8f0b7;
}
.fighting {
  background-color: #ce7c63a2;
}
.normal {
  background-color: #a8a090ad;
}
.ghost {
  background-color: #9494e7a8;
}
.ice {
  background-color: #8adceeaf;
}
.sinister {
  background-color: #ac8573b7;
}
.steel {
  background-color: #cbcbd8b6;
}
</style>