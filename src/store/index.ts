import {ActionContext, createStore, GetterTree, MutationTree} from "vuex"
import Masterpiece from "@/entities/Masterpiece"
import Cart from "@/entities/Cart"
import Company from "@/entities/Company"
import Helpers from "@/entities/Helpers";

export type State = typeof state
const state = {
    masterpieces: new Array<Masterpiece>(),
    company: new Company(
        "+7 (495) 555-55-55",
        "Москва, Красная площадь, 52",
        "Эпоха возрождения"
    ),
    cart: new Cart(),
    searchQuery: "",
    filterOptions: [
        {value: "all", name: "Все"},
        {value: "sold", name: "Проданные на аукционе"},
    ],
    selectedFilter: "all",
    isMasterpiecesLoading: false,
}

const getters = {
    productsAmount(state: State): number {
        return state.cart.productsAmount()
    },
    filteredMasterpieces(state: State): Masterpiece[] {
        return [...state.masterpieces].filter((masterpiece: Masterpiece) => {
            if (state.selectedFilter == "sold") {
                return masterpiece.isSold
            } else {
                return true
            }
        })
    },
    filteredAndSearchedMasterpieces(state: State, getters: any): Masterpiece[] {
        return getters.filteredMasterpieces.filter(
            (masterpiece: Masterpiece) =>
                masterpiece.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                Helpers.getInstance().levenshtein(
                    masterpiece.name.toLowerCase(),
                    state.searchQuery.toLowerCase()
                ) < Math.ceil(state.searchQuery.length / 5)
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
    async fetchMasterpieces(context: ActionContext<State, State>) {
        try {
            context.commit('setLoading', true);
            const response = await fetch(
                "https://my-json-server.typicode.com/retromorph/test-gallery-task-db/masterpieces"
            )
            context.commit(
                'setMasterpieces',
                (await response.json()).map((masterpiece: any) => Masterpiece.fromData(masterpiece))
            )
        } catch (e) {
            console.log(e)
        } finally {
            context.commit('setLoading', false);
        }
    }
}

export default createStore({
    state,
    getters,
    mutations,
    actions
})
