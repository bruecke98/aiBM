<template>
    <div class="bg-white blur-sm h-20 sticky top-0 -mb-20">
    </div>
        <div class="header flex flex-row sticky top-2 bg-slate-200 dark:bg-slate-800 h-16 p-4 m-5 rounded-md">
            <!-- Logo -->
            <div class="basis-1/4">
            <h1 class="text-left text-4xl">DeepShares</h1> 
            </div>
            <!-- Search -->
            <div class="basis-1/2">
            <h1> Suche </h1> 
            </div>
            <!-- Navigation -->
            <div class="basis-1/4 ">
                <div class="flex flex-row text-right">
                    <!-- <div  class="basis-1/4"  > <Icon name="carbon:finance" /> </div> -->
                    <div  class="basis-1/4"  ><slot class="basis-1/4"></slot> </div>
                    <!-- <div  class="basis-1/4"  ><Icon name="carbon:finance" /></div> -->
                    <div  class="basis-1/4"  ><Icon name="material-symbols:person-outline" /></div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
    const client = useSupabaseClient()
    
</script>

<style scoped>
.header {
    @apply dark:text-white
}

</style>