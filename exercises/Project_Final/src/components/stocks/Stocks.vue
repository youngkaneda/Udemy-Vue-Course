<template>
    <div>
        <app-stock :v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data() {
            return {
                stocks: [
                    {id: 1, name: 'BMW', price: '100'},
                ],
            };
        },
        components: {
            appStock: Stock,
        },
    };
</script>

<style>

</style>
