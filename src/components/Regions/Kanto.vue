<template>
  <div>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <!-- Region de kanto -->
        <div class="w-full px-4 flex-1 md:w-auto md:flex-none">
          <div class="container mx-auto">
            <div class="flex flex-wrap">
              <div class="w-1/3 mr-2">
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
                  Kanto Pokédex: {{ num }}
                </span>
              </div>
              <div class="w-1/3 mr-2">
                <input
                  v-model="filter"
                  @keyup.prevent="filterPokemon()"
                  class="text-sm
                block
                my-4
                p-3
                text-blueGray-700
                rounded
                border border-solid border-blueGray-100"
                  type="text"
                  placeholder="Buscar Pokémon"
                />
              </div>
              <div class="w-1/3">
                <select
                  v-model="tipo"
                  @change="tipoFiltrado()"
                  style="padding-right: 50px;"
                  id="tipo"
                  class="text-sm
                block
                my-4
                p-3               
                text-blueGray-700
                rounded
                border border-solid border-blueGray-100"
                >
                  <option value="" selected disabled>
                    Seleccione el tipo
                  </option>
                  <option v-if="existe_tipo_normal">Normal</option>
                  <option v-if="existe_tipo_fighting">Fighting</option>
                  <option v-if="existe_tipo_flying">Flying</option>
                  <option v-if="existe_tipo_poison">Poison</option>
                  <option v-if="existe_tipo_ground">Ground</option>
                  <option v-if="existe_tipo_rock">Rock</option>
                  <option v-if="existe_tipo_bug">Bug</option>
                  <option v-if="existe_tipo_ghost">Ghost</option>
                  <option v-if="existe_tipo_steel">Steel</option>
                  <option v-if="existe_tipo_fire">Fire</option>
                  <option v-if="existe_tipo_water">Water</option>
                  <option v-if="existe_tipo_grass">Grass</option>
                  <option v-if="existe_tipo_electric">Electric</option>
                  <option v-if="existe_tipo_psychic">Psychic</option>
                  <option v-if="existe_tipo_ice">Ice</option>
                  <option v-if="existe_tipo_dragon">Dragon</option>
                  <option v-if="existe_tipo_dark">Dark</option>
                  <option v-if="existe_tipo_fairy">Fairy</option>
                  <!-- <option
                    v-for="(tipo, key) in listaTipos"
                    :value="tipo.id"
                    :key="key"
                  >
                    {{ tipo.name }}
                  </option> -->
                </select>
              </div>
            </div>
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
                    Habilidades
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
                <tr v-for="(pokemon, key) in kanto" :key="key">
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
                      <br />
                      <!-- tipo pokemon 1 -->
                      <div class="w-full mt-2">
                        <div v-if="pokemon.type_1 == 'dark'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'fire'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'grass'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'water'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'bug'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'electric'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'ground'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'rock'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'fairy'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'poison'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'psychic'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'flying'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'dragon'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'fighting'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'normal'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'ghost'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'ice'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'sinister'">
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
                            {{ pokemon.type_1 }}
                          </span>
                        </div>
                        <div v-if="pokemon.type_1 == 'steel'">
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
                            {{ pokemon.type_1 }}
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
import Loader from "@/components/Usables/Loader.vue";
import Swal from "sweetalert2";

@Component({
  components: {
    Loader
  },
})
export default class Kanto extends Vue {
  // Regiones
  kanto: any = []; //0-151
  johto: any = []; //152-251
  hoenn: any = []; //252-386
  sinnoh: any = []; //387-493
  teselia: any = []; //494-649
  kalos: any = []; //650-721
  alola: any = []; //722-809
  galar: any = []; //809-898

  tipos: any = [];
  num = "";
  filter = "";
  pokemons: any = [];
  array: any = [];

  listaTipos: any = [];
  tipo = "";
  tipoFilter = [];

  existe_tipo_normal = false;
  existe_tipo_fighting = false;
  existe_tipo_flying = false;
  existe_tipo_poison = false;
  existe_tipo_ground = false;
  existe_tipo_rock = false;
  existe_tipo_bug = false;
  existe_tipo_ghost = false;
  existe_tipo_steel = false;
  existe_tipo_fire = false;
  existe_tipo_water = false;
  existe_tipo_grass = false;
  existe_tipo_electric = false;
  existe_tipo_psychic = false;
  existe_tipo_ice = false;
  existe_tipo_dragon = false;
  existe_tipo_dark = false;
  existe_tipo_fairy = false;


  async mounted() {
    // console.log("mounted");
    await this.getTodosKanto();
    // await this.obtenerTipos();
    await this.listarTipos();
  }

  async updated() {
    // await this.listarTipos();
  }

