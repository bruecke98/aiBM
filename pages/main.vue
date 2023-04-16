<template>
    <div>MAIN </div> 
    <div>{{ resData }}</div>
</template>

<script setup lang="ts">
const { test: resData } = await $fetch('/api/fmp/test')

definePageMeta({
    middleware: ['auth', 'check-customer'],
});
</script>