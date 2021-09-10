<template>
  <div :class="{
    'c-masterpiece': true,
    'c-masterpiece--sold': masterpiece.isSold
  }">
    <div class="c-masterpiece__inner">
      <div>
        <h2>
          {{ masterpiece.name }}
        </h2>
        <h4>
          {{ masterpiece.author }}, {{ masterpiece.creationYear }}
        </h4>
      </div>

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
          <div v-if="masterpiece.discountedPrice"
               class="c-masterpiece__old-price">
            {{ masterpiece.price }}
          </div>
          <div class="c-masterpiece__price">
            {{ masterpiece.discountedPrice }}
          </div>
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
         :src="imageUrl"
         :alt="`Картинка к ${masterpiece.name}`"/>
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
    },
    imageUrl(): string {
      return require(`@/assets/images/image-${this.masterpiece.id}.webp`)
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
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-masterpiece
  position relative
  width 280px
  height 210px
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

  &__image
    position: absolute
    left 0
    top 0
    right 0
    bottom 0
    width 100%
    height 100%
    z-index -1
    transition(filter)

  &__control
    width 100%
    display flex
    justify-content space-between

  &__old-price
    h4()

  &__price
    h(18px, 27px, bold)

  &--sold
    .c-masterpiece__image
      filter brightness(20%)

@media (max-width: 1440px)
  .c-masterpiece
    width 240px
    height 180px
    padding 12px
</style>