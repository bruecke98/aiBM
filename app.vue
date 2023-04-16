<template>
  <div :class="{ 'dark': isDark }" >
    <Header v-if="user">
      <button @click="toggleTheme" > 
        <span :class="{'hidden' : isDark}" ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !isDark}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </Header >
    <HeaderAuth v-else>
      <button @click="toggleTheme" class="ml-10" > 
        <span :class="{'hidden' : isDark}"  ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !isDark}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </HeaderAuth >

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
    <Footer />
  </div>
</template>


<script setup lang="ts">

const user = useSupabaseUser()

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
