<template>
    <div>
        <div>
        <h1>Supplier </h1>
            <input 
                            class=" w-1/4 rounded border-2 border-cyan-500 py-1 px-3"
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Name of Organization"
                            required
                            v-model="customerName"
                        />  
        </div>
        <div class="mt-12">
            <h1>Value Proposition </h1>
            <div class="grid grid-cols-3">
                <div class="border-r">
                    <h2>Job</h2>
               
                  {{ checkedJobs }}

                    <div v-for="job in jobs">
                    <input class="m-2"  type="checkbox" :id="`${job}`" @change="changeJob(job)"/>
                    <label class="m-1" :for="`${job}`">{{ job }}</label>
                    </div>


                    <input v-model="job" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new job"> 
                        <button @click="addToJobs" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                   
                </div>
                <div class="border-r">
                    <h2>Gain</h2>
               
                  {{ checkedGains }}

                    <div v-for="gain in gains">
                    <input class="m-2"  type="checkbox" :id="`${gain}`" @change="changeGain(gain)"/>
                    <label class="m-1" :for="`${gain}`">{{ gain }}</label>
                    </div>


                    <input v-model="gain" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new gain"> 
                        <button @click="addToGains" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                   
                </div>
                <div class="border-r">
                    <h2>Pain</h2>
               
                  {{ checkedPains }}

                    <div v-for="pain in pains">
                    <input class="m-2"  type="checkbox" :id="`${pain}`" @change="changePain(pain)"/>
                    <label class="m-1" :for="`${pain}`">{{ pain }}</label>
                    </div>


                    <input v-model="pain" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new pain"> 
                        <button @click="addToPains" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
                </div>

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Capture </h1>
            <div class="grid grid-cols-2">
                <div class="border-r">
                    <h2>Revenue Model</h2>
               
                  {{ checkedRevenues }}

                    <div v-for="revenue in revenues">
                    <input class="m-2"  type="checkbox" :id="`${revenue}`" @change="changeRevenue(revenue)"/>
                    <label class="m-1" :for="`${revenue}`">{{ revenue }}</label>
                    </div>


                    <input v-model="revenue" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new revenue Model"> 
                        <button @click="addToRevenue" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
                </div>
              
                
                <div class="border-r">
                    <h2>Filter</h2>
               
                  {{ checkedFilters }}

                    <div v-for="filter in filters">
                    <input class="m-2"  type="checkbox" :id="`${filter}`" @change="changeFilter(filter)"/>
                    <label class="m-1" :for="`${filter}`">{{ filter }}</label>
                    </div>


                    <input v-model="filter" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Filter"> 
                        <button @click="addToFilter" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
                </div>
                

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Delivery </h1>
            <div class="grid">
                <div class="border-r">
                    
                    <div class="border-r">
                    <h2>Channel</h2>
               
                  {{ checkedChannels }}

                    <div v-for="channel in channels">
                    <input class="m-2"  type="checkbox" :id="`${channel}`" @change="changeChannel(channel)"/>
                    <label class="m-1" :for="`${channel}`">{{ channel }}</label>
                    </div>


                    <input v-model="channel" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Channel"> 
                        <button @click="addToChannels" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
                </div>
                </div>
              
               

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Creation </h1>
            <div class="grid grid-cols-2">
                    
                <div class="border-r">
                    <h2>Resources</h2>
               
                  {{ checkedResources }}

                    <div v-for="resource in resources">
                    <input class="m-2"  type="checkbox" :id="`${resource}`" @change="changeResources(resource)"/>
                    <label class="m-1" :for="`${resource}`">{{ resource }}</label>
                    </div>


                    <input v-model="resource" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Resource"> 
                        <button @click="addToResources" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
                </div>
              
                <div class="border-r">
                    <h2>Activities</h2>
               
                  {{ checkedActivities }}

                    <div v-for="activitie in activities">
                    <input class="m-2"  type="checkbox" :id="`${activitie}`" @change="changeActivities(activitie)"/>
                    <label class="m-1" :for="`${activitie}`">{{ activitie }}</label>
                    </div>


                    <input v-model="activitie" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Activitie"> 
                        <button @click="addToActivities" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

 
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

const cookie = useCookie('projectName');

const customerName = ref('');

const job = ref('')
const jobs = ref([
    'easy to use', 
    'detection',
    'prediction', 
    'classification',  
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
    'easy to use', 
    'detection',
    'prediction', 
    'classification',  
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
    'easy to use', 
    'detection',
    'prediction', 
    'classification',  
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
    'saas', 
    'pay-per-data',
    'per-per-use',
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
    'High Value', 
    'Low Value',
    'No opinion'
])
const checkedFilters = ref([])
function addTofilter() {  
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
    'On-Edge', 
    'Cloud',
    'Plug-in'
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
])
const checkedResources = ref([])
function addToResources() {  
    resources.value.push(resource.value)
}
function changeResources(resource) {
    if (checkedResources.value.includes(resource)) {
        checkedResources.value = checkedResources.value.filter((r) => r !== resource)
    } else {
        checkedResources.value.push(resource)
    }
}

const activitie = ref('')
const activities = ref([
    'Data Collection', 
    'Data Processing',
    'Data Analysis',
    'Data Visualization',
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
    await $fetch(`/api/setSupplier`, 
    {
        method: 'POST',
        body: { projectName: cookie.value, 
                name: customerName.value,
                jobs: checkedJobs.value,
                gains: checkedGains.value,
                pains: checkedPains.value,
                revenues: checkedRevenues.value,
                filters: checkedFilters.value,
                channels: checkedChannels.value,
                resources: checkedResources.value,
                activities: checkedActivities.value,
                
            },
    });

    navigateTo("/platform");

}





</script>