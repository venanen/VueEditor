<template>
    <v-app>

        <v-main @contextmenu.prevent="onRight" :class="{pointer: $store.state.serviceWorks.pointer}">
            <v-container fluid @mouseup="pointer = false">
                <v-row>
                    <v-col cols="9">

                        <wrapped-component :components="item" @set="onSet" patch="0" v-for="(item, i) in components" :key="i">

                        </wrapped-component>
                    </v-col>
                    <v-col cols="3">
                        <right-menu @down="pointer = true"></right-menu>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

    </v-app>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {VBtn, VCard} from 'vuetify/lib'
import RightMenu from "@/components/RightMenu";
import WrappedComponent from "@/components/WrappedComponent";
import {mapMutations, mapState} from "vuex";

export default {
    name: 'App',

    components: {
        WrappedComponent,
        RightMenu,
        // eslint-disable-next-line vue/no-unused-components
        VBtn, VCard
    },

    data: () => ({
        /*componentBuffer: {
            component:
        },*/
        pointer: false,


    }),
    methods: {
        onRight(e) {
            console.log(e)
        },
        onSet(e){
            console.log(e)
            //this.SET_COMPONENT_TREE(e)

        },
        ...mapMutations(['SET_COMPONENT_TREE'])


    },
    computed:{
        ...mapState({
            components: state => state.componentTree
        })
    },
    mounted() {

    }
}
;
</script>
<style>
    .pointer{
        cursor: crosshair;
    }
</style>
