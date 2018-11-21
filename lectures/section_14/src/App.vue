<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <br>
                <button class="btn btn-primary" @click="show = !show">show alert</button>
                <br><br>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">some alert info</div>
                </transition>
                <br>
                <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">some alert info</div>
                </transition>
                <br>
                <transition name="slide" type="animation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">some alert info</div>
                    <div class="alert alert-warning" v-else key="warn">some alert warn</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        /* remember to set who dictates the animation length */
        transition: opacity 1s;
        animation: slide-in 1s ease-in forwards;
    }
    /* .slide-leave {
    } */
    .slide-leave-active {
        /* remember to set who dictates the animation length */
        animation: slide-out 1s ease-in forwards;
        transition: opacity 1s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);            
        }
    }
</style>
