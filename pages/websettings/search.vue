<template>
<div>
    <form name="frmSearchWebsettings" id="frmSearchWebsettings" ref="frmSearchWebsettings" v-on:submit.prevent class="space-y-8 divide-y divide-gray-200">
        <div v-if="isFilterWebsettingsVisible" class="px-2 pt-2 border-b space-y-2">

            <h2 v-if="this.heading" class="text-lg leading-7 font-medium">
                {{this.heading}}
            </h2>
            <div class="sm:col-span-6">
                <Dropdownlist @selected_item="handleSelected" name="search_parent" id="search_parent" ref="search_parent" label="Parent" api='master?where={"or" : [{"parent_code" : [""]},{"parent_code" : null}]}' />
            </div>
            <div class="sm:col-span-6">
                <Dropdownlist @selected_item="handleSelectedForMarkAsDeleteInSearch" name="search_mark_as_delete" label="Marked as delete" :data="{'data' : [{'code' : 'true', 'name':'Yes'},{'code' : 'false', 'name':'No'}]}"/>
            </div>
            <div class="sm:col-span-6">
                <label for="name" class="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <!-- Heroicon name: solid/search -->
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input type="search" name="search_name" id="search_name" ref="search_name" class="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300" placeholder="Search">
                </div>
            </div>
            <div class="py-3 text-right">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Reset
                </button>
                <button @click="getSearchWebsettings()" type="submit" class="bg-green-600 border border-transparent  shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Search
                </button>
            </div>

        </div>
    </form>

</div>
</template>

<script>
import Dropdownlist from "@/components/Dropdownlist.vue";

export default {
    layout: 'app',
    props: {
        heading: String
    },
    components: {

        Dropdownlist
    },
    data() {
        return {
            isFilterWebsettingsVisible: false,
            parent_code: "",
            mark_as_delete : ""
        }
    },
    methods: {
        getSearchWebsettings() {
            //alert(this.$refs.search_name.value)
            let args = {}
            args.name = this.$refs.search_name.value
            args.parent_code = this.parent_code
            args.mark_as_delete = this.mark_as_delete
            $nuxt.$emit('evtSearchWebsettings', args)
        },
        handleSelected(data) {
            this.parent_code = data;
        },
        handleSelectedForMarkAsDeleteInSearch(data){
            this.mark_as_delete = data;
        }
    },
    created() {
        this.$nuxt.$on('evtFilterWebsettings', (data) => {
            this.isFilterWebsettingsVisible = !this.isFilterWebsettingsVisible;
        });

    },
};
</script>
