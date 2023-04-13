<template>
  <div>
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
    <Footer />
  </div>
</template>


<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>