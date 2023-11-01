<template>
    <div class="grid grid-cols-2">
        <div class="col-span-1 border m-6 p-6">
            <h1>ai-service or product</h1>
            <div class="text-xl">
              <div class="text-xl border border-cyan-300 p-4 rounded-lg">a business relying on ai as a key resource
              </div><br>
              <div class="text-xl border border-cyan-300 p-4 rounded-lg">rely on Machine Learning as self-improving technology to draw applicable patterns from the data   
              </div><br>
              <div class="text-xl border border-cyan-300 p-4 rounded-lg">ai business case typically includes a description of the application that sets out how the organization is going to use it, what data is going to be required, and the existence of an AI expert to identify which algorithm to use
              </div><br>
            </div>
            
            <button @click="setProjectService" class="mt-4 p-3 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">
             start ai-service
            </button>
        </div>
        <div class="col-span-1 border m-6 p-6">
            <h1>ai-platform</h1>
            <div class="text-xl">
              <div class="text-xl border border-emerald-300 p-4 rounded-lg">platforms are unique business models that organise the supply chain differently from traditional companies
              </div><br>
              <div class="text-xl border border-emerald-300 p-4 rounded-lg">platform-based business models aim for the generation of Big Data from entire value chains or ecosystems
              </div><br>
              <div class="text-xl border border-emerald-300 p-4 rounded-lg">on a platform, the assets are not the property of the platform owner. By using AI, it is possible to assess resources by the users of the resources
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
