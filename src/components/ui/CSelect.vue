<template>
  <div class="c-select">
    <component v-for="option in options"
               :key="option.value"
               :is="buttonOrTextButton(option.value)"
               @click="()=>select(option.value)">
      {{ option.name }}
    </component>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-select",
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: [String]
  },
  methods: {
    buttonOrTextButton(value: string): string {
      return this.modelValue == value ? "c-button" : "c-text-button"
    },
    select(newValue: string) {
      this.$emit("update:modelValue", newValue)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-select
  display grid
  grid-auto-flow row
  grid-gap 4px

  .c-text-button
    margin-left 32px
</style>