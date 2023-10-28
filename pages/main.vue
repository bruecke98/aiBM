<template>
    <div class="grid grid-cols-2">
        <div class="col-span-1 border m-6 p-6">
            <h1>AI-Service or Product</h1>
            <button @click="setProjectService" class="p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">
             start AI-Service
            </button>
        </div>
        <div class="col-span-1 border m-6 p-6">
            <h1>AI-Platform</h1>
            <button @click="setProjectPlatform" class="p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">
             start AI-Platform
            </button>
        </div>
    </div>
</template>

<script setup>
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();

const setProjectPlatform = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/setPlatform/` + projectNameStore.projectName);
  navigateTo("/platform");
};

const setProjectService = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/setService/` + projectNameStore.projectName);

  navigateTo("/service");
};
</script>
