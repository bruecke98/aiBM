<template>
   <h1 class="mt-12">Which Business Model do you want to develop?</h1>
    <div class="grid grid-cols-2">
     
        <div class="col-span-1 border-2 border-gray-500 rounded-lg m-6 p-6">
            <h1>ai-service or product</h1>
            
            <div class="text-xl">
              <img src="../assets/img/service.png" alt="service" class="w-1/2 mx-auto">
              <div class="mt-12 text-xl border border-cyan-300 p-4 rounded-lg">a business relying on ai and data as a key resource
              </div><br>

              <div class="grid grid-cols-3">
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label=" Leverages AI for rapid experimentation, hypothesis testing, and innovation, sometimes in near real-time.">
                    <p> Innovation </p>
                  </o-tooltip>
                </div>
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label="Can scale rapidly with fewer marginal costs as AI systems handle increased loads without necessarily adding staff or infrastructure.">
                    <p>Scalability</p>
                  </o-tooltip>
                </div>
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label="Relies on big data and real-time analytics for predictive insights and proactive strategy adjustments.">
                    <p>Data Utilization</p>
                  </o-tooltip>
                </div>
              </div>
              
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
              <div class="grid grid-cols-3">
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label="Success is heavily influenced by network effects; the platform becomes more valuable as more users join.">
                    <p> Network Effects</p>
                  </o-tooltip>
                </div>
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label="Can scale rapidly with relatively low incremental cost per additional user.">
                    <p>Scalability</p>
                  </o-tooltip>
                </div>
                <div class="border rounded-lg mx-1">
                  <o-tooltip multiline class="" label="Minimal ownership of physical assets; the emphasis is on intellectual property and the user community.">
                    <p>Asset Ownership</p>
                  </o-tooltip>
                </div>
              </div>
            


            </div>
            <button @click="setProjectPlatform" class=" mt-6 p-3 rounded-lg transition ease-in-out delay-150 bg-emerald-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-emerald-800 duration-300">
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


<style>
.o-tip__content {
  padding: 10px;
  background-color: #fff;
  width: 200px;
}
</style>