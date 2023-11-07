<template>
   <h1 class="mt-12">Which Business Model do you want to develop?</h1>
    <div class="grid grid-cols-2">
     
        <div class="col-span-1 border-2 border-gray-500 rounded-lg m-6 p-6">
            <h1>ai-service or product</h1>
            
            <div class="text-xl">
              <img src="../assets/img/service.png" alt="service" class="w-1/2 mx-auto">
              <div class="mt-12 text-xl border border-cyan-300 p-4 rounded-lg">a business relying on ai and data as a key resource
              </div><br>
              
            </div>
            
            <button @click="setProjectService" class="mt-4 p-3 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">
             start ai-service
            </button>
        </div>
        <div class="col-span-1 border-2 border-gray-500 rounded-lg m-6 p-6">
            <h1>ai-platform</h1>
            <div class="text-xl">
              <img src="../assets/img/platform.png" alt="service" class="w-1/2 mx-auto">

              <div class="mt-8 text-xl border border-emerald-300 p-4 rounded-lg">platforms are business models that connect producers and consumers directly
              </div><br>
            


            </div>
            <button @click="setProjectPlatform" class=" mt-4 p-3 rounded-lg transition ease-in-out delay-150 bg-emerald-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-emerald-800 duration-300">
             start ai-platform
            </button>
        </div>
    </div>
</template>

<script setup>
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();
const cookie = useCookie('projectName')


const setProjectPlatform = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/setPlatform/` + projectNameStore.projectName);
  navigateTo("/platform");
};

const setProjectService = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/setService/` + projectNameStore.projectName);

  navigateTo("steps/service");
};
</script>
