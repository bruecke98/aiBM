<template>
    
        <form
          @submit.prevent="userLogin"
        >
          <h2>Login</h2>
          <div >
            <label for="full-name" class="text-sm leading-7 text-gray-400">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <div >
            <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <button>
            LogIn
          </button>
          <span
            class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
            v-if="errorMsg"
            >{{ errorMsg }}</span
          >
          
        </form>
   
  </template>

<script setup>
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseAuthClient();

const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};
watchEffect(() => {
  if (user.value) {
    return navigateTo('/main');
  }
});
</script>