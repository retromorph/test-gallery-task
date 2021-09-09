import {createStore, Commit} from "vuex"
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
    ],
    isMasterpiecesLoading: false
})

const getter = {
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
    filteredAndSearchedMasterpieces(state: ReturnType<typeof stateWrapper>, getters: any) {
        return getters.filteredPosts.filter(
            (masterpiece: Masterpiece) => masterpiece.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    }
}

const mutations = {
    setMasterpieces(state: ReturnType<typeof stateWrapper>, masterpieces: Masterpiece[]) {
        state.masterpieces = masterpieces
    },
    addProduct(state: ReturnType<typeof stateWrapper>, product: Masterpiece) {
        state.cart.addProduct(product.id)
    },
    removeProduct(state: ReturnType<typeof stateWrapper>, product: Masterpiece) {
        state.cart.removeProduct(product.id)
    },
    setLoading(state: ReturnType<typeof stateWrapper>, isMasterpiecesLoading: boolean) {
        state.isMasterpiecesLoading = isMasterpiecesLoading
    }
}

const actions = {
    async fetchMasterpieces(state: ReturnType<typeof stateWrapper>, commit: Commit) {
        try {
            commit('setLoading', true);
            const response = await fetch("https://my-json-server.typicode.com/retromorph/test-gallery-task-db/masterpieces")
            commit('setMasterpieces', response.body)
        } catch (e) {
            console.log(e)
        } finally {
            commit('setLoading', false);
        }
    }
}

export default createStore({
    state: stateWrapper,
    getters: getter,
    mutations: mutations,
    actions: actions
})
