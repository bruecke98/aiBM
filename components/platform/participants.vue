
<template>
    <div class="border-2 border-gray-800 p-6 m-3 " 
            :class="{'max-h-96 overflow-auto' : big}"> 

        <div class="grid grid-cols-3"> 
            <div>
            <NuxtLink :to="`/steps/${props.participant.toLowerCase()}`" class="" :title="`Add a ${props.participant} to the Business Model`">
                <Icon name="material-symbols:add-circle" class="rounded-full hover:bg-cyan-700" />
            </NuxtLink>
            </div>
            <div class="text-2xl">
                {{ props.participant }} <button @click="big = !big" class="text-2xl">
                    <Icon v-if="big" name="material-symbols:arrow-drop-down" />
                    <Icon v-else name="material-symbols:arrow-drop-up" />
                </button>
            </div>
            <div class="text-xl">
              {{ props.data.length }}x
            </div>
            <div>
            
            </div>
        </div>
        <div class="mt-2">
            <div class="flex flex-row flex-nowrap overflow-auto">
                <div v-for="p in name"  class="flex-1 border p-2 rounded-lg m-3 bg-slate-200">
                  <span v-if="editorPrivacy[name.indexOf(p)]==='yes'">{{ p }}, </span>
                  <span v-if="orgPrivacy[name.indexOf(p)]==='yes'">{{ organization[name.indexOf(p)] }} </span>
                  
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
                <div v-for="j, i in jobMap "  class="p-2 rounded-lg flex-1 border m-3 bg-indigo-100">
                    <p > {{ i }}</p><p class="text-lg">{{ j }}x </p> <div class="text-xs">Job</div>     
                </div>
                <div v-for="j, i in  painMap "  class="p-2 rounded-lg flex-1 border m-3 bg-indigo-200">
                    <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>   
                    <div class="text-xs">Pain</div>        
                </div>
                <div v-for="j, i in gainMap"  class="p-2 rounded-lg flex-1 border m-3 bg-indigo-300">
                    <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>
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
                <div v-for="j, i in revenueMap "  class="flex-1 border p-2 rounded-lg m-3 bg-green-300">
                    <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>    
                    <div class="text-xs">Revenue Model</div>        
                </div>
                <div v-for="j, i in filterMap "  class="flex-1 border p-2 rounded-lg m-3 bg-green-200">
                    <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>     
                    <div v-if="props.participant == 'Owner'" class="text-xs">Governance</div> 
                    <div v-else class="text-xs">Filter</div>        
       
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
                    <div v-for="j, i in channelMap "  class="flex-1 border p-2 rounded-lg m-3 bg-amber-200">
                        <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>     
                    <div class="text-xs">Channel</div>        
                </div>
                <div v-if="readyMap" v-for="j, i in readyMap "  class="flex-1 border p-2 rounded-lg m-3 bg-amber-100">
                        <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>     
                    <div class="text-xs">Org. Readiness</div>        
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
                    <div v-for="j, i in resourcesMap "  class="flex-1 border p-2 rounded-lg m-3 bg-cyan-200">
                        <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>    
                    <div class="text-xs">Resources</div>        
                </div>
              
                    <div v-for="j, i in activitiesMap "  class="flex-1 border p-2 rounded-lg m-3 bg-cyan-300">
                        <p > {{ i }}</p><p class="text-lg">{{ j }}x </p>    
                    <div class="text-xs">Activities</div>        
                
                </div>

            </div>
        </div> 
        
    </div>
</template>

<script setup  >

const big = ref(false); 
const valuePropBig = ref(false);
const valueCaptureBig = ref(false);
const valueDeliveryBig = ref(false);
const valueCreationBig = ref(false);

const props = defineProps({
    participant: '',
    data: []
})

const name =  props.data.reduce((acc, curr) => {
  acc.push(curr.name )
  return acc
}, [])

const organization =  props.data.reduce((acc, curr) => {
  acc.push(curr.organization )
  return acc
}, [])

const editorPrivacy =  props.data.reduce((acc, curr) => {
  acc.push(curr.editorPrivacy )
  return acc
}, [])

const orgPrivacy =  props.data.reduce((acc, curr) => {
  acc.push(curr.orgPrivacy )
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
const ready = props.data.reduce((acc, curr) => {
  acc.push(curr.readiness)
  return acc
}, [])





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


let jobMap = {};

props.data.forEach(project => {
  project.job.forEach(jobCategory => {// Assuming job is an array and we want the first job
  if (jobMap.hasOwnProperty(jobCategory)) {
    jobMap[jobCategory]++;
  } else {
    jobMap[jobCategory] = 1;
  }
});
});

let painMap = {};

props.data.forEach(project => {
  project.pain.forEach(painCategory => { // Assuming job is an array and we want the first job
  if (painMap.hasOwnProperty(painCategory)) {
    painMap[painCategory]++;
  } else {
    painMap[painCategory] = 1;
  }
});
});

let gainMap = {};

props.data.forEach(project => {
  project.gain.forEach(gainCategory => { // Assuming job is an array and we want the first job
  if (gainMap.hasOwnProperty(gainCategory)) {
    gainMap[gainCategory]++;
  } else {
    gainMap[gainCategory] = 1;
  }
});
});

let revenueMap = {};

props.data.forEach(project => {
  project.revenue.forEach(revenueCategory => { // Assuming job is an array and we want the first job
  if (revenueMap.hasOwnProperty(revenueCategory)) {
    revenueMap[revenueCategory]++;
  } else {
    revenueMap[revenueCategory] = 1;
  }
});
});

let filterMap = {};

props.data.forEach(project => {
  project.filter.forEach(filterCategory => { // Assuming job is an array and we want the first job
  if (filterMap.hasOwnProperty(filterCategory)) {
    filterMap[filterCategory]++;
  } else {
    filterMap[filterCategory] = 1;
  }
});
});

let channelMap = {};

props.data.forEach(project => {
  project.channel.forEach(channelCategory => { // Assuming job is an array and we want the first job
  if (channelMap.hasOwnProperty(channelCategory)) {
    channelMap[channelCategory]++;
  } else {
    channelMap[channelCategory] = 1;
  }
});
});

let resourcesMap = {};

props.data.forEach(project => {
  project.resources.forEach(resourcesCategory => {
      if (resourcesMap.hasOwnProperty(resourcesCategory)) {
    resourcesMap[resourcesCategory]++;
  } else {
    resourcesMap[resourcesCategory] = 1;
  }
});
});

let activitiesMap = {};

props.data.forEach(project => {
  project.activities.forEach(activity => { // Loop through each activity in the project
    if (activitiesMap.hasOwnProperty(activity)) {
      activitiesMap[activity]++; // Increment the count if the category already exists
    } else {
      activitiesMap[activity] = 1; // Initialize a new category with a count of 1
    }
  });
});



let readyMap = {};

if(ready[0]){
    
props.data.forEach(project => {
  project.readiness.forEach(readyCategory => {
  if (readyMap.hasOwnProperty(readyCategory)) {
    readyMap[readyCategory]++;
  } else {
    readyMap[readyCategory] = 1;
  }
});
});
}



</script>