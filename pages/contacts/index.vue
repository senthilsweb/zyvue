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
                        <ContactsPageHeader heading="Contacts Data Management" showbutton="true" guide="Search
                                for Contacts data" addClickEvent="evtUpsertContacts" />
                                        <ContactsSearch heading="" />
                                        <!--Datatable action buttons (Start)-->
                                        <ContactsDataTableActionButtons />
                                        <!--Datatable action buttons (End)-->
                                        <ContactsDataTable />
                    </article>
                </main>
            </div>
        </div>
        <ContactsUpsert />
    </div>
</template>

<script>
    /**
     * index.vue
     *
     * @description :: Landing page for [Contacts]
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
     * Modified at  :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
     */
    import LeftNavBar from "@/components/LeftNavBar.vue";
    import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
    import ContactsPageHeader from "@/pages/contacts/ContactsPageHeader.vue";
    import ContactsUpsert from "@/pages/contacts/ContactsUpsert.vue";
    import ContactsSearch from "@/pages/contacts/ContactsSearch.vue";
    import ContactsDataTable from "@/pages/contacts/ContactsDataTable.vue";
    import ContactsDataTableActionButtons from "@/pages/contacts/ContactsDataTableActionButtons.vue";

    export default {
        layout: 'app',
        components: {
            LeftNavBar,
            LeftNavProfileBar,
            ContactsPageHeader,
            ContactsSearch,
            ContactsUpsert,
            ContactsDataTable,
            ContactsDataTableActionButtons,
    },
    methods: {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>