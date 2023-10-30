<template>


    <Header />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    <Footer />

</template>


<script setup lang="ts">
const cookie = useCookie('projectName');

cookie.value = '';


</script>


