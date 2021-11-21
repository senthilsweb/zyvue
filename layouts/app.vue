<template>
<div id="app">
    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0" x-data x-init="$el.focus()">
        <div class="max-w-8xl mx-auto">
            <!-- Replace with your content -->
            <nuxt />
            <!-- /End replace -->
        </div>
    </main>
   <alert showmodal="" ref="modalAlert" showicon="true" buttontext="Delete" title="Delete record" content="Are you sure you want to delete the record? It will be permanently removed. This action cannot be undone." />
</div>
</template>

<script>

export default {
    name: "appAuthenticated",
    components: {
       
    },
    methods: {
       
    }
};
</script>
