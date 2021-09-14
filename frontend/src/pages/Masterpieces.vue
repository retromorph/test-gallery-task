<template>
  <main class="p-masterpieces">
    <section class="p-masterpieces__toolbar">
      <c-select
        :options="filterOptions"
        :model-value="selectedFilter"
        @update:model-value="setSelectedFilter"
      />

      <c-search-input
        placeholder="Поиск по названию картины"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
      />
    </section>

    <transition-group
      tag="section"
      name="p-masterpieces"
      class="p-masterpieces__store"
    >
      <c-masterpiece
        v-for="masterpiece in filteredAndSearchedMasterpieces"
        :key="masterpiece.id"
        :masterpiece="masterpiece"
      />
    </transition-group>

    <transition name="fade">
      <div
        v-if="filteredAndSearchedMasterpieces.length === 0"
        class="p-masterpieces__no-products"
      >
        Товары не найдены
      </div>
    </transition>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapActions, mapGetters, mapMutations, mapState } from "vuex"
import CMasterpiece from "@/components/CMasterpiece.vue"

export default defineComponent({
  name: "Masterpieces",
  components: { CMasterpiece },
  mounted() {
    this.fetchMasterpieces()
  },
  computed: {
    ...mapState([
      "filterOptions",
      "selectedFilter",
      "searchQuery",
      "masterpieces",
    ]),
    ...mapGetters({
      filteredAndSearchedMasterpieces: "filteredAndSearchedMasterpieces",
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedFilter: "setSelectedFilter",
      setSearchQuery: "setSearchQuery",
    }),

    ...mapActions({
      fetchMasterpieces: "fetchMasterpieces",
    }),
  },
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"
@import "~@/assets/styles/animations.styl"

.p-masterpieces
  margin-top: 132px
  container()

  &__toolbar
    display flex
    justify-content space-between
    align-items center

  &__store
    display grid
    grid-template-columns repeat(4, 1fr)
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

@media (max-width: 1920px)
  .p-masterpieces__store
    .c-masterpiece:nth-child(13n+3)
      height 452px
      width 592px
      grid-area 1 / 3 / 3 / 5

@media (max-width: 1440px)
  .p-masterpieces__store
    grid-gap: 27px

    .c-masterpiece:nth-child(13n+3)
      height 387px
      width 507px
      grid-area 1 / 3 / 3 / 5

@media (max-width: 1070px)
  .p-masterpieces__store
    grid-template-columns repeat(3, 1fr)

    .c-masterpiece:nth-child(13n+3)
      height 180px
      width 240px
      grid-area auto

@media (max-width: 780px)
  .p-masterpieces__store
    grid-template-columns repeat(2, 1fr)

    .c-masterpiece:nth-child(13n+3)
      height 180px
      width 240px
      grid-area auto

  .p-masterpieces__toolbar
    flex-direction column
    align-items stretch

    .c-search-input
      margin-top 48px

@media (max-width: 523px)
  .p-masterpieces__store
    grid-template-columns auto
    justify-content center
</style>
