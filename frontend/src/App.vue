<template>
  <c-navbar />
  <c-header />
  <masterpieces />
  <c-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CFooter from "@/components/CFooter.vue"
import Masterpieces from "@/pages/Masterpieces.vue"
import CNavbar from "@/components/CNavbar.vue"
import CHeader from "@/components/CHeader.vue"

export default defineComponent({
  name: "App",
  components: { CHeader, CNavbar, CFooter, Masterpieces },
})
</script>

<style lang="stylus">
@import '~normalize.css'
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

body
  background-color primary-color
  background-image url("~@/assets/icons/logo-icon.svg")
  background-repeat no-repeat
  background-position center 180px

h1
  margin: 2px 0
  h1()

h2
  margin: 2px 0
  h2()

h4
  margin: 2px 0
  h4()
</style>
