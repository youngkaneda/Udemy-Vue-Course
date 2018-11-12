<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-2 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea rows="3" class="form-control" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-2 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createQuote">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                quote: ''
            };
        },
        methods: {
            createQuote: function () {
                this.$emit("newQuoteCreated", this.quote);
            }
        }
    }
</script>

<style>
</style>