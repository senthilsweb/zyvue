<template>
<div id="app">
  
    <div class="min-h-screen flex-col  justify-center flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row">

        <div class="sm:mx-auto sm:w-full sm:max-w-md py-40">
            <a href="/#" class="font-medium text-green-600 hover:text-green-500">
             <img
                                tag="img"
                                to="/#"
                                alt="Logo"
                              class="mx-auto h-12 w-auto" 
                                :src="menuitems.branding.mark.source"
                            />
                            </a>
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Get started with {{menuitems.title}}
    </h2>
     <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        Don't have an account yet?
                        <a href="#" class="font-medium text-green-600 hover:text-green-500">
                            Sign up
                        </a>
                    </p>
    
            <div>
              
             <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4  sm:rounded-lg sm:px-10">
                       

                        <form @submit.prevent="login">
                            <input type="hidden" name="remember" value="true" />
                            <div class="mt-10 flex items-center justify-center">
                                <div class="flex items-center">
                                    <label class="ml-2 block text-sm leading-5 text-red-900">
                                        {{ error }}
                                    </label>
                                </div>
                            </div>
                            <div class="rounded-md shadow-sm">
                                <div>
                                    <input v-model="email" aria-label="Email address" name="email" type="email" value="admin@youremail.com" required class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none sm:text-sm border-gray-300" placeholder="Email address" />
                                </div>
                                <div class="-mt-px">
                                    <input v-model="password" aria-label="Password" name="password" type="password" value="admin" required class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300" placeholder="Password" />
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" />
                                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div class="mt-6">
                                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg class="h-5 w-5 text-white group-hover:text-white transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        <div class="hidden lg:block relative bg-gradient-to-br bg-gray-200 lg:w-1/2 lg:h-full">
         <div class="flex flex-col justify-center sm:px-6 lg:px-8 pt-1/4">
               
                            <h2 class="mt-2 text-center text-2xl font-extrabold text-gray-900">{{menuitems.featuregrid[0].h2}}</h2>
                  
                </div>
 <div class="relative lg:grid lg:gap-x-8 m-10">
                    
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
</div>
</template>

<script>
import FeatureGrid from "@/components/feature-grid.vue";
import menuitems from "@/store/siteconfig.json";
export default {
    components: {
        FeatureGrid
    },
    data() {
        return {
            users: {},
            email: "",
            password: "",
            error: null,
            menuitems,
        };
    },
    methods: {
        // Method to authenticate user
        async login() {
            try {
                //Temporary code (start)
                
                //Temporary code (end)
                store
                    .dispatch("login", {
                        email: this.email,
                        hashed_password: this.password,
                    })
                    .then(() => {
                        if (store.state.user.Success == false) {
                            this.error = store.state.user.Message;
                            return;
                        } else {
                            this.$router.push({
                                name: "organization",
                            });
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
