<template>
    <div>
        <div class="flex">
            <div class="flex-1 bg-gradient-to-r">
                <div class="flex-1 m-1 p-1">
                    <v2-table :data="Contacts" :default-sort='{prop: "first_name", order: "ascending"}'
                        @sort-change="handleSortChange" :loading="loading" :total="total"
                        :pagination-info="paginationInfo" :shown-pagination="true" @page-change="getContacts" border
                        :row-class-name="getRowClassName" height="450" ref="mydt">
                        <v2-table-column type="selection" width="45">
                        </v2-table-column>
                        
                            <v2-table-column label="first_name" prop="first_name">
                                <template slot-scope="scope">
                                    <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                                        {{scope.row.first_name | truncate(25)}} </div>
                                </template>
                            </v2-table-column>
                            
                            <v2-table-column label="last_name" prop="last_name">
                                <template slot-scope="scope">
                                    <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                                        {{scope.row.last_name | truncate(25)}} </div>
                                </template>
                            </v2-table-column>
                            
                            <v2-table-column label="email" prop="email">
                                <template slot-scope="scope">
                                    <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                                        {{scope.row.email | truncate(25)}} </div>
                                </template>
                            </v2-table-column>
                             <v2-table-column label="address" prop="address">
                                <template slot-scope="scope">
                                    <div class="ml-2 text-left text-xs font-medium text-gray-500 tracking-wider">
                                        {{scope.row.address | truncate(25)}} </div>
                                </template>
                            </v2-table-column>
                    </v2-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * ContactsDataTable.vue
     *
     * @description :: Datatable / grid to list [Contacts] records
     *                 Search, filter, pagination, sorting, add, edit, delete, refresh, selectall supported
     *
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
     * Modified at  :: Sat May 29 2021 09:46:26 GMT-0400 (Eastern Daylight Time)
     */
    let pageSize = 10

    export default {
        components: {

        },
        data() {
            return {
                Contacts: { },
                searchCriteria: { },
                currentPage: 1,
                total: 9,
                loading: false,
                paginationInfo: {
                text: "<div class='flex-1'><span class='ml-14 text-sm font-bold text-gray-800'>Total of <strong>198</strong>, <strong>25</strong> per page</span></div>",
                pageSize: pageSize
            },
        }
    },
    filters: {
        truncate(val, len) {
            let n = (len === undefined) ? 5 : len;
            return s(val).truncate(n).capitalize().value()
        }
    },
    methods: {
        async getContacts(page) {
            try {
                this.currentPage = page;
                this.loading = false;
                let offset = page == 1 ? 0 : (page - 1) * pageSize;
                offset = isNaN(offset) ? 0 : offset;
                let api = (REST_ENDPOINT || this.$config.apiURL) +"contacts?limit=" + pageSize + "&skip=" + offset;
                if (!this.$_.isEmpty(this.searchCriteria)) {
                    api += this.buildSearchQueryCriteria();
                }
               
                const {
                    data
                } = await this.$axios.get(api);
                this.total = 25;
               
                //Initiate explicit timeout
                setTimeout(() => {
                    this.paginationInfo = {
                        text: '<div class="flex-1"><span class="ml-14 text-sm font-bold text-gray-800"> Total of <strong>' +
                            this.total +
                            "</strong>, <strong>" +
                            pageSize +
                            "</strong> per page</span></div>",
                        pageSize: pageSize
                    };
                    this.$refs.mydt.updateScrollbar(true);
                    //v2-table__pagination

                }, 10);
                return this.Contacts = data;
            } catch (error) {
                console.log(error)
            }

        },
        buildSearchQueryCriteria() {
            let criteria = '&where={';
            let boolCriteriaExists = false;
            if (!this.$_.isEmpty(this.searchCriteria.mark_as_delete)) {
                criteria += '"mark_as_delete" : ' + this.searchCriteria.mark_as_delete
                boolCriteriaExists = true;
            }
            if (!s.isBlank(this.searchCriteria.name)) {
                if (boolCriteriaExists) {
                    criteria += ',"name" : {"contains":' + '"' + this.searchCriteria.name + '"}'
                    boolCriteriaExists = true;
                } else {
                    criteria += '"name" : {"contains":' + '"' + this.searchCriteria.name + '"}'
                    boolCriteriaExists = true;
                }
                boolCriteriaExists = true;
            }
            criteria += '}';
            return criteria;
        },
        async handleSortChange() {

        },
        getRowClassName({
            row,
            rowIndex
        }) {
            let className = "";
            return ""
            if (!row.is_enabled) {
                className = 'bg-blue-50 border-blue-200';
            }
            if (row.mark_as_delete) {
                className = 'bg-red-50 border-red-200';
            }
            return className;
        },
    },
    computed: {

    },
    mounted() {

    },
    created() {

        //1) Bind Contacts Datatable when the view is mounted
        this.getContacts(this.currentPage);

        //2) After successful Insert or update or Delete of the record, rebind the datatable
        this.$nuxt.$on('evtBindContactsDatatable', (data) => {
            if (data !== undefined) {
                //After successful update of individual record, rebind the datatable
                this.getContacts(this.currentPage);
            }
        });
        //3) Refresh table
        this.$nuxt.$on('evtRefreshContactsDatatable', (data) => {
            this.getContacts(this.currentPage);
        });
        //4) Search
        this.$nuxt.$on('evtSearchContacts', (data) => {
            //alert(JSON.stringify(data))
            this.searchCriteria = data;
            this.getContacts(1);
        });
    },
};
</script>

<style>
    .v2-table__column-cell {
        @apply text-sm;
    }

    .v2-table__column-cell {
        @apply font-bold;
    }

    .v2-table__column-cell {
        @apply text-red-800;
    }
</style>