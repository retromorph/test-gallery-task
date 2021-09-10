<template>
  <footer class="c-footer">
    <div class="c-footer__inner">
      <div>
        <h2>
          {{ companyPhone }}
        </h2>

        <h2>
          {{ companyAddress }}
        </h2>
      </div>

      <div>
        <h2 class="c-footer__copyright">
          {{ companyCopyright }}
        </h2>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapState} from "vuex"
import {State} from "@/store"

export default defineComponent({
  name: 'c-footer',
  computed: {
    ...mapState({
      companyPhone: (state: State) => state.companyPhone,
      companyAddress: (state: State) => state.companyAddress,
      companyName: (state: State) => state.companyName
    }),
    companyCopyright(): string {
      return `© ${this.companyName}, ${new Date().getFullYear()}`
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-footer
  position relative
  height: 218px
  background: url("~@/assets/images/footer-image.png")
  color: secondary-color
  z-index -1

  &::after
    content ''
    display block
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background rgba(primary-color, 0.5)
    z-index -1

  &__inner
    height: 100%
    display flex
    justify-content space-between
    align-items center
    z-index 10
    container()

  &__copyright
    color: rgba(secondary-color, 0.5)


</style>