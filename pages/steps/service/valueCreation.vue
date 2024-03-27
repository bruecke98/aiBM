<template>
    <div>
        <div class="mt-12">
                <h1 class="text-2xl">value creation </h1>
                <div class="grid grid-cols-3">
                    <div class="border-r">
                       
                            <div class="border-r">
                        <h2>ai-technology</h2>
                
                    {{ checkedTechs }}

                        <div v-for="tech in techs">
                        <input class="m-2"  type="checkbox" :id="`${tech}`" @change="changeTechs(tech)"/>
                        <label class="m-1" :for="`${tech}`">{{ tech }}</label>
                        </div>


                        <input v-model="tech" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new tech"> 
                            <button @click="addToTechs" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                    
                    </div>

                    </div>
                    <div class="border-r">
                       
                        <div class="border-r">
                            <h2>data</h2>
                    
                        {{ checkedDatas }}

                            <div v-for="data in datas">
                            <input class="m-2"  type="checkbox" :id="`${data}`" @change="changeDatas(data)"/>
                            <label class="m-1" :for="`${data}`">{{ data }}</label>
                            </div>


                            <input v-model="data" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new data"> 
                                <button @click="addToDatas" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                        
                        </div>

                    </div>
                    <div class="border-r">
                        <div class="border-r">
                       
                       <div class="border-r">
                           <h2>key activities</h2>
                   
                       {{ checkedActivities }}

                           <div v-for="activitie in activities">
                           <input class="m-2"  type="checkbox" :id="`${activitie}`" @change="changeActivities(activitie)"/>
                           <label class="m-1" :for="`${activitie}`">{{ activitie }}</label>
                           </div>


                           <input v-model="activitie" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new activitie"> 
                               <button @click="addToActivities" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                       
                       </div>

                   </div>
                    </div>
                </div>
        </div>
        <button  class="mt-12 p-3 m-4 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                  @click="back"> back 
        </button>
        <button  class="mt-12 m-4 p-2 rounded-lg transition ease-in-out delay-150 bg-emerald-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                  @click="finish"> finish 
        </button>
        <button  class="mt-12 p-3 m-4 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                  @click="next"> next 
        </button>
                   
    </div>   
    </template>
    
    
<script setup>
    import { useProjectNameStore } from '~/stores/projectName';
    
    const projectNameStore = useProjectNameStore();

    const data = ref('')
    const datas = ref([
        'images', 
        'text',
        'audio', 
        'video',
        'numeric'  
    ])
    const checkedDatas = ref([])
    function addToDatas() {
    
        datas.value.push(data.value)
    }
    function changeDatas(data) {
        if (checkedDatas.value.includes(data)) {
            checkedDatas.value = checkedDatas.value.filter((g) => g !== data)
        } else {
            checkedDatas.value.push(data)
        }
    }

    const activitie = ref('')
    const activities = ref([
        'data collection', 
        'data labeling',
        'data cleaning', 
        'data augmentation',  
    ])
    const checkedActivities = ref([])
    function addToActivities() {
    
        activities.value.push(activitie.value)
    }
    function changeActivities(activitie) {
        if (checkedActivities.value.includes(activitie)) {
            checkedActivities.value = checkedActivities.value.filter((g) => g !== activitie)
        } else {
            checkedActivities.value.push(activitie)
        }
    }

    const tech = ref('')
    const techs = ref([
        'computer vision', 
        'natural language processing',
        'machine learning',
        'speech recognition', 
        'speech synthesis',  
        'robotics'
    ])
    const checkedTechs = ref([])
    function addToTechs() {
    
        techs.value.push(tech.value)
    }
    function changeTechs(tech) {
        if (checkedTechs.value.includes(tech)) {
            checkedTechs.value = checkedTechs.value.filter((g) => g !== tech)
        } else {
            checkedTechs.value.push(tech)
        }
    }

    const servicesDb = await useFetch(`/api/getService/` + projectNameStore.projectName);
    const serviceDb = servicesDb.data.value.data[0]


    for (const techc in serviceDb.tech) {
        changeTechs(serviceDb.tech[techc])
    }
    for (const datac in serviceDb.dataC) {
        changeDatas(serviceDb.dataC[datac])
    }
    for (const activitiec in serviceDb.activity) {
        changeActivities(serviceDb.activity[activitiec])
    }






    
    async function back() {
        await $fetch(`/api/setValueCreation/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                tech: checkedTechs.value,
                datas: checkedDatas.value,
                activities: checkedActivities.value
            }
        }
        );
        navigateTo("/steps/service/valueProp");
    }

    async function next() {
        await $fetch(`/api/setValueCreation/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                tech: checkedTechs.value,
                datas: checkedDatas.value,
                activities: checkedActivities.value
            }
        }
        );
        navigateTo("/steps/service/valueDelivery");
    }

    async function finish() {
        await $fetch(`/api/setValueCreation/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                tech: checkedTechs.value,
                datas: checkedDatas.value,
                activities: checkedActivities.value
            }
        }
        );
        navigateTo("/service");
    }
    
    </script>