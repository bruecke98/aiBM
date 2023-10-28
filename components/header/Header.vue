<template>
   
    <div class="grid grid-cols-2 sticky top-2 bg-cyan-800 h-10 p-1 m-2 rounded-md">
        <!-- Logo -->
            <div>
                <nuxt-link to="/" class="text-gray-200 text-3xl">
                    AI-BM
                </nuxt-link>
            </div>
            <div class="text-xl text-gray-200">
               
                    {{ name }}
                
            </div>
                
           
    </div>
    
</template>

<script setup>
import { useProjectNameStore } from '~/stores/projectName';

const projectNameStore = useProjectNameStore();

const name = computed(() => {
  return projectNameStore.projectName;
});
</script>
