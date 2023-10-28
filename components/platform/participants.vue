
<template>
    <div class="border-2 border-gray-800 p-6 m-3 " 
            :class="{'max-h-96 overflow-auto' : big}"> 

        <div class="grid grid-cols-3"> 
            <div>
            <NuxtLink :to="`/steps/platform/${props.participant}`" class="px-2 py-1  border rounded-full bg-cyan-600 text-white mr-10 text-left text-2xl">
                +
            </NuxtLink>
            </div>
            <div class="text-2xl">
                {{ props.participant }} <button @click="big = !big" class="text-2xl">
                    <Icon v-if="big" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </div>
            <div>
            
            </div>
        </div>
        <div class="mt-2">
            <div class="flex flex-row flex-nowrap overflow-auto">
                <div v-for="p in name"  class="flex-1 border p-2 rounded-lg m-3 bg-slate-200">
 {{ p }}      
                </div>
               

            </div>
        </div>
        <div class="border-2 mt-4"> </div>
        <div class="mt-4">
            <h3 class="text-xl"> value proposition
                <button @click="valuePropBig = !valuePropBig" class="text-2xl">
                    <Icon v-if="valuePropBig" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </h3>
            <div :class="{'flex flex-row overflow-auto flex-nowrap': valuePropBig}" class="flex flex-row overflow-auto flex-wrap" >
                <div v-for="j in job2 "  class="p-2 rounded-lg flex-1 border m-3 bg-cyan-200">
                    <p>{{ j }} </p> <div class="text-xs">Job</div>     
                </div>
                <div v-for="p in pain2 "  class="p-2 rounded-lg flex-1 border m-3 bg-rose-200">
                    {{ p }}      
                    <div class="text-xs">Pain</div>        
                </div>
                <div v-for="p in gain2"  class="p-2 rounded-lg flex-1 border m-3 bg-green-200">
                    {{ p }} 
                    <div class="text-xs">Gain</div>         
                </div>

            </div>
        </div>
        <div class="mt-3">
            <h3 class="text-xl"> value capture
                <button @click="valueCaptureBig = !valueCaptureBig" class="text-2xl">
                    <Icon v-if="valueCaptureBig" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </h3>
            <div :class="{'flex flex-row overflow-auto flex-nowrap': valueCaptureBig}" class="flex flex-row overflow-auto flex-wrap" >
                <div v-for="r in revenue2 "  class="flex-1 border p-2 rounded-lg m-3 bg-emerald-300">
                    {{ r }}      
                    <div class="text-xs">Revenue Model</div>        
                </div>
                <div v-for="f in filter2 "  class="flex-1 border p-2 rounded-lg m-3 bg-amber-200">
                    {{ f }}      
                    <div class="text-xs">Filter</div>        
                </div>

            </div>
        </div> 
        <div class="mt-3">
            <h3 class="text-xl"> value delivery
                <button @click="valueDeliveryBig = !valueDeliveryBig" class="text-2xl">
                    <Icon v-if="valueDeliveryBig" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </h3>
            <div :class="{'flex flex-row overflow-auto flex-nowrap': valueDeliveryBig}" class="flex flex-row overflow-auto flex-wrap" >
                    <div v-for="ch in channel2 "  class="flex-1 border p-2 rounded-lg m-3 bg-purple-200">
                    {{ ch }}      
                    <div class="text-xs">Channel</div>        
                </div>
               
            </div>
        </div> 
        <div class="mt-3">
            <h3 class="text-xl"> value creation
                <button @click="valueCreationBig = !valueCreationBig" class="text-2xl">
                    <Icon v-if="valueCreationBig" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </h3>
            <div :class="{'flex flex-row overflow-auto flex-nowrap': valueCreationBig}" class="flex flex-row overflow-auto flex-wrap" >
                    <div v-for="r in resources2 "  class="flex-1 border p-2 rounded-lg m-3 bg-teal-200">
                    {{ r }}      
                    <div class="text-xs">Resources</div>        
                </div>
              
                <div class="flex flex-row flex-nowrap overflow-auto">
                    <div v-for="a in activities2 "  class="flex-1 border p-2 rounded-lg m-3 bg-sky-200">
                    {{ a }}      
                    <div class="text-xs">Activities</div>        
                </div>
                </div>

            </div>
        </div> 
        
    </div>
</template>

<script setup lang="ts" >

const big = ref(false); 
const valuePropBig = ref(false);
const valueCaptureBig = ref(false);
const valueDeliveryBig = ref(false);
const valueCreationBig = ref(false);

const props = defineProps<{
    participant: string;
    data: []
}>()

const name =  props.data.reduce((acc, curr) => {
  acc.push(curr.name)
  return acc
}, [])

const job = props.data.reduce((acc, curr) => {
  acc.push(curr.job)
  return acc
}, [])
const pain = props.data.reduce((acc, curr) => {
  acc.push(curr.pain)
  return acc
}, [])
const gain = props.data.reduce((acc, curr) => {
  acc.push(curr.gain)
  return acc
}, [])
const revenue = props.data.reduce((acc, curr) => {
  acc.push(curr.revenue)
  return acc
}, [])
const filter = props.data.reduce((acc, curr) => {
  acc.push(curr.filter)
  return acc
}, [])
const channel = props.data.reduce((acc, curr) => {
  acc.push(curr.channel)
  return acc
}, [])
const resources = props.data.reduce((acc, curr) => {
  acc.push(curr.resources)
  return acc
}, [])
const activities = props.data.reduce((acc, curr) => {
  acc.push(curr.activities)
  return acc
}, [])


console.log(job)
const job2 = []
for(const jo in job){
    for (const j in job[jo]){
        if (!job2.includes(job[jo][j])) {
            job2.push(job[jo][j])
        }
    }
}

const pain2 = []
for(const jo in pain){
    for (const j in pain[jo]){
        if (!pain2.includes(pain[jo][j])) {
            pain2.push(pain[jo][j])
        }
    }
}

const gain2 = []
for(const jo in gain){
    for (const j in gain[jo]){
        if (!gain2.includes(gain[jo][j])) {
            gain2.push(gain[jo][j])
        }
    }
}

const revenue2 = []
for(const jo in revenue){
    for (const j in revenue[jo]){
        if (!revenue2.includes(revenue[jo][j])) {
            revenue2.push(revenue[jo][j])
        }
    }
}

const filter2 = []
for(const jo in filter){
    for (const j in filter[jo]){
        if (!filter2.includes(filter[jo][j])) {
            filter2.push(filter[jo][j])
        }
    }
}

const channel2 = []
for(const jo in channel){
    for (const j in channel[jo]){
        if (!channel2.includes(channel[jo][j])) {
            channel2.push(channel[jo][j])
        }
    }
}

const resources2 = []
for(const jo in resources){
    for (const j in resources[jo]){
        if (!resources2.includes(resources[jo][j])) {
            resources2.push(resources[jo][j])
        }
    }
}

const activities2 = []
for(const jo in activities){
    for (const j in activities[jo]){
        if (!activities2.includes(activities[jo][j])) {
            activities2.push(activities[jo][j])
        }
    }
}




</script>