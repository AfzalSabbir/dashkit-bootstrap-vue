<template>
    <div id="pagesTeam">

        <!-- MAIN CONTENT
        ================================================== -->
        <div class="main-content">
            <PagesTeamPartialHeader ref="pagesTeamPartialHeader"></PagesTeamPartialHeader>
            <router-view ref="pagesTeam"></router-view>
        </div>
    </div>
</template>

<script>
import PagesTeamPartialHeader from "./partials/Header"

export default {
    name      : "PagesTeamIndex",
    components: {PagesTeamPartialHeader},
}
</script>

<style scoped>

</style>
