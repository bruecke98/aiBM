<template>
    <div>
        <div>
        <h1 class="text-2xl">Customer </h1>
        <p class="text-lg mb-4">the platform buyer, user, consumer</p>

            
        </div>
        
        <div class="mt-12">
            <h1 class="text-2xl">Value Delivery </h1>
            <div class="grid grid-cols-2">
                <div class="border-r">
                    
                    <div class="border-r">
                    <h2 class="text-xl">Channel</h2>
                    <p class="p-4">Points of usage, points of access,
                    channels </p>
                    <p class="p-6 text-sm">What channels or platforms do you prefer for accessing AI services on the platform?</p>

                    <div v-for="channel in channels">
                    <input class="m-2"  type="checkbox" :id="`${channel}`" @change="changeChannel(channel)"/>
                    <label class="m-1" :for="`${channel}`">{{ channel }}</label>
                    </div>


                    <input v-model="channel" type="text" class="mt-6 p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Channel"> 
                        <button @click="addToChannels" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedChannels">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
                </div>

                <div class="grid">
                <div class="border-r">
                    
                    <div class="border-r">
                    <h2 class="text-xl">Organization readiness</h2>
                    <p class="p-4">An organization's preparedness to implement strategies and change processes to effectively deliver its ai value proposition to customers </p>
                    <p class="p-6 text-sm">How would you describe the readiness of your Company to implement ai?</p>

                    <div v-for="ready in readiness">
                    <input class="m-2"  type="checkbox" :id="`${ready}`" @change="changeReadiness(ready)"/>
                    <label class="m-1" :for="`${ready}`">{{ ready }}</label>
                    </div>


                    <input v-model="ready" type="text" class="mt-6 p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add reason"> 
                        <button @click="addToReadiness" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedReady">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
                </div>
                </div>
              
               

            </div>
        </div>

       
        <div class="mt-12">
            <button @click="save" class="text-2xl p-2 rounded-lg transition ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-cyan-800 duration-300">
             {{ cookie}}
             save
            </button>        </div>
    </div>
</template>

<script setup>

const cookie = useCookie('projectName')
const customerName = ref('');

const job = ref('')
const jobs = ref([
    'data analysis', 
    'detection',
    'prediction', 
    'classification', 
    'text generation',
    'support'
])
const checkedJobs = ref([])


function addToJobs() {
    jobs.value.push(job.value)
}

function changeJob(job) {
    if (checkedJobs.value.includes(job)) {
        checkedJobs.value = checkedJobs.value.filter((j) => j !== job)
    } else {
        checkedJobs.value.push(job)
    }
}

const gain = ref('')
const gains = ref([
    'efficiency',
    'data accuracy',
    'prediction', 
    'user friendly'
])
const checkedGains = ref([])
function addToGains() {
   
    gains.value.push(gain.value)
}
function changeGain(gain) {
    if (checkedGains.value.includes(gain)) {
        checkedGains.value = checkedGains.value.filter((g) => g !== gain)
    } else {
        checkedGains.value.push(gain)
    }
}

const pain = ref('')
const pains = ref([
    'data security', 
    'no expertise',
    'privacy concerns', 
    'resource limitations',  
    'time constraints'
])
const checkedPains = ref([])
function addToPains() {
   
    pains.value.push(pain.value)
}
function changePain(pain) {
    if (checkedPains.value.includes(pain)) {
        checkedPains.value = checkedPains.value.filter((p) => p !== pain)
    } else {
        checkedPains.value.push(pain)
    }
}

const revenue = ref('')
const revenues = ref([
    'free',
    'SaaS', 
    'per-per-use',
    'pay-with-data',
    'one-time-payment'
])
const checkedRevenues = ref([])
function addToRevenue() {  
    revenues.value.push(revenue.value)
}
function changeRevenue(revenue) {
    if (checkedRevenues.value.includes(revenue)) {
        checkedRevenues.value = checkedRevenues.value.filter((r) => r !== revenue)
    } else {
        checkedRevenues.value.push(revenue)
    }
}


const filter = ref('')
const filters = ref([
    'very important', 
    'important',
    'neutral',
    'not important',
])
const checkedFilters = ref([])
function addToFilter() {  
    filters.value.push(filter.value)
}
function changeFilter(filter) {
    if (checkedFilters.value.includes(filter)) {
        checkedFilters.value = checkedFilters.value.filter((f) => f !== filter)
    } else {
        checkedFilters.value.push(filter)
    }
}

const channel = ref('')
const channels = ref([
    'Cloud',
    'API',
    'Web',
    'App',
])
const checkedChannels = ref([])
function addToChannels() {  
    channels.value.push(channel.value)
}
function changeChannel(channel) {
    if (checkedChannels.value.includes(channel)) {
        checkedChannels.value = checkedChannels.value.filter((c) => c !== channel)
    } else {
        checkedChannels.value.push(channel)
    }
}

const resource = ref('')
const resources = ref([
    'Time', 
    'Money',
    'Data',
    'Hardware',
    'data privacy expertise'
])

const checkedResources = ref([])
const checkedResourcesCount = ref(new Map());

function addToResources() {  
    resources.value.push(resource.value)
}
function changeResources(resource) {
    if (checkedResources.value.includes(resource)) {
        let count = checkedResourcesCount.value.get(resource) || 0;
        checkedResourcesCount.value.set(resource, count + 1);
        checkedResources.value = checkedResources.value.filter((r) => r !== resource)

    } else {
        checkedResourcesCount.value.set(resource, 1);
        checkedResources.value.push(resource)
    }
}


const activitie = ref('')
const activities = ref([
    'Data Collection', 
    'Data Processing',
    'Data Analysis',
    'Data Visualization',
    'Model Training',
    'Interacting with the AI'
])
const checkedActivities = ref([])
function addToActivities() {  
    activities.value.push(activitie.value)
}
function changeActivities(activitie) {
    if (checkedActivities.value.includes(activitie)) {
        checkedActivities.value = checkedActivities.value.filter((a) => a !== activitie)
    } else {
        checkedActivities.value.push(activitie)
    }
}

const ready = ref('')
const readiness = ref([
    'very ready', 
    'full management support',
    'ready',
    'neutral',
    'not ready',
])
const checkedReady = ref([])
function addToReadiness() {  
    readiness.value.push(ready.value)
}
function changeReadiness(ready) {
    if (checkedReady.value.includes(ready)) {
        checkedReady.value = checkedReady.value.filter((r) => r !== ready)
    } else {
        checkedReady.value.push(ready)
    }
}




async function save(){
     //  save in db 
    // make sure it shows on platform
    const data = {
        project: cookie.value,
        name: customerName.value,
        jobs: checkedJobs.value,
        gains: checkedGains.value,
        pains: checkedPains.value,
    };
    await $fetch(`/api/setCustomer`, 
    {
        method: 'POST',
        body: { projectName: cookie.value, 
                name: customerName.value,
                jobs: checkedJobs.value,
                gains: checkedGains.value,
                pains: checkedPains.value,
                revenues: checkedRevenues.value,
                filters: checkedFilters.value,
                readiness: checkedReady.value,
                channels: checkedChannels.value,
                resources: checkedResources.value,
                activities: checkedActivities.value,

            },
    });

    navigateTo("/platform");
}





</script>

<style>
.o-tip__content {
  padding: 10px;
  background-color: #fff;
  width: 200px;
}
</style>