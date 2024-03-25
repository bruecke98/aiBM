<template>

  <div>
    <h1> Create new Entry </h1>
    <h2 class="text-2xl mb-2"> in which role do you see yourself? </h2>
    <div class="grid grid-cols-4 text-xl">
      <div class="border rounded-md m-2 group">
        <div class="grid grid-cols-3">
          <div></div>
          <div><h1 class="text-2xl">Customer</h1></div>
          <div>
            <NuxtLink :to="`/steps/customer`" class="mt-4" title="Add a Customer to the Business Model">
                  <Icon name="material-symbols:add-circle" class="rounded-full group-hover:bg-cyan-300 hover:scale-110 mt-5" />
            </NuxtLink>
          </div>
        </div>
        <div class="text-md p-4 hidden text-xs group-hover:block group-hover:text-base transition-all duration-500">
          An entity or individual who uses the services offered by the platform. They may be emergency management organizations or other entities seeking decision support through AI.
        </div>
      </div>
      <div class="border rounded-md m-2 group">
        <div class="grid grid-cols-3">
          <div></div>
          <div><h1 class="text-2xl">Owner</h1></div>
          <div>
            <NuxtLink :to="`/steps/owner`" class="mt-4" title="Add a Owner to the Business Model">
                  <Icon name="material-symbols:add-circle" class="rounded-full group-hover:bg-cyan-300 hover:scale-110 mt-5" />
            </NuxtLink>
          </div>
        </div>
        <div class="text-md p-4 hidden text-xs group-hover:block group-hover:text-base transition-all duration-500">
          The group that holds the proprietary rights or has the overarching control and responsibility for the platform.
        </div>
      </div>
       
      <div class="border rounded-md m-2 group">
        <div class="grid grid-cols-3">
          <div></div>
          <div><h1 class="text-2xl">Supplier</h1></div>
          <div>
            <NuxtLink :to="`/steps/supplier`" class="mt-4" title="Add a Supplier to the Business Model">
                  <Icon name="material-symbols:add-circle" class="rounded-full group-hover:bg-cyan-300 hover:scale-110 mt-5" />
            </NuxtLink>
          </div>
        </div>
        <div class="text-md p-4 hidden text-xs group-hover:block group-hover:text-base transition-all duration-500">
          Refers to entities or individuals providing services, data, or technologies that contribute to the functionality of the platform.
        </div>


      </div>
      <div class="border rounded-md m-2 group">
        <div class="grid grid-cols-3">
          <div></div>
          <div><h1 class="text-2xl">Partner</h1></div>
          <div>
            <NuxtLink :to="`/steps/partner`" class="mt-4" title="Add a Partner to the Business Model">
              <Icon name="material-symbols:add-circle" class="rounded-full group-hover:bg-cyan-300 hover:scale-110 mt-5" />
            </NuxtLink>
          </div>
        </div>
        <div class="text-md p-4 hidden text-xs group-hover:block group-hover:text-base transition-all duration-500 delay-500">
          Entities or individuals collaborating with the platform, potentially through joint projects, shared resources, or mutual goals in the realm of crisis management and decision support.
        </div>
      </div>
   

    </div>
  </div>

  <h1 class="mt-20"> SPELL-Business Model </h1>
<div class="grid grid-cols-2 mt-4">
     
        <PlatformParticipants :participant="'Customer'" :data="customer"  />
        <PlatformParticipants :participant="'Owner'"  :data="owner"/>
    
        <PlatformParticipants :participant="'Supplier'" :data="supplier"  />
        <PlatformParticipants :participant="'Partner'"  :data="partner"/>
    
</div>

<div class="border-4 m-10">
    
</div>
<div class="grid grid-cols-5">
  <div></div>
    <div class="border p-3 m-6 col-span-5 md:col-span-3"> 
        <p class="text-xl mb-8">comments</p>
        <div>
            <textarea v-model="comment" placeholder="write a comment..."></textarea>
            <button class="border p-1 rounded m-2 hover:bg-cyan-100" @click="submitComment(comment)">Submit</button>
        </div>

        <!-- alte Kommentare anzeigen -->
        <div class="p-1 m-1 rounded-xl border " v-for="value in com">
            <p class="text-lg">{{ value.comment }}</p>
        </div>
    </div>
    
