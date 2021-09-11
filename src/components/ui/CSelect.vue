<template>
  <div class="c-select">
    <component v-for="option in options"
               :key="option.value"
               :is="buttonOrTextButton(option.value)"
               unactive
               size="small"
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
.c-select
  display grid
  grid-auto-flow column
  grid-gap 4px

  .c-text-button
    padding-left 18px
    padding-right 18px
</style>