<template>
  <div :class="{ 'dark': isDark }" >
    <Header>
      <button @click="toggleTheme" > 
        <span :class="{'hidden' : isDark}" ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !isDark}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </Header>
   

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
    <Footer />
  </div>
</template>


<script setup lang="ts">

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

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
