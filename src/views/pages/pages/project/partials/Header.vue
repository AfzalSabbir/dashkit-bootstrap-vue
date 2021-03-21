<template>

    <!-- HEADER -->
    <div class="header">
        <div class="container">

            <!-- Body -->
            <div class="header-body">
                <div class="row align-items-center">
                    <div class="col-auto">

                        <!-- Avatar -->
                        <div class="avatar avatar-lg avatar-4by3">
                            <img src="/assets/img/avatars/projects/project-1.jpg" alt="..." class="avatar-img rounded">
                        </div>

                    </div>
                    <div class="col ml-n3 ml-md-n2">

                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                            Projects
                        </h6>

                        <!-- Title -->
                        <h1 class="header-title">
                            Homepage Redesign
                        </h1>

                    </div>
                    <div class="col-12 col-md-auto mt-3 mt-md-0">

                        <!-- Avatar group -->
                        <div class="avatar-group">
                            <a href="profile-posts.html" class="avatar" data-toggle="tooltip" title="Dianna Smiley">
                                <img src="/assets/img/avatars/profiles/avatar-1.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>
                            <a href="profile-posts.html" class="avatar" data-toggle="tooltip" title="Ab Hadley">
                                <img src="/assets/img/avatars/profiles/avatar-2.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>
                            <a href="profile-posts.html" class="avatar" data-toggle="tooltip" title="Adolfo Hess">
                                <img src="/assets/img/avatars/profiles/avatar-3.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>
                            <a href="profile-posts.html" class="avatar" data-toggle="tooltip" title="Daniela Dewitt">
                                <img src="/assets/img/avatars/profiles/avatar-4.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>
                        </div>

                        <!-- Button -->
                        <a href="#modalMembers" class="btn btn-lg btn-rounded-circle btn-white lift" data-toggle="modal">
                            +
                        </a>

                    </div>
                </div> <!-- / .row -->
                <div class="row align-items-center">
                    <div class="col">

                        <!-- Nav -->
                        <ul class="nav nav-tabs nav-overflow header-tabs">
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesProjectOverview'}" class="nav-link">
                                    Overview
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesProjectFiles'}" class="nav-link">
                                    Files
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesProjectReports'}" class="nav-link">
                                    Reports
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'pagesProjectNew'}" class="nav-link">
                                    Add New
                                </router-link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </div> <!-- / .header -->
</template>

<script>
export default {
name: "PagesProjectPartialHeader"
}
</script>

<style scoped>

</style>
