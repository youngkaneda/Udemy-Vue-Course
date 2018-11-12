<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{quote}} </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote: function(index) {
                this.$emit("deleteQuote", index);
            }
        }
    }
</script>

<style>
</style>