  async getTodosKanto() {
    for (let i = 0; i <= 151; i++) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((respuesta) => {
          // si no te cargan todos los pokemons es por que hay muchos datos cargados, la solucion es formatear tu pc          

          // tipos for
          this.num = i;
          // console.log(this.num);
          this.pokemon = respuesta
          for (let j = 0; j < respuesta.data.types.length; j++) {
            // console.log(respuesta.data.types[j].type.name);
            this.tipos.push(respuesta.data.types[j].type.name);
          }
          // console.log(this.tipos);

          // si te sale un error en (respuesta.data.#la_variable) no se por que sera xd pero funciona
          let pokemon = {
            id: respuesta.data.id,
            name: respuesta.data.name.toUpperCase(),
            url: respuesta.data.sprites.front_default,
            url_shiny: respuesta.data.sprites.front_shiny,
            // traigo las habilidades
            ability: respuesta.data.abilities[0].ability.name,
            weight: respuesta.data.weight,
            // traigo el tipo 1 y 2
            type_0: this.tipos.shift(),
            type_1: this.tipos.shift(),
          };

          // Pasamos un array de string a una materia de tipo array de objetos      
          this.kanto.push(pokemon);
          this.pokemons = this.kanto;          

        })
        .catch((error) => {
          console.log(error);
          // Swal.fire(
          //   "ERROR!",
          //   "Se ha presentado un error en el servidor!",
          //   "error"
          // );
        });
    }
  }
  // filtro de pokemones
  filterPokemon() {
    let arreglo = [];

    for (let poke of this.pokemons) {
      let name = poke.name.toLowerCase();

      if (
        name.indexOf(this.filter) >= 0 ||
        this.filter == ""
      ) {
        arreglo.push(poke);
      }
    }

    this.kanto = arreglo;
    if (this.kanto.length == 0) {
      console.log("no hay");
      Swal.fire({
        title: "No hay coincidencias",
        position: "center",
        timer: 1000,
        text: "No se encontró ningun Pokemon con ese Nombre",
        showConfirmButton: false,
        // confirmButtonText: "Aceptar",
        // confirmButtonColor: "#238276",
        backdrop: "rgba(0,0,0,0)",
        background: "#eeeeee",
      });
      this.filter = "";
      this.kanto = this.pokemons;
    }

  }

  // async obtenerTipos() {
  //   for (let i = 0; i <= 18; i++) {
  //     await axios
  //       .get("https://pokeapi.co/api/v2/type/" + i)
  //       .then((respuesta) => {      


  //         let tipos = {
  //           id: respuesta.data.id,
  //           name: respuesta.data.name,
  //           // name: respuesta.data.name.charAt(0).toUpperCase() +
  //           //   respuesta.data.name.slice(1),
  //         }
  //         this.listaTipos.push(tipos);
  //         this.tipoFilter = this.listaTipos;
  //         // console.log(this.tipoFilter);       
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  async tipoFiltrado() {
    this.kanto = [];
    this.listarTipos();
    for (let poket of this.tipoFilter) {
      // console.log(poket.name);
      let name = poket.name;
      if (this.tipo != "") {
        if (name.indexOf(this.tipo) >= 0) {
          this.kanto.push(poket);
        } else {
          // no hay coincidencias
        }
      } else {
        this.kanto = this.tipoFilter;
      }
    }
  }

  async listarTipos() {
    for (let poke of this.pokemons) {
      console.log(poke.type_0);
      console.log(poke.type_1);

      if (poke.type_0 == "normal" || poke.type_1 == "normal") {
        this.existe_tipo_normal = true;
      } else if (poke.type_0 == "fighting" || poke.type_1 == "fighting") {
        this.existe_tipo_fighting = true;
      } else if (poke.type_0 == "flying" || poke.type_1 == "flying") {
        this.existe_tipo_flying = true;
      } else if (poke.type_0 == "poison" || poke.type_1 == "poison") {
        this.existe_tipo_poison = true;
      } else if (poke.type_0 == "ground" || poke.type_1 == "ground") {
        this.existe_tipo_ground = true;
      } else if (poke.type_0 == "rock" || poke.type_1 == "rock") {
        this.existe_tipo_rock = true;
      } else if (poke.type_0 == "bug" || poke.type_1 == "bug") {
        this.existe_tipo_bug = true;
      } else if (poke.type_0 == "ghost" || poke.type_1 == "ghost") {
        this.existe_tipo_ghost = true;
      } else if (poke.type_0 == "steel" || poke.type_1 == "steel") {
        this.existe_tipo_steel = true;
      } else if (poke.type_0 == "fire" || poke.type_1 == "fire") {
        this.existe_tipo_fire = true;
      } else if (poke.type_0 == "water" || poke.type_1 == "water") {
        this.existe_tipo_water = true;
      } else if (poke.type_0 == "grass" || poke.type_1 == "grass") {
        this.existe_tipo_grass = true;
      } else if (poke.type_0 == "electric" || poke.type_1 == "electric") {
        this.existe_tipo_electric = true;
      } else if (poke.type_0 == "psychic" || poke.type_1 == "psychic") {
        this.existe_tipo_psychic = true;
      } else if (poke.type_0 == "ice" || poke.type_1 == "ice") {
        this.existe_tipo_ice = true;
      } else if (poke.type_0 == "dragon" || poke.type_1 == "dragon") {
        this.existe_tipo_dragon = true;
      } else if (poke.type_0 == "dark" || poke.type_1 == "dark") {
        this.existe_tipo_dark = true;
      } else if (poke.type_0 == "fairy" || poke.type_1 == "fairy") {
        this.existe_tipo_fairy = true;
      }
    }
  }
}
</script>