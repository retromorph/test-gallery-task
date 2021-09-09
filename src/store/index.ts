import {createStore} from "vuex"
import Masterpiece from "@/entities/Masterpiece"
import Cart from "@/entities/Cart"

const stateWrapper = () => Object.create({
    masterpieces: new Array<Masterpiece>(),
    cart: new Cart(),
    selectedFilter: "",
    searchQuery: "",
    filterOptions: [
        {value: "all", name: "Все"},
        {value: "sold", name: "Проданные на аукционе"},
    ]
})

export default createStore({
    state: stateWrapper,
    getters: {
        productsAmount(state: ReturnType<typeof stateWrapper>): number {
            return state.cart.productsAmount()
        },
        filteredMasterpieces(state: ReturnType<typeof stateWrapper>) {
            return [...state.posts].filter((masterpiece: Masterpiece) => {
                if (state.selectedFilter == "sold") {
                    return masterpiece.isSold
                } else {
                    return true
                }
            })
        },
        filteredAndSearchedMasterpieces(state: ReturnType<typeof stateWrapper>, getters) {
            return getters.filteredPosts.filter(
                (masterpiece: Masterpiece) => masterpiece.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            )
        }
    },
    mutations: {
        setMasterpieces(state: ReturnType<typeof stateWrapper>, masterpieces: Masterpiece[]) {
            state.masterpieces = masterpieces
        },
        addProduct(state: ReturnType<typeof stateWrapper>, product: Masterpiece) {
            state.cart.addProduct(product.id)
        },
        removeProduct(state: ReturnType<typeof stateWrapper>, product: Masterpiece) {
            state.cart.removeProduct(product.id)
        }
    },
    actions: {},
    modules: {}
})
