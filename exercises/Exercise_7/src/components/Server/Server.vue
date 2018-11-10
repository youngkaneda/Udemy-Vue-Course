<template>
    <li class="list-group-item"
        @click="serverSelected">
        Server {{appServer.id}}
    </li>
</template>

<script>
    import {bus} from '../../main'
    export default {
        props: ['appServer'],
        methods: {
            serverSelected: function() {
                bus.$emit("serverSelected", this.appServer);
            }
        },
        created: function() {
            bus.$on("repair", data => {
                this.appServer.status = data;
            });
        }
    }
</script>

<style>
</style>