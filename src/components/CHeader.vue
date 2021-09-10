<template>
  <header class="c-header">
    <h1>
      <span class="c-header__styled-letter">К</span>артины эпо<span class="c-header__styled-letter">х</span>и
      В<span class="c-header__styled-letter">о</span>зр<span class="c-header__styled-letter">о</span>ждения
    </h1>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-header",
  computed: {}
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-header
  margin-top: 48px
  text-align center
  text-transform uppercase
  letter-spacing 1px
  color secondary-color
  container()

  &__styled-letter
    font-family font-family-styled
</style>