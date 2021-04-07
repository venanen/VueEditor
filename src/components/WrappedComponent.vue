<template>
    <div class="wrapped" @click.stop="onClick">
        <component :is='components.bind.is' v-bind="{...components.bind}"
        >
            <div v-if="components.children.length > 0">
                <wrapped-component :components="item"  :patch="patch+i.toString()" v-for="(item, i) in components.children" :key="i"/>
            </div>

        </component>
        <slot></slot>
    </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import {VBtn, VCard, VContainer, VCol, VRow, VTextField} from 'vuetify/lib'
import {mapMutations, mapState} from "vuex";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VBtn, VCard, VContainer, VCol, VRow, VTextField
    },
    props: {
        components: Object,
        patch: String
    },
    methods: {
        onClick() {
            if(this.pointer === true && this.lC !== '' ){
                this.SET_POINTER(false)
                let componentsLocal = this.components;
                //console.log(componentsLocal)
                if('children' in componentsLocal){
                    //console.log( componentsLocal.children)
                    componentsLocal.children.push( {
                        bind: {
                            is: this.lC,
                        },
                        vOn: {
                        },
                        children: []
                    })
                }
                //this.components.bind.is = 'VCard'
                this.$emit('set', componentsLocal)
            }


        },

        ...mapMutations(['SET_POINTER'])
    },
    computed: {
        ...mapState({
            lC: state => state.serviceWorks.currentDraggingComponent,
            pointer: state => state.serviceWorks.pointer
        })
    },
    name: "WrappedComponent"
}
</script>

<style scoped>
.wrapped:hover {
    box-shadow: 0 0 2px 3px #82b1ff;

}

.wrapped {
    height: 100%;
    width: 100%;
    display: inline-block;
    transition: 0.2s;

}
</style>