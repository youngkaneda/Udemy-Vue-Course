<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{this.userAge}}</p>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: ['userAge'],
        methods: {
            changeAge: function() {
                this.userAge = 23;
                eventBus.$emit('ageChanged', this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