</div>

<div class="mt-12">
    <h1>Revenue Model</h1>
    <div class="h-96 grid grid-cols-4 w-3/4 justify-items-center mx-auto">
        <div class="w-4/5">
            <p class="text-xl mb-4">Customer</p>
            <!-- <div v-for="(value, key) in customerRevenue" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div> -->
            <Doughnut :data="dougnout(customerRevenue)" :options="chartOptions" />
        </div>
        <div class="w-4/5">
            <p class="text-xl mb-4">Owner</p>
           
            <Doughnut :data="dougnout(ownerRevenue)" :options="chartOptions" />

        </div>
        <div class="w-4/5">
            <p class="text-xl mb-4">Partner</p>
         
            <Doughnut :data="dougnout(ownerRevenue)" :options="chartOptions" />

        </div>
        <div class="w-4/5">
            <p class="text-xl mb-4">Supplier</p>
        
            <Doughnut :data="dougnout(supplierRevenue)" :options="chartOptions" />    
                </div>
          </div>
</div>

<div class="mt-12">
    <h1>Channel</h1>
    <div class="grid grid-cols-3 w-3/4 justify-items-center mx-auto">
        <div >
            <p class="text-xl">Customer</p>
            <div v-for="(value, key) in customerChannel" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <!-- <div>
            <p class="text-xl">Owner</p>
            <div v-for="(value, key) in ownerChannel" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div> -->
        <div>
            <p class="text-xl">Partner</p>
            <div v-for="(value, key) in partnerChannel" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Supplier</p>
            <div v-for="(value, key) in supplierChannel" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>

    </div>
</div>


<div class="mt-12">
    <h1>Resources</h1>
    <div class="grid grid-cols-4 w-3/4 justify-items-center mx-auto">
        <div>
            <p class="text-xl">Customer</p>
            <div v-for="(value, key) in customerResources" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Owner</p>
            <div v-for="(value, key) in ownerResources" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Partner</p>
            <div v-for="(value, key) in partnerResources" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Supplier</p>
            <div v-for="(value, key) in supplierResources" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>

    </div>
</div>

<div class="mt-12">
    <h1>Filter</h1>
    <div class="grid grid-cols-3 w-3/4 justify-items-center mx-auto">
        <div>
            <p class="text-xl">Customer</p>
            <div v-for="(value, key) in customerFilter" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
      
        <div>
            <p class="text-xl">Partner</p>
            <div v-for="(value, key) in partnerFilter" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Supplier</p>
            <div v-for="(value, key) in supplierFilter" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>

    </div>
</div>


<div class="mt-16">
  <h1> Charts </h1>
  <h2 class="text-lg"> Revenue </h2>
    <Bar :data="revenueData" class="mx-auto w-3/5" />

  <h2 class="mt-16 text-lg"> Channel </h2>
    <Bar :data="channelData" class="mx-auto w-3/5" />

  <!-- <h2 class="mt-16 text-lg"> Channel </h2>
    <Doughnut :data="testData" class="mx-auto w-3/5" /> -->



</div>


</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS,ArcElement, Title, Tooltip, Legend, BarElement, LinearScale, LineElement, PointElement, LineController, CategoryScale,  } from 'chart.js'

import { Doughnut } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, LinearScale, LineElement, PointElement, LineController, CategoryScale )



const cookie = useCookie('projectName');



const big = ref(false); 

const customerLoad = await useFetch(`/api/getCustomer/` + cookie.value);
const customer = customerLoad.data.value.data

const ownerLoad = await useFetch(`/api/getOwner/` + cookie.value);
const owner = ownerLoad.data.value.data

const supplierLoad = await useFetch(`/api/getSupplier/` + cookie.value);
const supplier = supplierLoad.data.value.data

const partnerLoad = await useFetch(`/api/getPartner/` + cookie.value);
const partner = partnerLoad.data.value.data




let customerJob = {};

customer.forEach(project => {
  project.job.forEach(jobCategory => {// Assuming job is an array and we want the first job
  if (customerJob.hasOwnProperty(jobCategory)) {
    customerJob[jobCategory]++;
  } else {
    customerJob[jobCategory] = 1;
  }
});
});

let customerRevenue = {};

