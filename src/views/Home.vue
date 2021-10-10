<template>
  <div>
    <div class="mt-10"></div>
    <div class="container mx-auto px-4">
      <!-- tabs -->
      <div class="flex flex-wrap">
        <div class="w-full">
          <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 1,
                  'text-white bg-red-600': openTab === 1
                }"
              >
                Kanto
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 2,
                  'text-white bg-red-600': openTab === 2
                }"
              >
                Johto
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 3,
                  'text-white bg-red-600': openTab === 3
                }"
              >
                Hoenn
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(4)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 4,
                  'text-white bg-red-600': openTab === 4
                }"
              >
                Sinnoh
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(5)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 5,
                  'text-white bg-red-600': openTab === 5
                }"
              >
                Teselia
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(6)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 6,
                  'text-white bg-red-600': openTab === 6
                }"
              >
                Kalos
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(7)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 7,
                  'text-white bg-red-600': openTab === 7
                }"
              >
                Alola
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                v-on:click="toggleTabs(8)"
                v-bind:class="{
                  'text-red-600 bg-white': openTab !== 8,
                  'text-white bg-red-600': openTab === 8
                }"
              >
                Galar
              </a>
            </li>
          </ul>
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div class="px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div
                  v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1
                  }"
                >
                  <Kanto />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2
                  }"
                >
                  <Johto />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 3,
                    block: openTab === 3
                  }"
                >
                  <Hoenn />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 4,
                    block: openTab === 4
                  }"
                >
                  <Sinnoh />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 5,
                    block: openTab === 5
                  }"
                >
                  <Teselia />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 6,
                    block: openTab === 6
                  }"
                >
                  <Kalos />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 7,
                    block: openTab === 7
                  }"
                >
                  <Alola />
                  <Loader />
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 8,
                    block: openTab === 8
                  }"
                >
                  <Galar />
                  <Loader />
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <!-- fin tabs -->
    </div>
  </div>
</template>
<script>
// import { Component, Vue } from "vue-property-decorator";
import Kanto from "@/components/Regions/Kanto.vue";
import Johto from "@/components/Regions/Johto.vue";
import Hoenn from "@/components/Regions/Hoenn.vue";
import Sinnoh from "@/components/Regions/Sinnoh.vue";
import Teselia from "@/components/Regions/Teselia.vue";
import Kalos from "@/components/Regions/Kalos.vue";
import Alola from "@/components/Regions/Alola.vue";
import Galar from "@/components/Regions/Galar.vue";

import Loader from "@/components/Loading/Loader.vue";

export default {
  name: "red-tabs",
  data() {
    return {
      openTab: 1
    };
  },
  components: {
    Kanto,
    Johto,
    Hoenn,
    Sinnoh,
    Teselia,
    Kalos,
    Alola,
    Galar,
    Loader
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>
