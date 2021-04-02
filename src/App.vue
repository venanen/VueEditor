<template>
    <v-app>

        <v-main>
            <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Button</v-list-item-title>
                        <v-btn color="primary" fab="fab">Add</v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
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
        addAvaible: [
            {
                'title': 'v-btn',
            },
            {
                'title': 'v-btn',
            },
            {
                'title': 'v-btn',
            },
            {
                'title': 'v-btn',
            },
        ],
        components: [{
            component: 'v-btn',
            bind: {
                is: 'v-btn',
                color: 'primary',
                content: 'test',
                fab: true
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
