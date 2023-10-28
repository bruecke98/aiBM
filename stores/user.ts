export const useUserStore = defineStore('user', () => {
    const user = useSupabaseUser()
    let email  = ref("")
  
    onMounted(async () => {
      await user;
      email = user.value?.email ? ref(user.value?.email) : ref("")
    })
  
    return {
      getEmail() {
        return email
      },
      setEmail(value : string) {
        email = ref(value)
      },
    }
  })