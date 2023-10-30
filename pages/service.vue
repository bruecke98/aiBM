<template>
<h1>{{ service.name }}</h1>
<h2>{{ service.description }}</h2>
<div class="grid grid-cols-3"> 
    
    <div class="p-3 m-4 border-2 border-gray-400 rounded-lg ">
        <div class="grid grid-cols-5">
            <div >
                <button @click="navigateTo('steps/service/valueCreation')" class="hover:bg-cyan-200 border border-gray-500 p-[0.5] rounded-lg">
                    <Icon name="ic:round-mode-edit" />
                </button>
          
            </div>
            <div class="text-xl col-span-3 ">
                value creation
            </div>
        </div>
        <div class="border rounded-lg p-3 m-4 bg-cyan-100">
            
            <ServiceAibm :name="'ai-technology'" :data="service.tech"></ServiceAibm>
        </div>          
        <div class="border rounded-lg p-3 m-4  bg-cyan-200" >
            <ServiceAibm :name="'data'" :data="service.dataC"></ServiceAibm>
        </div>
        <div class="border rounded-lg p-3 m-4  bg-cyan-300">
            <ServiceAibm :name="'key activities'" :data="service.activity"></ServiceAibm>
        </div>
       
    </div>

    <div class="p-3 m-4 border-2 rounded-lg border-gray-400">
        <div class="grid grid-cols-5">
            <div >
                <button @click="navigateTo('steps/service/valueProp')" class="hover:bg-cyan-200 border border-gray-500 p-[0.5] rounded-lg">
                    <Icon name="ic:round-mode-edit" />
                </button>
          
            </div>
            <div class="text-xl col-span-3 ">
                value proposition
            </div>
        </div>
        <div class="border rounded-lg p-3 m-4  bg-indigo-100">
      
            <ServiceAibm :name="'core ai-value'" :data="service.aiValue"></ServiceAibm>

        </div>
        <div class="border rounded-lg p-3 m-4 bg-indigo-200">
         
            <ServiceAibm :name="'value promise'" :data="service.promise"></ServiceAibm>

        </div>
        <div class="border rounded-lg p-3 m-4 bg-indigo-300">
          
            <ServiceAibm :name="'key offering'" :data="service.offering"></ServiceAibm>

        </div>
    </div>
    <div class="p-3 m-4 border-2 rounded-lg border-gray-400">
        <div class="grid grid-cols-5">
            <div >
                <button @click="navigateTo('steps/service/valueDelivery')" class="hover:bg-cyan-200 border border-gray-500 p-[0.5] rounded-lg">
                    <Icon name="ic:round-mode-edit" />
                </button>
          
            </div>
            <div class="text-xl col-span-3 ">
                value delivery
            </div>
        </div>
        <div class="border rounded-lg p-3 m-4 bg-amber-100">
            
            <ServiceAibm :name="'deployment'" :data="service.deployment"></ServiceAibm>

        </div>
        <div class="border rounded-lg p-3 m-4 bg-amber-200">
            
            <ServiceAibm :name="'channel'" :data="service.channel"></ServiceAibm>

        </div>
        <div class="border rounded-lg p-3 m-4 bg-amber-300">
            
            <ServiceAibm :name="'customer'" :data="service.customer"></ServiceAibm>

        </div>
    </div>
</div>
<div class="grid grid-cols-1 p-3 m-4 border-2 rounded-lg ml-40 mr-40 border-gray-400">
    <div class="grid grid-cols-5">
            <div >
                <button @click="navigateTo('steps/service/valueCapture')" class="hover:bg-cyan-200 border border-gray-500 p-[0.5] rounded-lg">
                    <Icon name="ic:round-mode-edit" />
                </button>
            </div>
            <div class="text-xl col-span-3 ">
                value capture
            </div>
    </div>
    <div class="grid grid-cols-2">
        <div class="border rounded-lg p-3 m-4 bg-green-200">
            
            <ServiceAibm :name="'cost'" :data="service.cost"></ServiceAibm>

        </div>
        <div class="border rounded-lg p-3 m-4 bg-green-300">
            
            <ServiceAibm :name="'revenue'" :data="service.revenue"></ServiceAibm>

        </div>
    </div>
</div>
</template>

<script setup>
// get data from service table
const cookie = useCookie('projectName')

const big = ref(false); 

const serviceLoad = await useFetch(`/api/getService/` + cookie.value);
const service = serviceLoad.data.value.data[0]





</script>