<template>
  <navbar class="c-navbar">
    <div class="c-navbar__inner">
      <c-icon icon="base"/>

      <c-text-button capitalize triplet>
        <c-icon icon="cart"/>
        Корзина
        <c-counter :amount="productsAmount"/>
      </c-text-button>
    </div>
  </navbar>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {mapGetters} from "vuex"

export default defineComponent({
  name: "c-navbar",
  computed: {
    ...mapGetters({productsAmount: "productsAmount"})
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-navbar
  color: secondary-color

  &__inner
    display grid
    justify-content space-between
    align-items center
    grid-template-columns auto auto
    grid-gap 24px
    padding 52px 0
    container-fluid()

  &__tagline
    text-transform uppercase
    letter-spacing 1px
    h(14px, 20px, normal)
</style>