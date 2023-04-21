<template>
    <div>
      <div v-if="newAccess===''" >
      <form  @submit.prevent="sendPasswordResetEmail">
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
        <div>
          <span class="bg-opacity-50 absolute rounded-lg p-8 px-4 py-2 text-red-500" v-if="errorMsg">{{ errorMsg}}</span>
          <span class="bg-opacity-50 absolute rounded-lg p-8 px-4 py-2 text-green-500" v-if="successMsg">{{ successMsg}}</span>
        </div>
      </form>
      </div>
      <div v-else>
        <form @submit.prevent="resetPassword">
          <div >
          <div>
            <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
          </div>
          <input
            v-model="newPassword"
            type="password"
            id="newPassword"
            name="newPassword"
            class="w-3/4 rounded border dark:bg-dark-background dark:border-dark-text  border-light-text py-1 px-3"
            required
          />
        </div>
        <div>
          <div>
            <label for="confirmPassword" class="text-sm leading-7 text-gray-400"
              >Confirm password</label
            >
          </div>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="w-3/4 rounded border dark:bg-dark-background dark:border-dark-text  border-light-text py-1 px-3"
            required
          />
        </div>
          <button class="p-2 m-3 rounded border-4 dark:border-dark-accent-500 dark:hover:bg-dark-accent-500 border-light-accent-500 hover:bg-light-accent-500
                hover:translate-y-1 hover:scale-110 transition ease-in-out">
            Reset Password
        </button>
        </form>
      </div>
      <div v-if="errorMsg">{{ errorMsg }}</div>
    </div>
  </template>
  
  <script setup>

  const email = ref('');

  const newPassword = ref('');
  const confirmPassword = ref('');
  const errorMsg = ref('');
  const successMsg = ref('');

  const route = useRoute();

  
  const supabase = useSupabaseClient();
  const props = defineProps({
    newAccess: {
      type: String,
    },
  });

  const sendPasswordResetEmail = async () => {
    try {
      let { data, error } = await supabase.auth.resetPasswordForEmail(email.value)

           
      if (error) throw error;

      successMsg.value = 'Password reset email sent! Check your inbox or Spam for further instructions.';

    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = '';
      }, 8000);
    }
  };
  
  const resetPassword = async () => {
    if(newPassword.value !== confirmPassword.value) {
      errorMsg.value = 'Passwords do not match.';
      setTimeout(() => {
        errorMsg.value = '';
      }, 3000);
      return;
    }else{
      try {
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword.value,
          access_token: props.newAccess,
        });
    
        if (data) {
          alert('Password updated successfully!');
          newPassword.value = '';
          props.newAccess = '';
          return navigateTo('/main');
        }
    
        if (error) {
          alert(error, 'There was an error updating your password.');
        }
      } catch (error) {
        errorMsg.value = error.message;
        setTimeout(() => {
          errorMsg.value = '';
        }, 3000);
      }
    };
  };
  </script>
  