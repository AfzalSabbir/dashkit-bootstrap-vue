<template>

    <!-- HEADER -->
    <div class="header">

        <!-- Image -->
        <img src="/assets/img/covers/team-cover.jpg" class="header-img-top" alt="...">

        <div class="container">

            <!-- Body -->
            <div class="header-body mt-n5 mt-md-n6">
                <div class="row align-items-end">
                    <div class="col-auto">

                        <!-- Avatar -->
                        <div class="avatar avatar-xxl header-avatar-top">
                            <img src="/assets/img/avatars/teams/team-logo-1.jpg" alt="..."
                                 class="avatar-img rounded border border-4 border-body">
                        </div>

                    </div>
                    <div class="col mb-3 ml-n3 ml-md-n2">

                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                            Groups
                        </h6>

                        <!-- Title -->
                        <h1 class="header-title">
                            Launchday
                        </h1>

                    </div>
                    <div class="col-12 col-md-auto mt-2 mt-md-0 mb-md-3">

                        <!-- Button -->
                        <router-link :to="{name: 'pagesTeamNewTeam'}" class="btn btn-primary d-block d-md-inline-block lift">
                            Join
                        </router-link>

                    </div>
                </div> <!-- / .row -->
                <div class="row align-items-center">
                    <div class="col">

                        <!-- Nav -->
                        <ul class="nav nav-tabs nav-overflow header-tabs">
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesTeamOverview'}" class="nav-link">
                                    Overview
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesTeamProjects'}" class="nav-link">
                                    Projects
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesTeamMembers'}" class="nav-link">
                                    Members
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesTeamNewTeam'}" class="nav-link">
                                    New Team
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a href="#!" class="nav-link">
                                    Settings
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div> <!-- / .header-body -->

        </div>

    </div> <!-- / .header -->
</template>

<script>
export default {
    name: "PagesTeamPartialHeader"
}
</script>

<style scoped>

</style>
