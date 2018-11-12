<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <quote>
                   <h2 slot="title">Title <!-- {{interpolation works}} --></h2>
                   <p>A wonderful quote!</p>
               </quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        components: {
            quote: Quote
        }
    }
</script>

<style>
</style>
