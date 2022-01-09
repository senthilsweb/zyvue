<template>
<div class="h-screen flex overflow-hidden bg-white">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col h-0 flex-1 border-r border-green-200 bg-green-800">
                <LeftNavBar />
                <LeftNavProfileBar />
            </div>
        </div>
    </div>

    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div class="flex-1 relative z-0 flex overflow-hidden">
            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabindex="0">
                <article>
                    <pageheader heading="Websettings Data Management" showbutton="true" guide="Search for Websettings data with parent code" addClickEvent="evtWebsettingsUpsert" />
                    <search heading="" />
                    <!--Datatable action buttons (Start)-->
                    <WebsettingsDataTableActionButtons />
                    <!--Datatable action buttons (End)-->
                    <WebsettingsDataTable />
                </article>
            </main>
        </div>
    </div>
    <WebsettingsUpsert />
    
</div>
</template>

<script>
//import NavBar from "@/components/NavBar.vue"
import LeftNavBar from "@/components/LeftNavBar.vue";
import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
import pageheader from "@/pages/websettings/pageheader.vue";
import WebsettingsUpsert from "@/pages/websettings/WebsettingsUpsert.vue";
import search from "@/pages/websettings/search.vue";
import WebsettingsDataTable from "@/pages/websettings/WebsettingsDataTable.vue";
import WebsettingsDataTableActionButtons from "@/pages/websettings/WebsettingsDataTableActionButtons.vue";

export default {
    layout: 'app',
    components: {
        LeftNavBar,
        LeftNavProfileBar,
        pageheader,
        search,
        WebsettingsUpsert,
        WebsettingsDataTable,
        WebsettingsDataTableActionButtons,
    },
    methods: {
       
    },
    created() {
       
    },
    beforeDestroy() {

    }
};
</script>
