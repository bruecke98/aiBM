<template>
    <div class="xl:grid grid-cols-2">
        <div class="p-6 m-6 xl:text-left xl:ml-32 2xl:ml-60 md:text-xl xl:text-2xl">
            <h1 class="text-3xl">lets create a</h1>
            <h1 class="text-4xl"><span class="bg-cyan-200 rounded-lg px-1">business model</span></h1>
            <h1 class="text-3xl">for</h1>
            <h1 class="text-4xl"><span class="bg-green-200 rounded-lg px-1">SPELL</span></h1>
        </div>
        <div class="text-left text-2xl mt-16 xl:mt-40 m-6 p-6">
            <div class="border-2 p-5 rounded-lg">
                <h3>work on the SPELL-Business Model </h3>
                <input class="mt-6 w-3/4 rounded border border-light-text py-1 px-3" type="text" id="projectName"
                    name="projectName" placeholder="password" required v-model="password" />

                <button class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3 bg-cyan-100 hover:bg-cyan-400 transition-colors"
                    @click="loadExistingProject">load</button>
            </div>
        </div>
    </div>

    <!-- <button @click="newProject"> new Project </button> -->

    <Explanation />



</template>

<script setup lang >
// import { NuxtLink } from '#build/components';
import { useProjectNameStore } from '~/stores/projectName';

const cookie = useCookie('projectName');
const projectNameStore = useProjectNameStore();
const route = useRoute()
const config = useRuntimeConfig(); 

// import { getProject } from '@/api/supabase/getProject';
const password = ref('');
const existingProjectName = ref('');
const existingProjectID = ref(0);

const newProjectName = ref('');
const takenName = ref(false);

const { data } = await useFetch(`/api/getProject`);

const loadExistingProject = async () => {
    const { data } = await useFetch(`/api/getProject`);
    // const isTest3Included = data.value.data.some(item => item.projectName === existingProjectName.value.trim()  );
    const isTest3Included = data.value.data.some(item => {
        if (password.value === config.public.password) {
            existingProjectName.value = 'SPELL-BM';
            projectNameStore.setProjectName(existingProjectName.value);
            cookie.value = existingProjectName.value;
            // setCookie('projectName', existingProjectName.value);
            if(item.bm === "platform"){
                navigateTo("/platform");
            }else if(item.bm === "service"){
                navigateTo("/service");
            }else {
                navigateTo("/main");
            }

            return true;
        }else{
            return false;
        }
     a
    });
}



watch(newProjectName, () => {
  // Check if the project name is already taken
   takenName.value = data.value.data.some(item => {
        if (item.projectName === newProjectName.value.trim()) {
            return true;
        }
        return false;
    });
})

const createNewProject = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/` + newProjectName.value);
  projectNameStore.setProjectName(newProjectName.value);
  cookie.value = newProjectName.value;
  navigateTo("/main");
};

const newProject = () => {
  // Check if the project name is already taken
  newProjectName.value = 'SPELL-BM';
  createNewProject();
};  





</script>
