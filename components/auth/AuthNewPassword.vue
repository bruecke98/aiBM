<template>
    <form @submit.prevent="sendNewPassword">
      <h2 class="text-left text-xl">Login</h2>
      <div class="mb-2">
        <div>
          <label for="full-name" class="text-sm leading-7 text-gray-400">Email</label>
        </div>
        <input v-model="email" type="email" id="email" name="email"
          class="w-3/4 rounded border dark:border-dark-text  border-light-text dark:bg-dark-background border-light-accent py-1 px-3 "
          required />
      </div>
      <button class="p-2 m-3 rounded border-4 dark:border-dark-accent-500 dark:hover:bg-dark-accent-500 border-light-accent-500 hover:bg-light-accent-500
              hover:translate-y-1 hover:scale-110 transition ease-in-out">
        Send Password Reset Link
      </button>
      <span class="bg-opacity-50 absolute right-8 top-8 rounded-lg p-8 px-4 py-2 text-red-500" v-if="errorMsg">{{ errorMsg
      }}</span>
  
    </form>
  </template>
  
  <script setup>
  const user = useSupabaseUser();
  const email = ref('');
  const password = ref('');
  const errorMsg = ref('');
  const { auth } = useSupabaseAuthClient();
  
  const sendNewPassword = async () => {
    try {
      const { error } = await auth.resetPasswordForEmail({
        email: email.value, 
        redirectTo: `${config.public.appDomain}/newPassword`,         
      });
      email.value = '';
      if (error) throw error;
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = '';
      }, 3000);
    }
  };

  </script>