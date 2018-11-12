<template>
    <div class="container">
        <app-header :quotesCount="quotes.length" :maxQuotes="maxQuotesNumber"></app-header>
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'
    export default {
        data: function () {
            return {
                quotes: [
                    'Just a quotes!'
                ],
                maxQuotesNumber: 10
            }
        },
        methods: {
            newQuote: function (quote) {
                if (this.quotes.length >= 10) {
                    return alert('delete some quotes first!');
                }
                if (quote === '')
                    return alert('write sometinhg before!');
                this.quotes.push(quote);
            },
            deleteQuote: function(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            quoteGrid: QuoteGrid,
            newQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
