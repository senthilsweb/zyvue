<template>
<section v-if="isUpsertContactsVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0" aria-hidden="true"></div>
        <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div class="w-screen max-w-md">
                <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                    <div class="flex-1 h-0 overflow-y-auto">
                        <header class="space-y-1 py-6 px-4 bg-green-700 sm:px-6">
                            <div class="flex items-center justify-between space-x-3">
                                <h2 class="text-lg leading-7 font-medium text-white">
                                    Contacts
                                </h2>
                                <div class="h-7 flex items-center">
                                    <button v-on:click="closeContactsPanel()" aria-label="Close panel" class="text-green-200 hover:text-white transition ease-in-out duration-150">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm leading-5 text-green-300">
                                    Create or update Contacts record
                                </p>
                            </div>
                        </header>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                <div class="space-y-6 pt-6 pb-5">
                                    <form name="frmContacts" id="frmContacts" class="space-y-8 divide-y divide-gray-200" @submit.prevent="SaveAndUpdate">
                                        <div class="sm:overflow-hidden">
                                            <div class="bg-white space-y-6">
                                                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                    <!--<div class="sm:col-span-6">
                                                        <label for="code" class="block text-sm font-medium text-gray-700">
                                                            Code
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.code" type="text" name="code" id="code" placeholder="" value="$RT34@23" autocomplete="code" class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                                                        </div>
                                                        <p class="mt-2 text-sm text-red-600" id="email-error">Special Characters are not allowed.</p>
                                                    </div>-->

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            First_name
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.first_name" type="text" id="first_name" name="first_name" autocomplete="first_name" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Last_name
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.last_name" type="text" id="last_name" name="last_name" autocomplete="last_name" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Primary_email
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.primary_email" type="text" id="primary_email" name="primary_email" autocomplete="primary_email" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Mobile_numer
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.mobile_numer" type="text" id="mobile_numer" name="mobile_numer" autocomplete="mobile_numer" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Location
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.location" type="text" id="location" name="location" autocomplete="location" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Social_id
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.social_id" type="text" id="social_id" name="social_id" autocomplete="social_id" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <Dropdownlist v-model="data.parent_code" @selected_item="handleSelectedInParent" id="social_type" name="social_type" label="Social Media Type" api='master?where={"or" : [{"parent_code" : ["f319cfb5-7bff-40bd-a3f8-e8d052bb1035"]},{"parent_code" : "f319cfb5-7bff-40bd-a3f8-e8d052bb1035"}]}' :selected_value="data.parent_code" />
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Role_type
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.role_type" type="text" id="role_type" name="role_type" autocomplete="role_type" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                                            Published_at
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.published_at" type="text" id="published_at" name="published_at" autocomplete="published_at" class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                        </div>
                                                    </div>

                                                    <div class="sm:col-span-6">
                                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                                            Additional Attributes
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea v-model="data.additional_attributes" id="additional_attributes" name="additional_attributes" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300"></textarea>
                                                        </div>
                                                        <p class="mt-2 text-sm text-gray-500">Anything can be stored, including rich JSON objects.
                                                        </p>
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <Dropdownlist v-model="data.is_enabled" @selected_item="handleSelectedInStatus" name="is_enabled" label="Status" :data="{'data' : [{'code' : 'true', 'name':'Published'},{'code' : 'false', 'name':'Draft'}]}" :selected_value="data.is_enabled" />
                                                    </div>
                                                    <div class="sm:col-span-6">
                                                        <Dropdownlist v-model="data.mark_as_delete" @selected_item="handleSelectedInMarkAsDelete" name="mark_as_delete" label="Mark as delete?" :data="{'data' : [{'code' : 'true', 'name':'Yes'},{'code' : 'false', 'name':'No'}]}" :selected_value="data.mark_as_delete" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                Reset
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm">
                            <button v-on:click="upsertContacts" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
                                Save
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
/**
 * ContactsUpsert.vue
 *
 * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
 *                 Additional events published to handle custom functions post "Save" operation.                 
 * 
 * @author      :: Zynobot
 * @help        :: 
 *
 * Created at   :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
 * Modified at  :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
 */
import Dropdownlist from "@/components/Dropdownlist.vue";
export default {
    components: {
        Dropdownlist
    },
    data() {
        return {
            isUpsertContactsVisible: false,
            data: {},
            api: ""
        }
    },
    methods: {
        async upsertContacts(args) {
            try {
                if (this.$_.isUndefined(this.data.id)) {
                    const {
                        data
                    } = await this.$axios.post("/api/Contacts", this.data);
                } else {
                    const {
                        data
                    } = await this.$axios.put("/api/Contacts/" + this.data.id, this.data);
                }
                this.data = {}
                this.isUpsertContactsVisible = !this.isUpsertContactsVisible;
                $nuxt.$emit('evtRefreshContactsDatatable')
                this.$toast.success("Record saved successfully")
            } catch (error) {
                console.log(error)
                this.$toast.error('Oops!Save failed...')
            } finally {

            }
        },
        async deleteContacts() {
            try {
                //Make sure to set the status and delete marker
                this.data.is_enabled = false;
                //end
                const {
                    data
                } = await this.$axios.delete("/api/Contacts/" + this.data.id);
                $nuxt.$emit('evtRefreshContactsDatatable')
                this.$toast.success("Record has been deleted successfully")
            } catch (error) {
                this.$toast.error('Oops! delete failed...')
            } finally {

            }
        },
        async bindContacts() {
            try {

            } catch (error) {
                console.log(error)
            }
        },
        async closeContactsPanel() {
            this.data = {}
            this.isUpsertContactsVisible = !this.isUpsertContactsVisible;
        },
        handleSelectedInStatus(data) {
            this.data.is_enabled = data;
        },
        handleSelectedInMarkAsDelete(data) {
            this.data.mark_as_delete = data;
        }
    },
    computed: {},
    mounted() {

    },
    created() {
        this.$nuxt.$on('evtUpsertContacts', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.isUpsertContactsVisible = !this.isUpsertContactsVisible;
                return this.data;
            }
            this.isUpsertContactsVisible = !this.isUpsertContactsVisible;
        });

        //2) Delete Contacts record and then rebind datatable
        this.$nuxt.$on('evtDeleteContacts', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.deleteContacts();
            }
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtUpsertContacts');
        this.$nuxt.$off('evtDeleteContacts');
    }
};
</script>
