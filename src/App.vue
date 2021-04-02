<template>
    <v-app>

        <v-main>
            <component v-for="(item, i) in components" v-on="item.vOn" :is='item.components' v-bind="{...item.bind}"
                       :key="i" v-html="item.bind.content"
            ></component>

        </v-main>
    </v-app>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {VBtn} from 'vuetify/lib'

export default {
    name: 'App',

    components: {
        VBtn
    },

    data: () => ({
        components: [{
            component: 'v-btn',
            bind: {
                is: 'v-btn',
                color: 'primary',
                content: 'test',
                fab: 'true'
            },
            vOn: {
                click: () => alert('One')
            }
        },
            {
            component: 'v-btn',
            bind: {
                is: 'v-btn',
                color: 'dark',
                content: 'test2',
                fab: false
            },
            vOn: {
                click: () => alert('Two')
            }
        },
        ]
    }),
    mounted() {

    }
};
</script>
