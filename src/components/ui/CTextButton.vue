<template>
  <button :class="{
    'c-text-button': true,
    'c-text-button--unactive': unactive,
    'c-text-button--capitalize': capitalize,
    'c-text-button--doublet': doublet,
    'c-text-button--triplet': triplet,
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
    doublet: {
      type: Boolean,
      default: false
    },
    triplet: {
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
  padding 12px 0
  cursor pointer
  h(14px, 21px, normal)
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

  &--doublet
    grid-template-columns auto auto
    grid-gap: 12px

  &--triplet
    grid-template-columns auto auto auto
    grid-gap: 12px
</style>