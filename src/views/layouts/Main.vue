<template>
    <div class="hello">
        <SlideBarRight ref="slideBarRight"/>

        <SidenavOrComboAndNotSmall :activeNabType="activeNabType" :activeNabSize="activeNabSize"
                                   :activeNavColor="activeNavColor" ref="navBar"/>
        <SidenavOrComboAndSmall :activeNabType="activeNabType" :activeNabSize="activeNabSize"
                                :activeNavColor="activeNavColor" ref="navBar"/>
        <TopNav :activeNabType="activeNabType" :activeNabSize="activeNabSize" :activeNavColor="activeNavColor"
                ref="navBar"/>

        <!-- MAIN CONTENT ================================================== -->
        <div class="main-content">
            <CombBar ref="combBar" v-if="activeNabType == 'combo'"/>
            <router-view ref="main"/>
        </div>
    </div>
</template>

<script>
import setting from "@/services/SiteSetting";
import SlideBarRight from "@/views/partials/SlideBarRight";
import NavBar from "@/views/partials/NavBar";
import SidenavOrComboAndSmall from "@/views/partials/nav/SidenavOrComboAndSmall";
import TopNav from "@/views/partials/nav/TopNav";
import SidenavOrComboAndNotSmall from "@/views/partials/nav/SidenavOrComboAndNotSmall";
import CombBar from "@/views/partials/CombBar";

export default {
    name: "Main",
    components: {SidenavOrComboAndSmall, TopNav, SidenavOrComboAndNotSmall, CombBar, NavBar, SlideBarRight},
    data() {
        return {
            activeNabType: setting.getSetting('dashkitNavPosition'),
            activeNabSize: setting.getSetting('dashkitSidebarSize'),
            activeNavColor: setting.navColors[setting.getSetting('dashkitNavColor')],
        }
    },
    mounted() {
        //data:image/png;base64,MDEyMzEyMzEyMw==
        setting.init();
    },
}
</script>

<style scoped>

</style>
