<template>
    <div id="app">
        <router-view ref="app"></router-view>
    </div>
</template>

<script>
import Chart from 'chart.js';
import data from '@/chart-data'

export default {
    name: 'App',
    components: {},
    mounted() {
        //setting.resetDefault();
    },
    methods: {
        createChart(chartId) {

            setTimeout(() => {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: data[chartId].type,
                    data: data[chartId].data,
                    options: data[chartId].options,
                });
            }, 0);
        }
    },
    watch: {
        "$route": (newVal, oldVal) => {
            if (newVal != oldVal) {
                // $.getScript('/assets/libs/chart.js/dist/Chart.min.js', function() {})
                // $.getScript('/assets/libs/chart.js/Chart.extension.js', function() {})
            }
        }
    }
}
</script>

<style>
#app {
}
</style>
