<template>
    <div id="pagesProject">

        <!-- MAIN CONTENT
        ================================================== -->
        <div class="main-content">
            <PagesProjectPartialHeader ref="pagesProjectPartialHeader"></PagesProjectPartialHeader>
            <router-view ref="pagesProject"></router-view>
        </div> <!-- / .main-content -->

    </div>
</template>

<script>
import PagesProjectPartialHeader from "@/views/pages/pages/project/partials/Header"

export default {
    name      : "PagesProjectIndex",
    components: {PagesProjectPartialHeader},
}
</script>

<style scoped>

</style>
