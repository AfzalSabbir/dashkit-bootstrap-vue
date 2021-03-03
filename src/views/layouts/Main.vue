<template>
    <div>
        <NavBar :activeNabType="activeNabType" :activeNabSize="activeNabSize" :activeNavColor="activeNavColor" ref="navBar"/>
        <div class="hello">
            <SlideBarRight ref="slideBarRight"/>

            <!-- MAIN CONTENT ================================================== -->
            <div class="main-content">
                <CombBar ref="combBar" v-if="activeNabType == 'combo'"/>
                <router-view ref="main"/>
            </div>
        </div>
    </div>
</template>

<script>
import setting from "@/services/SiteSetting";
import SlideBarRight from "@/views/partials/SlideBarRight";
import NavBar from "@/views/partials/NavBar";
import CombBar from "@/views/partials/CombBar";

export default {
    name: "Main",
    components: {CombBar, NavBar, SlideBarRight},
    data() {
        return {
            activeNabType: setting.getSetting('dashkitNavPosition'),
            activeNabSize: setting.getSetting('dashkitSidebarSize'),
            activeNavColor: setting.navColors[setting.getSetting('dashkitNavColor')],
        }
    },
    mounted() {
        setting.init();
    }
}
</script>

<style scoped>

</style>
