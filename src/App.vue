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
    },
    methods: {
        createChart(chartId, dataKey = chartId) {

            setTimeout(() => {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: data[dataKey].type,
                    data: data[dataKey].data,
                    options: data[dataKey].options,
                });
            }, 0);
        }
    },
    watch: {
        "$route": (newVal, oldVal) => {
            if (newVal != oldVal) {
                // action for every route change
            }
        }
    }
}
</script>

<style>
</style>
