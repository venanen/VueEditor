<template>
    <div class="tabs">


        <v-tabs
                color="deep-purple accent-4"
                centered
        >
            <v-tab>List</v-tab>
            <v-tab>Property</v-tab>


            <v-tab-item>
                <v-container fluid><v-list flat>
                    <v-subheader>REPORTS</v-subheader>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="text in listComponents" :key="text" @mousedown="onDown(text)" @mouseup="onUp" @click="onClick(text)">
                            <v-list-item-content>
                                <v-list-item-title v-text="text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list></v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>2</v-container>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    data: () => ({
        tab: 0,
        listComponents: ['VBtn', 'VRow', 'VCol', 'VTextField']
    }),
    methods: {
        onDown(e){
            this.$emit('down', e)
        },
        onUp(e){
            console.log(e)
        },
        onClick(e){
            this.SET_POINTER(true)
            this.SET_DRAGGABLE_COMPONENT(e)
        },
        ...mapMutations(['SET_POINTER', 'SET_DRAGGABLE_COMPONENT'])
    },
    name: "RightMenu"
}
</script>

<style scoped>
div.tabs{
    border-left: solid #80808029 1px;
    height: 97vh;
}
</style>