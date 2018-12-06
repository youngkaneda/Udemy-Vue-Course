<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity">
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        @click="buy"
                        :disabled="numberQnt <= 0 || !Number.isInteger(numberQnt) || noFunds">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0,
            }
        },
        computed: {
            numberQnt() {
                return parseInt(this.quantity);
            },
            noFunds() {
                return this.$store.getters['portfolio/funds'] < this.stock.price * this.quantity;
            },
        },
        methods: {
            ...mapActions('stocks', ['buyStock']),
            buy() {
                const order = {
                    stockPrice: this.stock.price,
                    stockId: this.stock.id,
                    quantity: this.quantity,
                };
                this.buyStock(order);
                this.quantity = 0;
            }
        },
    }
</script>
