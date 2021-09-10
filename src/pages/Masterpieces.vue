<template>
  <main class="p-masterpieces">
    <section class="p-masterpieces__toolbar">
      <c-select :options="filterOptions"
                :model-value="selectedFilter"
                @update:model-value="setSelectedFilter"/>

      <c-search-input placeholder="Поиск по названию картины"
                      :model-value="searchQuery"
                      @update:model-value="setSearchQuery"/>
    </section>

    <transition-group
        tag="section"
        name="p-masterpieces"
        class="p-masterpieces__store">
      <c-masterpiece v-for="masterpiece in filteredAndSearchedMasterpieces"
                     :key="masterpiece.id"
                     :masterpiece="masterpiece"/>
    </transition-group>

    <transition name="fade">
      <div v-if="filteredAndSearchedMasterpieces.length === 0"
           class="p-masterpieces__no-products">
        Товары не найдены
      </div>
    </transition>
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

.p-masterpieces
  margin-top: 132px
  container()

  &__toolbar
    display flex
    justify-content space-between

  &__store
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr
    grid-gap 32px
    margin-top 90px

  &__no-products
    display flex
    justify-content center
    width 100%
    color secondary-color
    margin-top 90px
    h2()

  .c-masterpiece
    transform-origin 10% 50%
    transition(all)

  &-enter-active {
    transition: all 300ms ease-out
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0
  }

  &-enter {
    transform: scale(0.9)
  }
</style>