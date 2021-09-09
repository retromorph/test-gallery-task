<template>
  <div>
    <c-icon icon="base"/>
    <c-text-button unactive>
      Проданные на аукционе
    </c-text-button>
    <c-button active>
      Normal
    </c-button>
    <c-counter :amount="5"/>
    <c-search-input placeholder="Поиск по названию картины"/>
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
