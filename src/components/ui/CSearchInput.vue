<template>
  <fieldset class="c-search-input">
    <input :id="id"
           :value="modelValue"
           required
           @change="updateValue">
    <hr>

    <label :for="id">{{ placeholder }}</label>

    <c-text-button capitalize doublet>
      Найти
      <c-icon icon="search"/>
    </c-text-button>
  </fieldset>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Helpers from "@/entities/Helpers"

export default defineComponent({
  name: "c-search-input",
  data() {
    return {
      id: Helpers.getInstance().uuidv4()
    }
  },
  props: {
    modelValue: [String, Number],
    placeholder: String
  },
  methods: {
    updateValue(event: Event) {
      this.$emit("update:modelValue", (<HTMLInputElement>event.target).value)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-search-input
  position relative
  padding 0
  margin 5px
  border none
  overflow visible
  width 488px

  input
    box-sizing border-box
    width 100%
    padding 12px 0
    border none
    border-radius 0
    box-shadow none
    border-bottom 1px solid rgba(secondary-color, 0.5)
    background transparent
    color: secondary-color
    outline none
    cursor text
    h(16px, 24px, normal)

    &::-webkit-input-placeholder
      transition(color)

    &:not(:focus)::-webkit-input-placeholder
      color transparent

  hr
    content ""
    display block
    position absolute
    bottom 0
    left 0
    margin 0
    padding 0
    width 100%
    height 1px
    border none
    will-change transform, visibility
    transition all 200ms ease-out
    transform scaleX(0)
    visibility hidden
    z-index 10

  input:focus ~ hr
    transform scaleX(1)
    visibility visible

  label
    position absolute
    top 10px
    left 0
    color rgba(secondary-color, 0.5)
    transform-origin 0 -150%
    transition transform 300ms ease
    pointer-events none
    h(16px, 24px, normal)

  input:focus ~ label,
  input:valid ~ label
    transform scale(0.6)

  .c-text-button
    position absolute
    right: 0
</style>