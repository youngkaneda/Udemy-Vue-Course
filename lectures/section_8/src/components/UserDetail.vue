<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{myName}}</p>
        <p>User age: {{userAge}}</p>
        <button @click="resetName">reset name</button>
        <button @click="resetFn()">reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            myName: {
                //if object or array
                type: String,
                default: 'Juan'
                // default: function() {
                //     return {}
                // }
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            resetName: function () {
                this.myName = "Juan"
                this.$emit("nameReseted", this.myName);
            }
        },
        created: function () {
            console.log("created lifecycle hook");
            eventBus.$on('ageChanged', age => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>