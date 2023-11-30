<template>
    <div>
        <div class="mt-12">
                <h1>value delivery </h1>
                <div class="grid grid-cols-3">
                    <div class="border-r">
                       
                            <div class="border-r">
                        <h2>deployment</h2>
                
                    {{ checkedDeploys }}

                        <div v-for="deploy in deploys">
                        <input class="m-2"  type="checkbox" :id="`${deploy}`" @change="changeDeploys(deploy)"/>
                        <label class="m-1" :for="`${deploy}`">{{ deploy }}</label>
                        </div>


                        <input v-model="deploy" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new deploy"> 
                            <button @click="addToDeploys" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                    
                    </div>

                    </div>
                    <div class="border-r">
                       
                        <div class="border-r">
                            <h2>channel</h2>
                    
                        {{ checkedChannels }}

                            <div v-for="channel in channels">
                            <input class="m-2"  type="checkbox" :id="`${channel}`" @change="changeChannels(channel)"/>
                            <label class="m-1" :for="`${channel}`">{{ channel }}</label>
                            </div>


                            <input v-model="channel" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new channel"> 
                                <button @click="addToDhannels" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                        
                        </div>

                    </div>
                    <div class="border-r">
                        <div class="border-r">
                       
                       <div class="border-r">
                           <h2>customer segment</h2>
                   
                       {{ checkedCustomers }}

                           <div v-for="customer in customers">
                           <input class="m-2"  type="checkbox" :id="`${customer}`" @change="changeCustomers(customer)"/>
                           <label class="m-1" :for="`${customer}`">{{ customer }}</label>
                           </div>


                           <input v-model="customer" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new customer"> 
                               <button @click="addToCustomers" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                       
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

    const deploy = ref('')
    const deploys = ref([
        'cloud', 
        'edge',
        'on-premise', 
    ])
    const checkedDeploys = ref([])
    function addToDeploys() {
    
        deploys.value.push(deploy.value)
    }
    function changeDeploys(deploy) {
        if (checkedDeploys.value.includes(deploy)) {
            checkedDeploys.value = checkedDeploys.value.filter((g) => g !== deploy)
        } else {
            checkedDeploys.value.push(deploy)
        }
    }

    const channel = ref('')
    const channels = ref([
        'web', 
        'mobile',
        'desktop', 
        'api',  
    ])
    const checkedChannels = ref([])
    function addToChannels() {
    
        channels.value.push(channel.value)
    }
    function changeChannels(channel) {
        if (checkedChannels.value.includes(channel)) {
            checkedChannels.value = checkedChannels.value.filter((g) => g !== channel)
        } else {
            checkedChannels.value.push(channel)
        }
    }

    const customer = ref('')
    const customers = ref([
        'individual', 
        'business',
        'government', 
        'non-profit',  
    ])
    const checkedCustomers = ref([])
    function addToCustomers() {
    
        customers.value.push(customer.value)
    }
    function changeCustomers(customer) {
        if (checkedCustomers.value.includes(customer)) {
            checkedCustomers.value = checkedCustomers.value.filter((g) => g !== customer)
        } else {
            checkedCustomers.value.push(customer)
        }
    }

    const servicesDb = await useFetch(`/api/getService/` + projectNameStore.projectName);
    const serviceDb = servicesDb.data.value.data[0]


    for (const d in serviceDb.deployment) {
        // console.log(tech)
        changeDeploys(serviceDb.deployment[d])
    }
    for (const ch in serviceDb.channels) {
        changeChannels(serviceDb.channels[ch])
    }
    for (const c in serviceDb.customer) {
        changeCustomers(serviceDb.customer[c])
    }





    
    async function next() {
        await $fetch(`/api/setValueDelivery/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                deployment: checkedDeploys.value,
                channel: checkedChannels.value,
                customer: checkedCustomers.value
            }
        }
        );
        navigateTo("/steps/service/valueCapture");
    }
    async function back() {
        await $fetch(`/api/setValueDelivery/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                deployment: checkedDeploys.value,
                channel: checkedChannels.value,
                customer: checkedCustomers.value
            }
        }
        );
        navigateTo("/steps/service/valueCreation");
    }
    async function finish() {
        await $fetch(`/api/setValueDelivery/` ,
        {
            method: 'POST',
            body: {
                name: projectNameStore.projectName,
                deployment: checkedDeploys.value,
                channel: checkedChannels.value,
                customer: checkedCustomers.value
            }
        }
        );
        navigateTo("/service");
    }
    
    </script>