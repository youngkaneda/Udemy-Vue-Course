<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server class="list-group-item"
                v-for="server in servers"
                :app-server="server">
            </server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: "Normal"},
                    {id: 2, status: "Critical"},
                    {id: 3, status: "Unknow"},
                ]
            }
        },
        components: {
            server: Server
        }
    }
</script>

<style>

</style>
