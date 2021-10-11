<template>
  <div>
    <button id="scroll">
      <i class="fa fa-arrow-up"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    const scroll = document.getElementById('scroll')
    scroll.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }

})
</script>

<style>
#scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  background-color: #DC2626;
  box-shadow: 0px 0px 5px rgb(233, 23, 23);
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
}

.fa-arrow-up {
  font-size: 12px;
  color: white;
}
</style>