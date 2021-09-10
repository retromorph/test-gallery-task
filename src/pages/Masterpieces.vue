<template>
  <main class="p-masterpiece">
    <section class="p-masterpiece__toolbar">
      <c-select :options="filterOptions"
                :model-value="selectedFilter"
                @update:model-value="setSelectedFilter"/>

      <c-search-input placeholder="Поиск по названию картины"
                      :model-value="searchQuery"
                      @update:model-value="setSearchQuery"/>
    </section>

    <section class="p-masterpiece__store">
      <c-masterpiece v-for="masterpiece in filteredAndSearchedMasterpieces"
                     :key="masterpiece.id"
                     :masterpiece="masterpiece"/>
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"
import {State} from "@/store"
import CSearchInput from "@/components/ui/CSearchInput.vue";
import CMasterpiece from "@/components/CMasterpiece.vue";

export default defineComponent({
  name: 'Masterpieces',
  components: {CMasterpiece},
  mounted() {
    this.fetchMasterpieces()
  },
  computed: {
    ...mapState({
      filterOptions: (state: State) => state.filterOptions,
      selectedFilter: (state: State) => state.selectedFilter,
      searchQuery: (state: State) => state.searchQuery,
      masterpieces: (state: State) => state.masterpieces
    }),
    ...mapGetters({filteredAndSearchedMasterpieces: "filteredAndSearchedMasterpieces"}),
  },
  methods: {
    ...mapMutations({
      setSelectedFilter: "setSelectedFilter",
      setSearchQuery: "setSearchQuery",
    }),

    ...mapActions({
      fetchMasterpieces: "fetchMasterpieces"
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
    margin-top 90px
</style>