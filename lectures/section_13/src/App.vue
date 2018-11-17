<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUpperCase | toLowerCase}}</p>
                <input type="text" v-model="filterInput">
                <ul>
                    <li v-for="fruit in filteredFruits"> {{fruit}} </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {filteredList} from './listMixin.js'

    export default {
        mixins: [filteredList],
        data: function() {
            return {
                text: 'hello there!',
            }
        },
        filters: {
            toUpperCase: function(value) {
                return value.toUpperCase();
            }
        },
        created: function() {
            console.log('component log');
        }
    }
</script>

<style></style>
