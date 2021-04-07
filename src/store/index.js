import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        serviceWorks: {
            tab: 0,
            currentDraggingComponent: {

            },
            pointer: false
        },
        componentTree: [{
                bind: {
                    is: 'VCard',
                },
                vOn: {
                    click: () => alert('One')
                },
                children: [
                    {
                        bind: {
                            is: 'VBtn',
                            color: 'purple',
                            fluid: true
                        },
                        vOn: {
                            click: () => alert('One')
                        },
                        children: []
                    }
                ]
            }]

    },
    mutations: {
        CHANGE_TAB(state, tab) {
            state.serviceWorks.tab = tab

        },
        SET_POINTER(state, pointer){
            state.serviceWorks.pointer  = pointer
        },
        SET_COMPONENT_TREE(state, tree){
            state.componentTree = {...tree}
        },
        SET_DRAGGABLE_COMPONENT(state, component){
            state.serviceWorks.currentDraggingComponent = component
        }
    },
    actions: {},
    modules: {}
})