customer.forEach(project => {
  project.revenue.forEach(revenueCategory => {// Assuming job is an array and we want the first job
  if (customerRevenue.hasOwnProperty(revenueCategory)) {
    customerRevenue[revenueCategory]++;
  } else {
    customerRevenue[revenueCategory] = 1;
  }
});
});

let ownerRevenue = {};

owner.forEach(project => {
  project.revenue.forEach(revenueCategory => {// Assuming job is an array and we want the first job
  if (ownerRevenue.hasOwnProperty(revenueCategory)) {
    ownerRevenue[revenueCategory]++;
  } else {
    ownerRevenue[revenueCategory] = 1;
  }
});
});

let partnerRevenue = {};

partner.forEach(project => {
  project.revenue.forEach(revenueCategory => {// Assuming job is an array and we want the first job
  if (partnerRevenue.hasOwnProperty(revenueCategory)) {
    partnerRevenue[revenueCategory]++;
  } else {
    partnerRevenue[revenueCategory] = 1;
  }
});
});

let supplierRevenue = {};

supplier.forEach(project => {
  project.revenue.forEach(revenueCategory => {// Assuming job is an array and we want the first job
  if (supplierRevenue.hasOwnProperty(revenueCategory)) {
    supplierRevenue[revenueCategory]++;
  } else {
    supplierRevenue[revenueCategory] = 1;
  }
});
});

let customerChannel = {};

customer.forEach(project => {
  project.channel.forEach(channelCategory => {// Assuming job is an array and we want the first job
  if (customerChannel.hasOwnProperty(channelCategory)) {
    customerChannel[channelCategory]++;
  } else {
    customerChannel[channelCategory] = 1;
  }
});
});

let ownerChannel = {};

owner.forEach(project => {
  project.channel.forEach(channelCategory => {// Assuming job is an array and we want the first job
  if (ownerChannel.hasOwnProperty(channelCategory)) {
    ownerChannel[channelCategory]++;
  } else {
    ownerChannel[channelCategory] = 1;
  }
});
});

let partnerChannel = {};

partner.forEach(project => {
  project.channel.forEach(channelCategory => {// Assuming job is an array and we want the first job
  if (partnerChannel.hasOwnProperty(channelCategory)) {
    partnerChannel[channelCategory]++;
  } else {
    partnerChannel[channelCategory] = 1;
  }
});
});

let supplierChannel = {};

supplier.forEach(project => {
  project.channel.forEach(channelCategory => {// Assuming job is an array and we want the first job
  if (supplierChannel.hasOwnProperty(channelCategory)) {
    supplierChannel[channelCategory]++;
  } else {
    supplierChannel[channelCategory] = 1;
  }
});
});

let customerResources = {};

customer.forEach(project => {
  project.resources.forEach(resourcesCategory => {// Assuming job is an array and we want the first job
  if (customerResources.hasOwnProperty(resourcesCategory)) {
    customerResources[resourcesCategory]++;
  } else {
    customerResources[resourcesCategory] = 1;
  }
});
});

let ownerResources = {};

owner.forEach(project => {
  project.resources.forEach(resourcesCategory => {// Assuming job is an array and we want the first job
  if (ownerResources.hasOwnProperty(resourcesCategory)) {
    ownerResources[resourcesCategory]++;
  } else {
    ownerResources[resourcesCategory] = 1;
  }
  });
});

let partnerResources = {};

partner.forEach(project => {
  project.resources.forEach(resourcesCategory => {// Assuming job is an array and we want the first job
  if (partnerResources.hasOwnProperty(resourcesCategory)) {
    partnerResources[resourcesCategory]++;
  } else {
    partnerResources[resourcesCategory] = 1;
  }
});
});

let supplierResources = {};

supplier.forEach(project => {
  project.resources.forEach(resourcesCategory => {// Assuming job is an array and we want the first job
  if (supplierResources.hasOwnProperty(resourcesCategory)) {
    supplierResources[resourcesCategory]++;
  } else {
    supplierResources[resourcesCategory] = 1;
  }
});
});


