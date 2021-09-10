<template>
  <main class="p-masterpiece">
    <section class="p-masterpiece__toolbar">
      <c-select :options="filterOptions"/>

      <c-search-input/>
    </section>

    <section class="p-masterpiece__store">

    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapState} from "vuex"
import {State} from "@/store"
import CSearchInput from "@/components/ui/CSearchInput.vue";

export default defineComponent({
  name: 'Masterpieces',
  components: {CSearchInput},
  computed: {
    ...mapState({
      filterOptions: (state: State) => state.filterOptions
    })
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.p-masterpiece
  margin-top: 132px
  container()

  &__toolbar
    height: 15vh
    display flex
    justify-content space-between

  &__store
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr
</style>