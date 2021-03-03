<template>
    <div id="app">
        <router-view ref="app"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    mounted() {
        //setting.resetDefault();
    },
    watch: {
        "$route": (newVal, oldVal) => {
            if(newVal != oldVal) {
                //$.getScript('/assets/js/theme.min.js', function() {})
            }
        }
    }
}
</script>

<style>
#app {
}
</style>