// Function to merge the revenue data
function mergeRevenueData(...revenueMaps) {
  const combinedRevenue = {};

  revenueMaps.forEach((revenueMap, index) => {
    // Determine the type of revenue based on the index
    const type = ['customer', 'owner', 'partner', 'supplier'][index];
    
    for (const [key, value] of Object.entries(revenueMap)) {
      if (!combinedRevenue[key]) {
        combinedRevenue[key] = { category: key, customer: 0, owner: 0, partner: 0, supplier: 0 };
      }
      // Assign the value to the correct type
      combinedRevenue[key][type] = value;
    }
  });

  return Object.values(combinedRevenue);
}

// Function to merge the revenue data
function mergeChannelData(...revenueMaps) {
  const combinedRevenue = {};

  revenueMaps.forEach((revenueMap, index) => {
    // Determine the type of revenue based on the index
    const type = ['customer', 'partner', 'supplier'][index];
    
    for (const [key, value] of Object.entries(revenueMap)) {
      if (!combinedRevenue[key]) {
        combinedRevenue[key] = { category: key, customer: 0, partner: 0, supplier: 0 };
      }
      // Assign the value to the correct type
      combinedRevenue[key][type] = value;
    }
  });

  return Object.values(combinedRevenue);
}

// Now, we merge the data
const combinedArray = mergeRevenueData(customerRevenue, ownerRevenue, partnerRevenue, supplierRevenue);
const combinedChannelArray = mergeChannelData(customerChannel, partnerChannel, supplierChannel);
console.log("CA", combinedArray)



const revenueData = {
  labels: combinedArray.map(item => item.category),
  datasets: [{
    label: 'Customer',
    backgroundColor: '#00e6e6',
    data: combinedArray.map(item => item.customer)
  }, 
  {
    label: 'Owner',
    backgroundColor: '#990000',
    data: combinedArray.map(item => item.owner)
  }, 
  {
    label: 'Partner',
    backgroundColor: '#B29747',
    data: combinedArray.map(item => item.partner)
  }, 
  {
    label: 'Supplier',
    backgroundColor: '#4CA64C',
    data: combinedArray.map(item => item.supplier)
  }    
]
};

const channelData = {
  labels: combinedChannelArray.map(item => item.category),
  datasets: [{
    label: 'Customer',
    backgroundColor: '#00e6e6',
    data: combinedChannelArray.map(item => item.customer)
  }, 
  {
    label: 'Partner',
    backgroundColor: '#B29747',
    data: combinedChannelArray.map(item => item.partner)
  }, 
  {
    label: 'Supplier',
    backgroundColor: '#4CA64C',
    data: combinedChannelArray.map(item => item.supplier)
  }
]
}

function dougnout(data){
  return {
    labels: Object.keys(data),
    datasets: [{
      label: '',
      data: Object.values(data),
      backgroundColor: [
        '#72f542',
        '#42f5ad',
        '#42c5f5',
        '#427ef5',
        '#9042f5',
        '#f57242',
        '#f5ce42'

      ],
      hoverOffset: 4
    }]
  
}
}

const chartOptions = {
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
};

const customerFilter = {};

customer.forEach(project => {
  let filterCategory = project.filter[0]; // Assuming job is an array and we want the first job
  if (customerFilter.hasOwnProperty(filterCategory)) {
    customerFilter[filterCategory]++;
  } else {
    customerFilter[filterCategory] = 1;
  }
});

let partnerFilter = {};

partner.forEach(project => {
  let filterCategory = project.filter[0]; // Assuming job is an array and we want the first job
  if (partnerFilter.hasOwnProperty(filterCategory)) {
    partnerFilter[filterCategory]++;
  } else {
    partnerFilter[filterCategory] = 1;
  }
});

let supplierFilter = {};

supplier.forEach(project => {
  let filterCategory = project.filter[0]; // Assuming job is an array and we want the first job
  if (supplierFilter.hasOwnProperty(filterCategory)) {
    supplierFilter[filterCategory]++;
  } else {
    supplierFilter[filterCategory] = 1;
  }
});






const comDB = await useFetch(`/api/getComments/` + cookie.value);
const com = comDB.data.value.data
console.log("DB", com)


async function submitComment(comment) {
    console.log(comment)
    await $fetch('api/setComment',
    {
        method: 'POST',
        body: { projectName: cookie.value, 
                comment: comment       
            },
    });

    com.push({comment: comment})
}

</script>
