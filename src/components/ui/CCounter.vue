<template>
  <div :class="{'c-counter': true, 'c-counter--more-than-99': amount > 99}">
    {{ amount < 100 ? amount : "99+" }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: 'c-counter',
  props: {
    amount: {
      type: Number,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-counter
  display flex
  justify-content center
  align-items: center
  width 20px
  height 20px
  border-radius 100%
  background-color secondary-color
  color primary-color
  h(12px, 0, regular)

  &--more-than-99
    h(10px, 0, regular)
</style>