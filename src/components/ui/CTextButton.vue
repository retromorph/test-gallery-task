<template>
  <button :class="{
    'c-text-button': true,
    [`c-text-button--${size}`]: true,
    'c-text-button--unactive': unactive,
    'c-text-button--capitalize': capitalize,
    'c-text-button--doublet': doublet
  }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-text-button",
  props: {
    size: {
      type: String,
      default: "common",
      validator(value: string) {
        return ["small", "common"].includes(value)
      }
    },
    unactive: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    },
    doublet: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-text-button
  display inline-grid
  justify-content: center
  align-items: center
  background-color transparent
  border none
  color secondary-color
  cursor pointer
  transition(opacity)

  &:hover
    opacity 0.5

  &--common
    height 44px
    h4()

  &--small
    height 34px
    h(16px, 24px, normal)

  &--unactive
    opacity 0.5

    &:hover
      opacity 1

  &--capitalize
    text-transform uppercase
    letter-spacing 1px

  &--doublet
    grid-template-columns auto auto
    grid-gap: 12px
</style>