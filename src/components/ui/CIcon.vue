<template>
  <img class="c-icon" 
       :src="iconUrl" 
       :alt="icon"/>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-icon",
  props: {
    icon: {
      type: String,
      required: true,
      validator(value: string): boolean {
        return ["base", "base-small", "cart", "logo", "sold", "search", "ok"].includes(value)
      }
    }
  },
  computed: {
    iconUrl(): string {
      return require(`@/assets/icons/${this.icon}-icon.svg`)
    }
  }
})
</script>

<style lang="stylus" scoped>
.c-icon
  cursor pointer
</style>