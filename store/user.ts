export const useUserStore = defineStore('user', () => {
    const user = useSupabaseUser()
    const email = ref(null)
  
    onMounted(async () => {
      await user;
      email.value = user.value?.email || ""
    })
  
    return {
      getEmail() {
        return email.value
      },
      setEmail(value) {
        email.value = value
      },
    }
  })