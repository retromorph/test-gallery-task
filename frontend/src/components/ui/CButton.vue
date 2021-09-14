<template>
  <button
    :class="{
      'c-button': true,
      [`c-button--${size}`]: true,
      'c-button--active': active,
      'c-button--capitalize': capitalize,
      'c-button--doublet': doublet,
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "c-button",
  props: {
    size: {
      type: String,
      default: "common",
      validator(value: string) {
        return ["small", "common"].includes(value)
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
    doublet: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-button
  display grid
  justify-content center
  align-items center
  background-color transparent
  border 1px solid secondary-color
  color secondary-color
  cursor pointer
  transition(all)

  &:hover
    background-color secondary-hover-color
    border-color secondary-hover-color

  &--common
    padding 0 32px
    height 44px
    h(14px, 21px, bold)

  &--small
    padding 0 17px
    height 34px
    h(16px, 24px, normal)

  &--active
    border none
    background-color secondary-color
    color primary-color

    &:hover
      background-color secondary-color

  &--capitalize
    text-transform capitalize

  &--doublet
    grid-template-columns auto auto
    grid-gap: 10px

@media (max-width: 1440px)
  .c-button--active
    padding 0 16px
</style>
