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
    {{ projectNameStore.projectName}}
    <div class="border p-3 m-6"> comments </div>
    <div class="border p-3 m-6"> sharing  </div>
</div>


</template>

<script setup>
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();
const big = ref(false); 

const customerLoad = await useFetch(`/api/getCustomer/` + projectNameStore.projectName);
const customer = customerLoad.data.value.data

const ownerLoad = await useFetch(`/api/getOwner/` + projectNameStore.projectName);
const owner = ownerLoad.data.value.data

const supplierLoad = await useFetch(`/api/getSupplier/` + projectNameStore.projectName);
const supplier = supplierLoad.data.value.data

const partnerLoad = await useFetch(`/api/getPartner/` + projectNameStore.projectName);
const partner = partnerLoad.data.value.data


</script>
