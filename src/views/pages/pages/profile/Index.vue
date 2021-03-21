<template>
    <!-- MAIN CONTENT
    ================================================== -->
    <div class="main-content">
        <PagesProfilePartialsHeader ref="pagesProfilePartialsHeader"></PagesProfilePartialsHeader>

        <div id="pagesProfile">
            <router-view ref="pagesProfile"></router-view>
        </div>
    </div> <!-- / .main-content -->
</template>

<script>
import PagesProfilePartialsHeader from '@/views/pages/pages/profile/partials/Header';

export default {
    name      : "PagesProfileIndex",
    components: {PagesProfilePartialsHeader},
}
</script>

<style scoped>

</style>
