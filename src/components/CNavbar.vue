<template>
  <nav class="c-navbar">
    <div class="c-navbar__inner">
      <c-icon icon="base"/>

      <c-text-button capitalize doublet>
        <c-icon icon="cart"/>
        <div class="c-navbar__cart-button-inner">
          Корзина
          <c-counter :amount="productsAmount"/>
        </div>
      </c-text-button>
    </div>
  </nav>
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
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

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
    h4()

  &__cart-button-inner
    display: grid
    align-items: center
    grid-gap: 4px
    grid-auto-flow: column
    margin-top: 4px
</style>