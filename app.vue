<template>
  <div :class="{ 'dark': darkMode }">
  <div  class="bg-light-background dark:bg-dark-background dark:text-dark-text text-light-text" >
    <Header v-if="user">
      <button @click="toggleTheme" > 
        <span :class="{'hidden' : darkMode}" ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !darkMode}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </Header >
    <HeaderAuth v-else>
      <button @click="toggleTheme" class="ml-10" > 
        <span :class="{'hidden' : darkMode}"  ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !darkMode}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </HeaderAuth >

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
    <Footer />
  </div>
  </div>
</template>


<script setup lang="ts">

const user = useSupabaseUser()


type Theme = 'light' | 'dark'
const LOCAL_STORAGE_THEME_KEY = 'theme'
const darkMode = useState('theme', () => true)
const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  darkMode.value = newTheme === 'dark'
}

onMounted(() => {
  const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage)
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light')
  }
})

const toggleTheme = () => {
  darkMode.value = !darkMode.value
}

</script>

