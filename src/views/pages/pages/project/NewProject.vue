<template>
    <div id="pagesProjectNew">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8">

                    <!-- Header -->
                    <div class="header">
                        <div class="header-body">
                            <div class="row align-items-center">
                                <div class="col">

                                    <!-- Pretitle -->
                                    <h6 class="header-pretitle">
                                        New project
                                    </h6>

                                    <!-- Title -->
                                    <h1 class="header-title">
                                        Create a new project
                                    </h1>

                                </div>
                            </div> <!-- / .row -->
                        </div>
                    </div>

                    <!-- Form -->
                    <form class="mb-4">

                        <!-- Project name -->
                        <div class="form-group">

                            <!-- Label  -->
                            <label>
                                Project name
                            </label>

                            <!-- Input -->
                            <input type="text" class="form-control">

                        </div>

                        <!-- Project description -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="mb-1">
                                Project description
                            </label>

                            <!-- Text -->
                            <small class="form-text text-muted">
                                This is how others will learn about the project, so make it good!
                            </small>

                            <!-- Textarea -->
                            <div data-toggle="quill"></div>

                        </div>

                        <!-- Project tags -->
                        <div class="form-group">

                            <!-- Label -->
                            <label>
                                Project tags
                            </label>

                            <!-- Select -->
                            <select class="form-control" data-toggle="select" multiple>
                                <option>CSS</option>
                                <option>HTML</option>
                                <option>JavaScript</option>
                                <option>Bootstrap</option>
                            </select>

                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">

                                <!-- Start date -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label>
                                        Start date
                                    </label>

                                    <!-- Input -->
                                    <input type="text" class="form-control" data-toggle="flatpickr">

                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <!-- Start date -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label>
                                        End date
                                    </label>

                                    <!-- Input -->
                                    <input type="text" class="form-control" data-toggle="flatpickr">

                                </div>

                            </div>
                        </div> <!-- / .row -->

                        <!-- Divider -->
                        <hr class="mt-4 mb-5">

                        <!-- Project cover -->
                        <div class="form-group">

                            <!-- Label  -->
                            <label class="mb-1">
                                Project cover
                            </label>

                            <!-- Text -->
                            <small class="form-text text-muted">
                                Please use an image no larger than 1200px * 600px.
                            </small>

                            <!-- Dropzone -->
                            <div class="dropzone dropzone-single mb-3" data-toggle="dropzone" data-options='{"url": "https://", "maxFiles": 1, "acceptedFiles": "image/*"}'>

                                <!-- Fallback -->
                                <div class="fallback">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="projectCoverUploads">
                                        <label class="custom-file-label" for="projectCoverUploads">Choose file</label>
                                    </div>
                                </div>

                                <!-- Preview -->
                                <div class="dz-preview dz-preview-single">
                                    <div class="dz-preview-cover">
                                        <img class="dz-preview-img" src="data:image/svg+xml,%3csvg3c/svg%3e" alt="..." data-dz-thumbnail>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Divider -->
                        <hr class="mt-5 mb-5">

                        <!-- Starting files -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="mb-1">
                                Starting files
                            </label>

                            <!-- Text -->
                            <small class="form-text text-muted">
                                Upload any files you want to start the projust with.
                            </small>

                            <!-- Card -->
                            <div class="card">
                                <div class="card-body">

                                    <!-- Dropzone -->
                                    <div class="dropzone dropzone-multiple" data-toggle="dropzone" data-options='{"url": "https://"}'>

                                        <!-- Fallback -->
                                        <div class="fallback">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFileUpload" multiple>
                                                <label class="custom-file-label" for="customFileUpload">Choose file</label>
                                            </div>
                                        </div>

                                        <!-- Preview -->
                                        <ul class="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush">
                                            <li class="list-group-item">
                                                <div class="row align-items-center">
                                                    <div class="col-auto">

                                                        <!-- Image -->
                                                        <div class="avatar">
                                                            <img class="avatar-img rounded" src="data:image/svg+xml,%3csvg3c/svg%3e" alt="..." data-dz-thumbnail>
                                                        </div>

                                                    </div>
                                                    <div class="col ml-n3">

                                                        <!-- Heading -->
                                                        <h4 class="mb-1" data-dz-name>...</h4>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-0" data-dz-size></p>

                                                    </div>
                                                    <div class="col-auto">

                                                        <!-- Dropdown -->
                                                        <div class="dropdown">

                                                            <!-- Toggle -->
                                                            <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>

                                                            <!-- Menu -->
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a href="#" class="dropdown-item" data-dz-remove>
                                                                    Remove
                                                                </a>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Divider -->
                        <hr class="mt-5 mb-5">

                        <div class="row">
                            <div class="col-12 col-md-6">

                                <!-- Private project -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="mb-1">
                                        Private project
                                    </label>

                                    <!-- Text -->
                                    <small class="form-text text-muted">
                                        If you are available for hire outside of the current situation, you can encourage others to hire you.
                                    </small>

                                    <!-- Switch -->
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="switchOne">
                                        <label class="custom-control-label" for="switchOne"></label>
                                    </div>

                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <!-- Warning -->
                                <div class="card bg-light border">
                                    <div class="card-body">

                                        <!-- Heading -->
                                        <h4 class="mb-2">
                                            <i class="fe fe-alert-triangle"></i> Warning
                                        </h4>

                                        <!-- Text -->
                                        <p class="small text-muted mb-0">
                                            Once a project is made private, you cannot revert it to a public project.
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </div> <!-- / .row -->

                        <!-- Divider -->
                        <hr class="mt-5 mb-5">

                        <!-- Buttons -->
                        <a href="#" class="btn btn-block btn-primary">
                            Create project
                        </a>
                        <a href="#" class="btn btn-block btn-link text-muted">
                            Cancel this project
                        </a>

                    </form>

                </div>
            </div> <!-- / .row -->
        </div>
    </div>
</template>

<script>
export default {
    name: "PagesProjectNew"
}
</script>

<style scoped>

</style>
