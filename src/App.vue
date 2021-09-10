<template>
  <Masterpieces/>
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Footer from "@/components/CFooter.vue"
import Masterpieces from "@/pages/Masterpieces.vue"

export default defineComponent({
  name: 'App',
  components: {Masterpieces, Footer},
})
</script>

<style lang="stylus">
@import '~normalize.css'
@import "~@/assets/styles/global.styl"

body
  background-color primary-color
</style>
