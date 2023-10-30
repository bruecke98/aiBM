<template>


    <Header />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    <Footer />

</template>


<script setup lang="ts">
const cookie = useCookie('projectName',
  { 
  maxAge: 60 * 60 * 24 * 7,
  });

cookie.value = '';


</script>

<style>
@font-face {
  font-family: 'SpaceG';
  src: url('./assets/font/RobotoSerif-VariableFont_GRAD,opsz,wdth,wght.ttf');
}
</style>
