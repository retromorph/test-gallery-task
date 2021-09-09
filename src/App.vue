<template>
  <div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CCounter from "@/components/ui/CCounter.vue";
import CSearchInput from "@/components/ui/CSearchInput.vue";

export default defineComponent({
  name: 'App',
  components: {CSearchInput, CCounter},
})
</script>

<style lang="stylus">
@import '~normalize.css'
@import "~@/assets/styles/global.styl"

body
  background-color primary-color
</style>
