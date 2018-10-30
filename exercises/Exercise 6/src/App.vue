<template>
    <div class="container">
        <headers></headers>
        <hr>
        <div class="row">
            <servers></servers>
        </div>
        <details></details>
        <hr>
        <footers></footers>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Server from './Server.vue';
    import Detail from './Detail.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'headers': Header,
            'servers': Server,
            'details': Detail,
            'footers': Footer
        }
    }
</script>

<style>

</style>
