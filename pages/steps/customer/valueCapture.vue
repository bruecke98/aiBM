<template>
    <div>
        <div>
        <h1 class="text-2xl">Customer </h1>
        <p class="text-lg mb-4">the platform buyer, user, consumer</p>

            
        </div>
        

        <div class="mt-12">
            <h1 class="text-2xl">Value Capture </h1>
            <div class="grid grid-cols-2">
                <div class="border-r">
                    <h2 class="text-xl">Revenue Model</h2>
                    <p class="p-4">
                        The revenue model dimension depicts how the BM generates revenue in order to cover costs and
                        thrive as an organization
                    </p>
                    <p class="p-6 text-sm"> Which Revenue Model seems fitting for you? </p>

                    <div v-for="revenue in revenues">
                        <input class="m-2"  type="checkbox" :id="`${revenue}`" @change="changeRevenue(revenue)"/>
                        <o-tooltip v-if="revenue==='SaaS'" multiline class="" label="Software as a Service (SaaS) is a distribution model where applications are hosted by a service provider and made available to customers over the internet, typically on a subscription basis.">
                            <label class="m-1" :for="`${revenue}`">{{ revenue }}</label>
                        </o-tooltip>   
                        <label v-else class="m-1" :for="`${revenue}`">{{ revenue }}</label>
                    </div>


                    <input v-model="revenue" type="text" class="mt-6 p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new revenue Model"> 
                        <button @click="addToRevenue" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedRevenues">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
              
                
                <div class="border-r">
                    <h2 class="text-xl">Filter</h2>
                    <p class="p-4">
                        The removal of access barriers, as
                        well as the implementation of
                        dedicated filters, like needed
                        qualifications, to limit or rule out
                        access for specific users
                    </p>
                    <p class="p-6 text-sm"> How important is it for you to have control over who can access your data or interact with you through AI platforms?</p>

                    <div v-for="filter in filters">
                    <input class="m-2"  type="checkbox" :id="`${filter}`" @change="changeFilter(filter)"/>
                    <label class="m-1" :for="`${filter}`">{{ filter }}</label>
                    </div>


                    <input v-model="filter" type="text" class="mt-6 p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add reason"> 
                        <button @click="addToFilter" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedFilters">
                        <p class="border p-1 text-xs"> {{ j }}</p>
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