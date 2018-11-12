<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- <quote> -->
                <!-- <h2 slot="title">Title {{interpolation works}}</h2> -->
                <!-- <p>A wonderful quote!</p> -->
                <!-- </quote> -->
                <button @click="selectedComp = 'quote'">quote</button>
                <button @click="selectedComp = 'another'">another</button>
                <keep-alive>
                    <component :is="selectedComp"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Another from './components/Another.vue'
    export default {
        data: function () {
            return {
                selectedComp: "quote"
            }
        },
        components: {
            quote: Quote,
            another: Another
        }
    }
</script>

<style>
</style>