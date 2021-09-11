<template>
  <nav class="c-navbar">
    <div class="c-navbar__inner">
      <c-icon :icon="baseIcon"/>

      <c-text-button capitalize doublet>
        <c-icon icon="cart"/>
        <div class="c-navbar__cart-button-inner">
          Корзина
          <c-counter :amount="productsAmount"/>
        </div>
      </c-text-button>
    </div>
  </nav>
  <transition name="fade">
    <div v-show="showBigCounter"
         class="c-big-counter-container">
      <c-counter :amount="productsAmount"/>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {mapGetters} from "vuex"

export default defineComponent({
  name: "c-navbar",
  data() {
    return {
      showBigCounter: false,
      baseIcon: "base"
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)

    this.handleScroll()
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      if (pageYOffset > 200) {
        this.showBigCounter = true
      } else {
        this.showBigCounter = false
      }
    },
    handleResize() {
      if (window.innerWidth <= 523) {
        this.baseIcon = "base-small"
      } else {
        this.baseIcon = "base"
      }
    }
  },
  computed: {
    ...mapGetters({productsAmount: "productsAmount"})
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"
@import "~@/assets/styles/animations.styl"

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

    .c-counter
      padding-left 2px

.c-big-counter-container
  position sticky
  display flex
  justify-content flex-end
  top: 0
  width 100%

  .c-counter
    position absolute
    margin-top 20px
    margin-right 20px
    transform scale(2)
</style>