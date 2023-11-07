<template>

<div class="grid grid-cols-2">
    
        <PlatformParticipants :participant="'Customer'" :data="customer"  />
        <PlatformParticipants :participant="'Owner'"  :data="owner"/>
    
        <PlatformParticipants :participant="'Supplier'" :data="supplier"  />
        <PlatformParticipants :participant="'Partner'"  :data="partner"/>
    
</div>

<div class="border-4 m-10">
    
</div>
<div class="grid grid-cols-2">
    <div class="border p-3 m-6"> 
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
    <div class="border p-3 m-6"> 
        <p class="text-xl mb-8">sharing</p>
        <!-- alte Kommentare anzeigen -->
        <p class="text-lg">share the name of the project, <span class="text-xl bg-cyan-200 p-1 rounded-lg">{{ cookie }}</span> ,with your colleagues </p>
    </div>
</div>

<div class="mt-12">
    <h1>Revenue Model</h1>
    <div class="grid grid-cols-4 w-3/4 justify-items-center mx-auto">
        <div>
            <p class="text-xl">Customer</p>
            <div v-for="(value, key) in customerRevenue" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Owner</p>
            <div v-for="(value, key) in ownerRevenue" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Partner</p>
            <div v-for="(value, key) in partnerRevenue" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>
        <div>
            <p class="text-xl">Supplier</p>
            <div v-for="(value, key) in supplierRevenue" :key="key">
                <p class="text-lg">{{ value }}x: {{ key }}</p>
            </div>
        </div>

    </div>
</div>

<div class="mt-12">
    <h1>Channel</h1>
    <div class="grid grid-cols-3 w-3/4 justify-items-center mx-auto">
        <div>
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

<div>
    <!-- <Bar :data="revenueData"  /> -->
</div>


</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LinearScale, LineElement, PointElement, LineController, CategoryScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, LineElement, PointElement, LineController, CategoryScale)



const cookie = useCookie('projectName')



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
  let jobCategory = project.job[0]; // Assuming job is an array and we want the first job
  if (customerJob.hasOwnProperty(jobCategory)) {
    customerJob[jobCategory]++;
  } else {
    customerJob[jobCategory] = 1;
  }
});

let customerRevenue = {};

customer.forEach(project => {
  let revenueCategory = project.revenue[0]; // Assuming job is an array and we want the first job
  if (customerRevenue.hasOwnProperty(revenueCategory)) {
    customerRevenue[revenueCategory]++;
  } else {
    customerRevenue[revenueCategory] = 1;
  }
});

let ownerRevenue = {};

owner.forEach(project => {
  let revenueCategory = project.revenue[0]; // Assuming job is an array and we want the first job
  if (ownerRevenue.hasOwnProperty(revenueCategory)) {
    ownerRevenue[revenueCategory]++;
  } else {
    ownerRevenue[revenueCategory] = 1;
  }
});

let partnerRevenue = {};

partner.forEach(project => {
  let revenueCategory = project.revenue[0]; // Assuming job is an array and we want the first job
  if (partnerRevenue.hasOwnProperty(revenueCategory)) {
    partnerRevenue[revenueCategory]++;
  } else {
    partnerRevenue[revenueCategory] = 1;
  }
});

let supplierRevenue = {};

supplier.forEach(project => {
  let revenueCategory = project.revenue[0]; // Assuming job is an array and we want the first job
  if (supplierRevenue.hasOwnProperty(revenueCategory)) {
    supplierRevenue[revenueCategory]++;
  } else {
    supplierRevenue[revenueCategory] = 1;
  }
});

let customerChannel = {};

customer.forEach(project => {
  let channelCategory = project.channel[0]; // Assuming job is an array and we want the first job
  if (customerChannel.hasOwnProperty(channelCategory)) {
    customerChannel[channelCategory]++;
  } else {
    customerChannel[channelCategory] = 1;
  }
});

let ownerChannel = {};

owner.forEach(project => {
  let channelCategory = project.channel[0]; // Assuming job is an array and we want the first job
  if (ownerChannel.hasOwnProperty(channelCategory)) {
    ownerChannel[channelCategory]++;
  } else {
    ownerChannel[channelCategory] = 1;
  }
});

let partnerChannel = {};

partner.forEach(project => {
  let channelCategory = project.channel[0]; // Assuming job is an array and we want the first job
  if (partnerChannel.hasOwnProperty(channelCategory)) {
    partnerChannel[channelCategory]++;
  } else {
    partnerChannel[channelCategory] = 1;
  }
});

let supplierChannel = {};

supplier.forEach(project => {
  let channelCategory = project.channel[0]; // Assuming job is an array and we want the first job
  if (supplierChannel.hasOwnProperty(channelCategory)) {
    supplierChannel[channelCategory]++;
  } else {
    supplierChannel[channelCategory] = 1;
  }
});

let customerResources = {};

customer.forEach(project => {
  let resourcesCategory = project.resources[0]; // Assuming job is an array and we want the first job
  if (customerResources.hasOwnProperty(resourcesCategory)) {
    customerResources[resourcesCategory]++;
  } else {
    customerResources[resourcesCategory] = 1;
  }
});

let ownerResources = {};

owner.forEach(project => {
  let resourcesCategory = project.resources[0]; // Assuming job is an array and we want the first job
  if (ownerResources.hasOwnProperty(resourcesCategory)) {
    ownerResources[resourcesCategory]++;
  } else {
    ownerResources[resourcesCategory] = 1;
  }
});

let partnerResources = {};

partner.forEach(project => {
  let resourcesCategory = project.resources[0]; // Assuming job is an array and we want the first job
  if (partnerResources.hasOwnProperty(resourcesCategory)) {
    partnerResources[resourcesCategory]++;
  } else {
    partnerResources[resourcesCategory] = 1;
  }
});

let supplierResources = {};

supplier.forEach(project => {
  let resourcesCategory = project.resources[0]; // Assuming job is an array and we want the first job
  if (supplierResources.hasOwnProperty(resourcesCategory)) {
    supplierResources[resourcesCategory]++;
  } else {
    supplierResources[resourcesCategory] = 1;
  }
});


// Assuming customerRevenue, ownerRevenue, partnerRevenue, and supplierRevenue
// are already defined as in your provided code snippets.

// Function to merge the revenue data
function mergeRevenueData(...revenueMaps) {
  const combinedRevenue = {};

  revenueMaps.forEach(revenueMap => {
    for (const [key, value] of Object.entries(revenueMap)) {
      if (!combinedRevenue[key]) {
        combinedRevenue[key] = { category: key, customer: 0, owner: 0, partner: 0, supplier: 0 };
      }
      console.log('here', value)
      console.log(key)
      console.log(revenueMap)
      combinedRevenue[key].customer = value;
    }
  });

  return Object.values(combinedRevenue);
}

// First, give each map a property 'name' corresponding to the array it represents


// Now, we merge the data
const combinedArray = mergeRevenueData(customerRevenue, ownerRevenue, partnerRevenue, supplierRevenue);

console.log(customerRevenue);
console.log(combinedArray);


const revenueData = {
  labels: combinedArray.map(item => item.category),
  datasets: [{
    label: 'Customer',
    backgroundColor: 'black',
    data: [1, 1]
  }, 
  {
    label: 'Owner',
    backgroundColor: 'red',
    data: combinedArray.map(item => item.owner)
  }, 
  {
    label: 'Partner',
    backgroundColor: 'blue',
    data: combinedArray.map(item => item.partner)
  }, 
  {
    label: 'Supplier',
    backgroundColor: 'green',
    data: combinedArray.map(item => item.supplier)
  }    
]
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
}

</script>
