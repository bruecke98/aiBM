<template>
    <div>
        <div class="mt-12">
                <h1>value capture </h1>
                <div class="grid grid-cols-2">
                    <div class="border-r">
                       
                            <div class="border-r">
                        <h2>revenue</h2>
                
                    {{ checkedRevenues }}

                        <div v-for="revenue in revenues">
                        <input class="m-2"  type="checkbox" :id="`${revenue}`" @change="changeRevenues(revenue)"/>
                        <label class="m-1" :for="`${revenue}`">{{ revenue }}</label>
                        </div>


                        <input v-model="revenue" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new revenue"> 
                            <button @click="addToRevenues" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                    
                    </div>

                    </div>
                    <div class="border-r">
                       
                        <div class="border-r">
                            <h2>cost</h2>
                    
                        {{ checkedCosts }}

                            <div v-for="cost in costs">
                            <input class="m-2"  type="checkbox" :id="`${cost}`" @change="changeCosts(cost)"/>
                            <label class="m-1" :for="`${cost}`">{{ cost }}</label>
                            </div>


                            <input v-model="cost" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new cost"> 
                                <button @click="addToCosts" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                        
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
                   
    </div>   
    </template>
    
    
<script setup>
    import { useProjectNameStore } from '~/stores/projectName';
    const projectNameStore = useProjectNameStore();

    const revenue = ref('')
    const revenues = ref([
        'freemium',
        'subscription', 
        'pay per use',
        'pay per result', 
        'pay per time',  
        'licensing'
    ])
    const checkedRevenues = ref([])
    function addToRevenues() {
    
        revenues.value.push(revenue.value)
    }
    function changeRevenues(revenue) {
        if (checkedRevenues.value.includes(revenue)) {
            checkedRevenues.value = checkedRevenues.value.filter((g) => g !== revenue)
        } else {
            checkedRevenues.value.push(revenue)
        }
    }

    const cost = ref('')
    const costs = ref([
        'hardware', 
        'server',
        'model development',
        'model training', 
        'marketing',        
    ])
    const checkedCosts = ref([])
    function addToCosts() {
    
        costs.value.push(cost.value)
    }
    function changeCosts(cost) {
        if (checkedCosts.value.includes(cost)) {
            checkedCosts.value = checkedCosts.value.filter((g) => g !== cost)
        } else {
            checkedCosts.value.push(cost)
        }
    }



    const servicesDb = await useFetch(`/api/getService/` + projectNameStore.projectName);
    const serviceDb = servicesDb.data.value.data[0]


    for (const r in serviceDb.revenue) {
        // console.log(tech)
        changeRevenues(serviceDb.revenue[r])
    }
    for (const c in serviceDb.cost) {
        changeCosts(serviceDb.cost[c])
    }
 


    
    async function finish() {
        await $fetch(`/api/setValueCapture/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                revenue: checkedRevenues.value,
                cost: checkedCosts.value,
            }
        }
        );
        navigateTo("/service");
    }
    async function back() {
        await $fetch(`/api/setValueCapture/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                revenue: checkedRevenues.value,
                cost: checkedCosts.value,
            }
        }
        );
        navigateTo("/steps/service/valueDelivery");
    }

    
    </script>