<template>
    <div class="bg-light-background dark:bg-dark-background blur-sm h-20 sticky top-0 -mb-20">
    </div>
        <div class="header flex flex-row  sticky top-2 bg-light-accent-500 dark:bg-dark-accent-500 h-16 p-4 m-5 rounded-md">
            <!-- Logo -->
            <div class="md:basis-1/4 basis-1/2">
            <h1 class="text-left text-2xl md:text-4xl">
                <nuxt-link to="/main">
                    DeepShares
                </nuxt-link>
            </h1> 
            </div>
            <!-- Search -->
            <div class="basis-1/2 hidden md:block">
            <h1> Suche </h1> 
            </div>
            <!-- Navigation Medium -->
            <div class="md:basis-1/4 hidden md:block ">
                <div class="flex flex-row text-right">
                    <!-- <div  class="basis-1/4"  > <Icon name="carbon:finance" /> </div> -->
                    <div  class="basis-1/4"  ><slot class="basis-1/4"></slot> </div>
                    <!-- <div  class="basis-1/4"  ><Icon name="carbon:finance" /></div> -->
                    <div  class="basis-1/4">
                        <nuxt-link to="/account">
                            <Icon name="material-symbols:person-outline" />
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <!-- Navigation Mobile -->
        
                <button class="basis-1/2 text-right md:hidden" 
                    type="button" v-on:click="toggleNavbar()">
                    <span v-if="!showMenu" class="transition ease-in-out duration-500">
                        <Icon name="material-symbols:menu-rounded" />
                    </span>
                    <span v-else class="transition ease-in-out duration-500">
                        <Icon name="mdi-close" />
                    </span>
                </button>
        </div>
        <div class="md:hidden sticky top-16 " v-if="showMenu">
            <div class="flex flex-col bg-light-accent-600 dark:bg-dark-accent-600 -mt-7 m-5 rounded-b" >
                <div class="flex flex-row mt-5">
                    <div  class="basis-1/2 "  ><slot class="basis-1/4"></slot> </div>
                    <div  class="basis-1/2"  >
                        <nuxt-link to="/account">
                            <Icon name="material-symbols:person-outline" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="m-5">
                    <h1> Suche </h1>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
    const client = useSupabaseClient()
    const showMenu = ref(false)
    const toggleNavbar = () => {
        showMenu.value = !showMenu.value
    }
</script>
