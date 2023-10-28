<template>
    <div class=" grid grid-cols-2">
        <div class="p-6 m-6 text-left text-2xl">
            <h1>create</h1>
            <h1>your own</h1>
            <h1>or shared</h1>
            <h1>AI-based</h1>
            <h1>Business Model</h1>
        </div>  
        <div class="text-left text-2xl m-6 p-6">
            <div class="border-2 p-5 rounded-lg">
                <h3>Existing Model </h3>
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="Project Name"
                        required
                        v-model="existingProjectName"
                    />      
                    
                    <button class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3" @click="loadExistingProject">Load</button>
            </div>

            <div class="mt-12 border-2 p-5 rounded-lg">
                <h3>Create new Model </h3>
                    <!-- <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        v-model="newProjectEmail"
                    />  -->
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="Project Name"
                        required
                        v-model="newProjectName"
                    />      
                    <button :disabled="takenName" :class="{'border-red-600' : takenName}" class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3" @click="createNewProject">Create</button>

            </div>

        </div>
    </div>
</template>

<script setup lang >
// import { NuxtLink } from '#build/components';
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();
const route = useRoute()

// import { getProject } from '@/api/supabase/getProject';

const existingProjectName = ref('');
const existingProjectID = ref(0);

const newProjectName = ref('');
const takenName = ref(false);

const { data } = await useFetch(`/api/getProject`);

const loadExistingProject = async () => {
    const { data } = await useFetch(`/api/getProject`);
    // const isTest3Included = data.value.data.some(item => item.projectName === existingProjectName.value.trim()  );
    const isTest3Included = data.value.data.some(item => {
        if (item.projectName === existingProjectName.value.trim()) {
            console.log(item); // Accessing the email property of item
            projectNameStore.setProjectName(existingProjectName.value);
            if(item.bm === "platform"){
                navigateTo("/platform");
            }else if(item.bm === "service"){
                navigateTo("/service");
            }else {
                navigateTo("/main");
            }

            return true;
        }
        return false;
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
    console.log(takenName.value);
})

const createNewProject = async () => {
  // Call the API to create a new project with the given email and name
  await useFetch(`/api/` + newProjectName.value);
  projectNameStore.setProjectName(newProjectName.value);
  navigateTo("/main");
};




</script>
