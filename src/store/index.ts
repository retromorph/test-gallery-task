import {createStore} from "vuex"
import Masterpiece from "@/entities/Masterpiece"
import Cart from "@/entities/Cart"

const stateWrapper = () => Object.create({
    masterpieces: new Array<Masterpiece>(),
    cart: new Cart(),
    searchQuery: "",
    filterOptions: [
        {value: "all", name: "Все"},
        {value: "sold", name: "Проданные на аукционе"},
    ],
    selectedFilter: "all",
    isMasterpiecesLoading: false,
    companyPhone: "+7 (495) 555-55-55",
    companyAddress: "Москва, Красная площадь, 52",
    companyName: "Эпоха возрождения"
})

export type State = ReturnType<typeof stateWrapper>

const getter = {
    productsAmount(state: State): number {
        return state.cart.productsAmount()
    },
    filteredMasterpieces(state: State) {
        return [...state.masterpieces].filter((masterpiece: Masterpiece) => {
            if (state.selectedFilter == "sold") {
                return masterpiece.isSold
            } else {
                return true
            }
        })
    },
    filteredAndSearchedMasterpieces(state: State, getters: any) {
        return getters.filteredMasterpieces.filter(
            (masterpiece: Masterpiece) => masterpiece.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    }
}

const mutations = {
    setMasterpieces(state: State, masterpieces: Masterpiece[]) {
        state.masterpieces = masterpieces
    },
    addProduct(state: State, product: Masterpiece) {
        state.cart.addProduct(product.id)
    },
    removeProduct(state: State, product: Masterpiece) {
        state.cart.removeProduct(product.id)
    },
    setSelectedFilter(state: State, selectedFilter: string) {
        state.selectedFilter = selectedFilter
    },
    setSearchQuery(state: State, searchQuery: string) {
        state.searchQuery = searchQuery
    },
    setLoading(state: State, isMasterpiecesLoading: boolean) {
        state.isMasterpiecesLoading = isMasterpiecesLoading
    }
}

const actions = {
    async fetchMasterpieces({state, commit}: {state: any, commit: any}) {
        try {
            commit('setLoading', true);
            const response = await fetch("https://my-json-server.typicode.com/retromorph/test-gallery-task-db/masterpieces")
            commit('setMasterpieces', await response.json())
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
