<template>
    <div>
        <div>
        <h1>Customer </h1>
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
                    <h2 class="text-xl">Job</h2>
                    <p class="p-4">Tasks of the user that the platform
                    helps to perform. Needs of the user
                    that the platform helps to meet.</p>
                    <p class="p-6 text-sm">
                        How does the AI platform address your specific tasks,needs or challenges?
                    </p>
               

                

                    <div v-for="job in jobs">
                    <input class="m-2"  type="checkbox" :id="`${job}`" @change="changeJob(job)"/>
                    <label class="m-1" :for="`${job}`">{{ job }}</label>
                    </div>


                    <input v-model="job" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new job"> 
                    <button @click="addToJobs" class="mb-6 p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                    <div class="m-1"  v-for="j in checkedJobs">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
                   
                </div>
                <div class="border-r">
                    <h2 class="text-xl">Gain</h2>
                    <p class="p-4">Positive effects related to the job
                    and need that are enhanced by the
                    platform</p>
                    <p class="p-6 text-sm"> What benefits or improvements do you expect from using the AI platform?</p>
               
              

                    <div v-for="gain in gains">
                    <input class="m-2"  type="checkbox" :id="`${gain}`" @change="changeGain(gain)"/>
                    <label class="m-1" :for="`${gain}`">{{ gain }}</label>
                    </div>


                    <input v-model="gain" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new gain"> 
                        <button @click="addToGains" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>
                    <div class="m-1"  v-for="j in checkedGains">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
                   
                </div>
                <div class="border-r">
                    <h2 class="text-xl">Pain</h2>
                    <p class="p-4">Problems, dangers and barriers,
                        related to the job done or the need
                        met that the platform reduces,
                        eliminates, solves </p>
                        <p class="p-6 text-sm">What specific challenges or barriers do you experience that the AI platform is designed to overcome?</p>

                    <div v-for="pain in pains">
                    <input class="m-2"  type="checkbox" :id="`${pain}`" @change="changePain(pain)"/>
                    <label class="m-1" :for="`${pain}`">{{ pain }}</label>
                    </div>


                    <input v-model="pain" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new pain"> 
                        <button @click="addToPains" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedPains">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Capture </h1>
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
                    <label class="m-1" :for="`${revenue}`">{{ revenue }}</label>
                    </div>


                    <input v-model="revenue" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new revenue Model"> 
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


                    <input v-model="filter" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Filter"> 
                        <button @click="addToFilter" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedFilters">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
                

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Delivery </h1>
            <div class="grid">
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


                    <input v-model="channel" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Channel"> 
                        <button @click="addToChannels" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedChannels">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
                </div>
              
               

            </div>
        </div>

        <div class="mt-12">
            <h1>Value Creation </h1>
            <div class="grid grid-cols-2">
                
                <div class="border-r">
                    <h2 class="text-xl">Resources</h2>
                    <p class="p-4"> Resources, knowhow, expertise,
                    technology that users must invest,
                    to be able to use the platform</p>
                    <p class="p-6 text-sm">What resources are you willing to invest in AI interactions?</p>
        

                    <div v-for="resource in resources">
                    <input class="m-2"  type="checkbox" :id="`${resource}`" @change="changeResources(resource)"/>
                    <label class="m-1" :for="`${resource}`">{{ resource }}</label>
                    </div>


                    <input v-model="resource" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Resource"> 
                        <button @click="addToResources" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedResources">
                        <p class="border p-1 text-xs"> {{ j }}</p>
                    </div>
 
                </div>
              
                <div class="border-r">
                    <h2 class="text-xl">Activities</h2>
                    <p class="p-4">Key activities that users perform on
                    a platform to finish job or meet
                    need </p>
                    <p class="p-6 text-sm">In what ways are you actively involved in the AI Platform?</p>
                 

                    <div v-for="activitie in activities">
                    <input class="m-2"  type="checkbox" :id="`${activitie}`" @change="changeActivities(activitie)"/>
                    <label class="m-1" :for="`${activitie}`">{{ activitie }}</label>
                    </div>


                    <input v-model="activitie" type="text" class="p-1 w-1/2 border-2 border-gray-500 rounded-lg" placeholder="add new Activitie"> 
                        <button @click="addToActivities" class="p-2 border m-1 rounded-lg hover:bg-cyan-200"> add </button>

                        <div class="m-1"  v-for="j in checkedActivities">
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
    'saas', 
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
    'High Value', 
    'Low Value',
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
                channels: checkedChannels.value,
                resources: checkedResources.value,
                activities: checkedActivities.value,

            },
    });

    navigateTo("/platform");
}





</script>