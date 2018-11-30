<template>
    <div>
        <!-- its ok use this way because is an object that count as one arg, so we can only call mapActions -->
        <button class="btn btn-primary" @click="increment({by: 10, time: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 10, time: 1000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        // methods: {
        //     increment() {
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         this.$store.commit('decrement');
        //     }
        // }
        methods: {
            ...mapActions({
                increment: 'increment',
                decrement: 'decrement',    
            }),
        }
    }
</script>