<template>
  <img class="c-icon" :src="iconUrl"/>
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
        return ['base', 'cart', 'logo', 'sailed', 'search'].includes(value)
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