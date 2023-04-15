<template>
    <div class="bg-light-background dark:bg-dark-background blur-sm h-20  sticky top-0 -mb-20">
    </div>
        <div class="flex flex-row sticky top-2 bg-light-accent-500 dark:bg-dark-accent-500 h-16  p-4 m-5 rounded-md">
            <!-- Logo -->
            <div class="basis-1/4">
            <h1 class="text-left text-2xl md:text-4xl">
                <nuxt-link to="/main">
                    DeepShares
                </nuxt-link>
            </h1> 
            </div>
            <!-- Search -->
            <div class="basis-1/2">
            </div>
            <!-- Navigation -->
            <div class="basis-1/4 text-right">
                <div class="flex flex-row">
                    <!-- <div  class="basis-1/4"  > <Icon name="carbon:finance" /> </div> -->
                    <div  class="basis-1/4"  ><slot class="basis-1/4"></slot> </div>
                    <!-- <div  class="basis-1/4"  ><Icon name="carbon:finance" /></div> -->
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
    const client = useSupabaseClient()
    
</script>
