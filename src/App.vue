<template>
  <c-navbar/>
  <masterpieces/>
  <c-footer/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CFooter from "@/components/CFooter.vue"
import Masterpieces from "@/pages/Masterpieces.vue"
import CNavbar from "@/components/CNavbar.vue"

export default defineComponent({
  name: 'App',
  components: {CNavbar, Masterpieces, CFooter},
})
</script>

<style lang="stylus">
@import '~normalize.css'
@import "~@/assets/styles/global.styl"

body
  background-color primary-color
  background-image url("~@/assets/icons/logo-icon.svg")
  background-repeat no-repeat
  background-position center 180px
</style>
