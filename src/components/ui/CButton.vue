<template>
  <button :class="{
    'c-button': true,
    'c-button--active': active,
    'c-button--capitalize': capitalize
  }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-button",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-button
  background-color transparent
  border 1px solid secondary-color
  color secondary-color
  padding 12px 32px
  cursor pointer
  h(14px, 21px, bold)
  transition(all)

  &:hover
    background-color secondary-hover-color
    border-color secondary-hover-color

  &--active
    border none
    background-color secondary-color
    color primary-color

    &:hover
      background-color secondary-color

  &--capitalize
    text-transform capitalize
</style>