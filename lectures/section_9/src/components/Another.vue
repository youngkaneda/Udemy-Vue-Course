<template>
    <div>
        <p>Another component</p>
        <button @click="counter++">increasse</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            }
        },
        // dynamic components lifecycle {only if kept alive}
        activated: function () {
            console.log("activated");
        },
        deactivated: function () {
            console.log("deactivated");
        }
    }
</script>

<style></style>