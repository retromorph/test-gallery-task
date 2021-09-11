<template>
  <footer class="c-footer">
    <div class="c-footer__inner">
      <div>
        <h2>
          {{ company.companyPhone }}
        </h2>

        <h2>
          {{ company.companyAddress }}
        </h2>
      </div>

      <div>
        <h2 class="c-footer__copyright">
          {{ company.copyright }}
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
    ...mapState(["company"])
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-footer
  position relative
  height: 218px
  background: url("~@/assets/images/footer-image.webp") center center
  color: secondary-color
  margin-top 150px
  z-index -1

  &::after
    content ''
    display block
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background rgba(primary-color, 0.2)
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

@media (max-width: 780px)
  .c-footer__inner
    justify-content center
    flex-direction column

    & > div
      display flex
      flex-direction column
      text-align center

  .c-footer__copyright
    margin-top 48px
</style>