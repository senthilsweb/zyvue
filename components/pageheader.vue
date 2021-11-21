<template>
<header class="w-full">
    <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">

        <div class="flex-1 flex justify-between px-2 sm:px-2">
            <div class="flex-1 min-w-0">
                <h2 class="text-lg leading-7 font-medium">
                    {{this.heading}}
                </h2>
                <div>
                    <p class="text-sm leading-5 text-gray-400">
                        {{this.guide}}
                    </p>
                </div>
            </div>
            <div v-if="this.showbutton=='true'" class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                <button @click="$nuxt.$emit('evtMasterUpsert')" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add New
                </button>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: "dropdownlist",
    data() {
        return {
            
        }
    },
    props: {
        heading: String,
        showbutton: String,
        guide: String,
        addClickEvent : String
    },
    methods: {
        created() {

        },
        beforeMount() {

        }
    }
}
</script>
