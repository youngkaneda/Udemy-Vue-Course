<template>
    <div>
        <div class="form-group">
            <label for="Fist Name">Fist Name</label>
            <input type="text" class="form-control" :value="firstName" @input="changed(true, $event)">
        </div>
        <div class="form-group">
            <label for="Last Name">Last Name</label>
            <input type="text" class="form-control" :value="lastName" @input="changed(false, $event)">
        </div>            
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            changed(isFirst, event) {
                if(isFirst)
                    this.value = event.target.value + ' ' + this.lastName;
                else
                    this.value = this.firstName + ' ' + event.target.value;
                this.$emit("input", this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        }
    }
</script>

<style></style>