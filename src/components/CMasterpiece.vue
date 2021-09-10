<template>
  <div :class="{'c-masterpiece': true, 'c-masterpiece--sold': masterpiece.isSold}">
    <div class="c-masterpiece__inner">
      <h2>
        {{ masterpiece.name }}
      </h2>
      <h4>
        {{ masterpiece.author }}, {{ masterpiece.creationYear }}
      </h4>

      <div v-if="masterpiece.isSold"
           class="c-masterpiece__control">
        <c-text-button doublet>
          <c-icon icon="sold"/>
          Продана на аукционе
        </c-text-button>
      </div>
      <div v-else
           class="c-masterpiece__control">
        <div>

        </div>

        <c-button v-if="isInCart"
                  :active="true"
                  @click="() => removeProduct(masterpiece)"
                  doublet>
          В корзине
          <c-icon icon="ok"/>
        </c-button>
        <c-button v-else
                  @click="() => addProduct(masterpiece)">
          Купить
        </c-button>
      </div>
    </div>

    <img class="c-masterpiece__image"
         src="@/assets/images/test-image.png"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {mapMutations, mapState} from "vuex"
import {State} from "@/store";
import CTextButton from "@/components/ui/CTextButton.vue";
import CIcon from "@/components/ui/CIcon.vue";

export default defineComponent({
  name: "c-masterpiece",
  components: {CIcon, CTextButton},
  props: {
    masterpiece: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      cart: (state: State) => state.cart
    }),
    isInCart(): boolean {
      return this.cart.isProductInCart(this.masterpiece.id)
    }
  },
  methods: {
    ...mapMutations({
      addProduct: "addProduct",
      removeProduct: "removeProduct"
    }),
  }
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/global.styl"

.c-masterpiece
  position relative
  width 14.6vw
  height 11vw
  color secondary-color
  box-sizing border-box
  padding 24px
  cursor pointer

  &:hover
    .c-masterpiece__image
      filter brightness(20%)

  &__inner
    display flex
    height 100%
    flex-direction column
    justify-content space-between
    align-items baseline
    opacity 0
    transition(opacity)

    &:hover
      opacity 1

  .c-masterpiece__image
    position: absolute
    left 0
    top 0
    right 0
    bottom 0
    width 100%
    height 100%
    z-index -1
    transition(filter)

  &--sold
    .c-masterpiece__image
      filter brightness(20%)
</style>