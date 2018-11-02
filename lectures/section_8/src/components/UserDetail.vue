<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{myName}}</p>
        <button @click="resetName">reset name</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                //if object or array
                type: String, 
                default: 'Juan'
                // default: function() {
                //     return {}
                // }
            }
        },
        methods: {
            resetName: function() {
                this.myName = "Juan"
                this.$emit("nameReseted", this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
