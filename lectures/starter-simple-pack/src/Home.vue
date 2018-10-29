<template>
    <div>
        <p>server conditions: {{ status }}</p>
        <hr>
        <button @click="changeStatus()">change status</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus: function () {
                this.status = 'Normal';
            }
        }
    }
</script>