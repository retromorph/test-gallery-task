<template>
  <div class="c-masterpiece">
    <div class="c-masterpiece__inner">
      <h2>
        {{ masterpiece.title }}
      </h2>
      <h4>
        {{ masterpiece.author }}, {{ masterpiece.creationYear }}
      </h4>

      <div class="c-masterpiece__control">
        <div>

        </div>
        <c-button>
          Купить
        </c-button>
      </div>
    </div>

    <img class="c-masterpiece__image"
         :src="masterpiece.image"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "c-masterpiece",
  props: {
    masterpiece: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

//.c-masterpiece

</style>