<template>
    <div>
        <div>
            <slot name="title"></slot>
            <!-- if a slot with name subtitle is passed, this slot content replaced -->
            <span><slot name="subtitle">subtitle</slot></span>
        </div>
        <div>
            <!-- contents without are displayed here -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow:  1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        font-style: italic;
        color: aquamarine;
    }
</style>