<template>
    <!-- Feature section with grid -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <svg
                class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor"
                        />
                        </pattern>
                </defs>
                <rect
                    width="404"
                    height="784"
                    fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                />
                </svg>

                <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div class="lg:col-span-1">
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {{menuitems.featuregrid[0].largetitle}}
                        </h2>
                    </div>

                    <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        <div
                            class="relative"
                            v-for="(featuregrid) in menuitems.featuregrid[0].children"
                            :key="featuregrid.smaltitle"
                        >
                            <dt>
                                <div class="absolute flex items-center justify-center h-12 w-12">
                                    <img
                                        :src="featuregrid.img"
                                        width="50"
                                        height="50"
                                        :alt="featuregrid.feature"
                                    >
                                </div>
                                <p class="ml-16 text-lg leading-6 font-semibold text-gray-900">{{featuregrid.feature}}</p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">
                                {{featuregrid.description}}
                            </dd>
                </div>
                </dl>
        </div>
    </div>
    </div>
    <!--End-->
</template>
<script>
import menuitems from "@/store/siteconfig.json";
export default {
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>