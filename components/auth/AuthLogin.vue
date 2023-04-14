<template>
    
        <form
          @submit.prevent="userLogin"
        >
          <h2 class="text-left text-xl">Login</h2>
          <div class="mb-2">
            <div>
              <label for="full-name" class="text-sm leading-7 text-gray-400">Email</label>
            </div>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="w-3/4 rounded border border-gray-600 py-1 px-3 "
              required
            />
          </div>
          <div >
            <div>
              <label for="full-name" class="text-sm leading-7 text-gray-400">Password</label>
            </div>            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              class="w-3/4 rounded border border-gray-600 py-1 px-3 "
              required
            />
          </div>
          <button class="p-2 m-3 rounded border border-gray-900 hover:bg-slate-200">
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