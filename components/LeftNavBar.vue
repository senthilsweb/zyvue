<template>
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
    <div class="h-screen flex overflow-hidden bg-green-100">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div
            class="fixed inset-0 flex z-40 md:hidden"
            role="dialog"
            aria-modal="true"
        >
            <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
            <div
                class="fixed inset-0 bg-green-600 bg-opacity-75"
                aria-hidden="true"
            ></div>

    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
    <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-800">
        <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
            </button>
        </div>

        <div class="flex-shrink-0 flex items-center px-4">
            <nuxt-link
                tag="img"
                src="https://res.cloudinary.com/nathansweb/image/upload/v1631980578/logos/logo-mark-flower-indigo_pmykvr.svg"
                to="/"
                alt="Logo"
                class="h-8 w-auto"
            >
                </nuxt-link>
        </div>
        <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
                <a
                    v-for="(menu,index) in menuitems.leftnav"
                    :key="menu.link"
                    :href="menu.link"
                    class="text-green-300 hover:bg-green-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                    <svg
                        class="text-green-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            :d="menu.icon"
                        />
                        </svg>
                        {{menu.title}}
                        </a>
            </nav>
        </div>
    </div>

    <div
        class="flex-shrink-0 w-14"
        aria-hidden="true"
    >
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:flex-shrink-0">
            <div class="flex flex-col w-64">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex flex-col h-0 flex-1">
                    <div class="flex items-center h-16 flex-shrink-0 px-4 bg-green-800">
                        <nuxt-link
                            tag="img"
                            :src="menuitems.branding.logo.source"
                            to="/"
                            alt="Logo"
                            class="h-8 w-auto"
                        >
                            </nuxt-link>

                    </div>
                    <div class="flex-1 flex flex-col overflow-y-auto">
                        <nav class="flex-1 px-2 py-4 bg-green-600 space-y-1">
                            <!--  <a href="#" class="bg-green-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">-->
                            <a
                                v-for="(menu,index) in menuitems.menus"
                                :key="menu.link"
                                :href="menu.link"
                                class="text-green-300 hover:bg-green-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            >
                                <svg
                                    class="text-green-300 mr-3 h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        :d="menu.icon"
                                    />
                                    </svg>
                                    {{menu.title}}
                                    </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
            <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button class="px-4 border-r border-green-200 text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/menu-alt-2 -->
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                        </svg>
                </button>
            </div>
        </div>
        </div>
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
