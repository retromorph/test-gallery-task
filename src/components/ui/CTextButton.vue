<template>
  <button :class="{
    'c-text-button': true,
    'c-text-button--unactive': unactive,
    'c-text-button--capitalize': capitalize,
    'c-text-button--has-icon': hasIcon,
  }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-text-button",
  props: {
    unactive: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-text-button
  display inline-grid
  justify-content: center
  align-items: center
  background-color transparent
  border none
  color secondary-color
  padding 12px 32px
  cursor pointer
  h(14px, 21px, regular)
  transition(opacity)

  &:hover
    opacity 0.5

  &--unactive
    opacity 0.5

    &:hover
      opacity 1

  &--capitalize
    text-transform uppercase
    letter-spacing 1px

  &--has-icon
    grid-template-columns auto auto
    grid-gap: 12px
</style>