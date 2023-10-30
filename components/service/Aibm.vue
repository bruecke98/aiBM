<template>
    <h1 class="text-lg">{{ props.name }}</h1>
    <div class="flex flex-row flex-wrap justify-center" >
        <div class="flex-initial p-2 m-2 rounded-lg border bg-white"
             
            v-for="da in props.data">
            {{ da }}
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    name: '',
    data: [],
    color: ''
})

</script>