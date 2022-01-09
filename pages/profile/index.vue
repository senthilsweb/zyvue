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
                <main
                    class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
                    tabindex="0"
                >
                    <article>
                        <PageHeader
                            heading="Header"
                            showbutton="true"
                            guide="Search
                                for Navigation data"
                            addClickEvent="evtUpsertNavigation"
                        />

                    </article>
                    </main>
            </div>
        </div>
        <NavigationUpsert />
    </div>
</template>

<script>
/**
 * index.vue
 *
 * @description :: Landing page for [Navigation]
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Sun May 16 2021 18:31:44 GMT-0400 (Eastern Daylight Time)
 */
import LeftNavBar from "@/components/LeftNavBar.vue";
import LeftNavProfileBar from "@/components/LeftNavProfileBar.vue";
import PageHeader from "@/components/pageheader.vue";

export default {
  layout: "app",
  components: {
    LeftNavBar,
    LeftNavProfileBar,
    PageHeader,
  },
  methods: {},
  created() {},
  beforeDestroy() {},
};
</script>