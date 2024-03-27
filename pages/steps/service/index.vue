<template>
<div>
    <div>
        <h1 class="text-2xl">Name </h1>
            <input 
                class=" w-1/4 rounded border-2 border-cyan-500 py-1 px-3"
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Name of Product or Service"
                required
                v-model="name"
                />  
    </div>
    <div>
        <h1 class="text-2xl">Description </h1>
            <input 
                class=" w-1/4 rounded border-2 border-cyan-500 py-1 px-3"
                type="text"
                id="projectDes"
                name="projectDes"
                placeholder="Description of Product or Service"
                required
                v-model="descripion"
                />  
    </div>
    <div class="mt-12">
            <h1 class="text-2xl">Type </h1>
            <div class="grid grid-cols-3 ">
                <div class="border-r p-4 m-4 rounded-lg  "  
                     :class="{'bg-green-100' : serviceBg}">
                    <p>AI-Service</p>
                    <button  class="mt-6 p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                            @click="typeBM('ai-service')"> select </button>
                </div>
                <div class="border-r p-4 m-4 rounded-lg"
                    :class="{'bg-green-100' : productBg}">
                    <p>AI-Product</p>
                    <button  class="mt-6 p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                            @click="typeBM('ai-product')"> select </button>
                </div>
                <div class="border-r p-4 m-4 rounded-lg"
                    :class="{'bg-green-100' : researchBg}">
                    <p>AI-Research</p>
                    <button  class="mt-6 p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                            @click="typeBM('ai-research')"> select </button>
                </div>
            </div>
    </div>

    <button  class="mt-6 p-4 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
              @click="next"> next 
    </button>
               
</div>   
</template>


<script setup>
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();
const name = ref('');
const descripion = ref('');
const selectArray = ref([]);
const serviceBg = ref(false);
const productBg = ref(false);
const researchBg = ref(false);

function typeBM(type) {
    const index = selectArray.value.indexOf(type);
    if (index !== -1) {
        selectArray.value.splice(index, 1);
    } else {
        selectArray.value.push(type);
    }

    switch (type) {
        case 'ai-service':
            serviceBg.value = !serviceBg.value;
            break;
        case 'ai-product':
            productBg.value = !productBg.value;
            break;
        case 'ai-research':
            researchBg.value = !researchBg.value;
            break;
    }

}

async function next() {
    await $fetch(`/api/setType/` ,
    {
        method: 'POST',
        body: {
            project: projectNameStore.projectName,
            name: name.value,
            type: selectArray.value,
            description: descripion.value
        }
    }
    );
    navigateTo("/steps/service/valueProp");
}

</script>