<template>
  <div :class="{ 'dark': darkMode }">
  <div  class="bg-light-background dark:bg-dark-background dark:text-dark-text text-light-text transition-colors duration-200" >
    <Header v-if="user">
      <button @click="change_theme" > 
        <span :class="{'hidden' : darkMode}" ><Icon name="material-symbols:dark-mode" /></span>
        <span :class="{'hidden' : !darkMode}" ><Icon name="solar:sun-2-broken" /></span>
      </button>
    </Header >
    <HeaderAuth v-else>
      <button @click="change_theme" class="ml-10" > 
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
const router = useRouter()

const darkMode = useCookie(
  'darkMode',
  {
    default: () => true,
    watch: 'shallow'
  }
)
function change_theme() {
  darkMode.value = !darkMode.value
  // load new if responsive external css or charts color
  // router.go(0)

}

</script>


