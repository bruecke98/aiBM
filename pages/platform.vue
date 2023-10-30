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
    {{ cookie }}
    <div class="border p-3 m-6"> comments </div>
    <div class="border p-3 m-6"> sharing  </div>
</div>


</template>

<script setup>
import { useProjectNameStore } from '~/stores/projectName';
const projectNameStore = useProjectNameStore();
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


</script>
