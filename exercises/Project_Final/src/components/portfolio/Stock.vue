<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
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
                        @click="sell"
                        :disabled="numberQnt <= 0 || !Number.isInteger(numberQnt) || quantity > stock.quantity">Sell</button>
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
            }
        },
        methods: {
            ...mapActions('portfolio', ['sellStock']),
            sell() {
                const order = {
                    stockPrice: this.stock.price,
                    stockId: this.stock.id,
                    quantity: this.quantity,
                };
                this.sellStock(order);
                this.quantity = 0;
            },
        }
    }
</script>