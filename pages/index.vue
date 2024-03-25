<template>
    <div class=" grid grid-cols-2">
        <div class="p-6 m-6 text-left ml-60 text-2xl">
            <h1>lets create a</h1>
            <h1><span class="bg-cyan-200 rounded-lg px-1">business model</span></h1>

            <h1>for</h1>
            <h1><span class="bg-green-200 rounded-lg px-1">SPELL</span></h1>
          
        </div>  
        <div class="text-left text-2xl mt-40 m-6 p-6">
            <div class="border-2 p-5 rounded-lg">
                <h3>work on the SPELL-Business Model </h3>
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="password"
                        required
                        v-model="password"
                    />      
                    
                    <button class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3" @click="loadExistingProject">load</button>
            </div>

            

        </div>
    </div>

    <div class="w-1/2 mx-auto mt-24 ">
        <h1>Explaination </h1>  
        <h2 class="text-2xl p-2"> 1. Step </h2>
        <p class="text-lg mb-4"> First, log in using the password you received in the email. </p>
        <h2 class="text-2xl p-2"> 2. Step </h2>
        <p class="text-lg mb-4"> Identify the role that best describes your association with the SPELL-Platform. You could be a Supplier, Customer, Owner, or Partner. More details on these roles will be provided subsequently. Click the <Icon name="material-symbols:add-circle" class="mb-1" size="24px"/> button to get to the questionaare.
        </p>
        <h2 class="text-2xl p-2"> 3. Step </h2>
        <p class="text-lg mb-4"> Follow the Step-by-Step Questionairre. Complete the step-by-step questionnaire to the best of your knowledge. After answering the questions, click <span class=" p-1 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">next</span>  to proceed. If you encounter the <span class="whitespace-nowrap p-1 rounded-lg transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-green-400 duration-300">SPELL-Platform save</span> button, review your answers carefully before saving. Once saved, you cannot modify your responses. If you are unsure about an answer, you may leave the field blank.
          
        <h2 class="text-2xl p-2">4. Step</h2>
        <p class="text-lg mb-4"> Your entries in the Business Model will be visible immediately, and you will be able to see how others have responded. At the bottom of the page, you will find some interesting statistics. If you wish to add a comment or feedback, please use the comment section located directly below the business model. </p>
        </p>
        <p class="text-lg mb-4"> For any questions, do not hesitate to contact merve.turan_akdag@tu-darmstadt.de.</p>

        <h2 class="text-2xl p-2"> Thank you for your participation. Further information will be provided by TU Darmstadt. </h2>
    </div>
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
            existingProjectName.value = 'SPELL-Platform';
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




</script>
