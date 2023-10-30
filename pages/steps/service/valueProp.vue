<template>
    <div>
        <div class="mt-12">
                <h1>value proposition </h1> {{ projectNameStore.projectName  }}
                <div class="grid grid-cols-3">
                    <div class="border-r">
                       
                            <div class="border-r">
                        <h2>core ai-value</h2>
                
                    {{ checkedValues }}

                        <div v-for="value in values">
                        <input class="m-2"  type="checkbox" :id="`${value}`" @change="changeValues(value)"/>
                        <label class="m-1" :for="`${value}`">{{ value }}</label>
                        </div>


                        <input v-model="value" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new value"> 
                            <button @click="addToValues" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                    
                    </div>

                    </div>
                    <div class="border-r">
                       
                        <div class="border-r">
                            <h2>value promise</h2>
                    
                        {{ checkedPromise }}

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
                           <h2>key offering</h2>
                   
                       {{ checkedOffering }}

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
    
        <button  class="mt-12 m-4 p-2 rounded-lg transition ease-in-out delay-150 bg-emerald-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                  @click="finish"> finish 
        </button>
        <button  class="mt-12 m-4 p-4 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300"
                  @click="next"> next 
        </button>
                   
    </div>   
    </template>
    
    
<script setup>
    import { useProjectNameStore } from '~/stores/projectName';
    const projectNameStore = useProjectNameStore();

    const value = ref('')
    const values = ref([
        'easy to use', 
        'detection',
        'prediction', 
        'classification',  
    ])
    const checkedValues = ref([])
    function addToValues() {
    
        values.value.push(value.value)
    }
    function changeValues(value) {
        if (checkedValues.value.includes(value)) {
            checkedValues.value = checkedValues.value.filter((g) => g !== value)
        } else {
            checkedValues.value.push(value)
        }
    }

    const data = ref('')
    const datas = ref([
        'images', 
        'text',
        'audio', 
        'video',  
    ])
    const checkedPromise = ref([])
    function addToDatas() {
    
        datas.value.push(data.value)
    }
    function changeDatas(data) {
        if (checkedPromise.value.includes(data)) {
            checkedPromise.value = checkedPromise.value.filter((g) => g !== data)
        } else {
            checkedPromise.value.push(data)
        }
    }

    const activitie = ref('')
    const activities = ref([
        'data collection', 
        'data labeling',
        'data cleaning', 
        'data augmentation',  
    ])
    const checkedOffering = ref([])
    function addToActivities() {
    
        activities.value.push(activitie.value)
    }
    function changeActivities(activitie) {
        if (checkedOffering.value.includes(activitie)) {
            checkedOffering.value = checkedOffering.value.filter((g) => g !== activitie)
        } else {
            checkedOffering.value.push(activitie)
        }
    }

    const servicesDb = await useFetch(`/api/getService/` + projectNameStore.projectName);
    const serviceDb = servicesDb.data.value.data[0]


    for (const v in serviceDb.aiValue) {
        // console.log(tech)
        changeValues(serviceDb.aiValue[v])
    }
    for (const p in serviceDb.promise) {
        changeDatas(serviceDb.promise[p])
    }
    for (const o in serviceDb.offering) {
        changeActivities(serviceDb.offering[o])
    }






    
    async function next() {
        await $fetch(`/api/setValueProp/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                aiValue: checkedValues.value,
                promise: checkedPromise.value,
                offering: checkedOffering.value
            }
        }
        );
        navigateTo("/steps/service/valueCreation");
    }
    async function finish() {
        await $fetch(`/api/setValueProp/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                aiValue: checkedValues.value,
                promise: checkedPromise.value,
                offering: checkedOffering.value
            }
        }
        );
        navigateTo("/service");
    }
    
    </script>