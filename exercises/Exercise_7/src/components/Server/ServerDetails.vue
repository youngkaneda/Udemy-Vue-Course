<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <p >Server {{server.id}} are currently selected, Status: {{server.status}}</p>
            <br>
            <button @click="repairStatus">Repair status</button>
        </div>
        <p v-else>Select a server</p>
    </div>
</template>

<script>
    import {bus} from '../../main'
    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            repairStatus: function() {
                bus.$emit("repair", "Normal");
            }
        },
        created: function() {
            bus.$on("serverSelected", server => {
                this.server = server;
            })
        }
    }
</script>

<style>

</style>
