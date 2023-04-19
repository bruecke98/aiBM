<template>
    <div>
      <form @submit.prevent="sendPasswordResetEmail">
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
        <span class="bg-opacity-50 absolute right-8 top-8 rounded-lg p-8 px-4 py-2 text-red-500" v-if="errorMsg">{{ errorMsg}}</span>
        <span class="bg-opacity-50 absolute right-8 top-8 rounded-lg p-8 px-4 py-2 text-green-500" v-if="successMsg">{{ successMsg}}</span>

      </form>
      <div v-if="access_token">
        <p>Password reset email sent! Check your inbox for further instructions.</p>
        <form @submit.prevent="resetPassword">
          <div>
            <label for="new-password">New Password:</label>
            <input type="password" id="new-password" v-model="newPassword" />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <div v-if="errorMsg">{{ errorMsg }}</div>
    </div>
  </template>
  
  <script setup>

  const email = ref('');

  const newPassword = ref('');
  const errorMsg = ref('');
  const successMsg = ref('');

  const route = useRoute();

  
  const supabase = useSupabaseClient();



  
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
  
//   const resetPassword = async () => {
//     try {
//       const { data, error } = await supabase.auth.updateUser({
//         password: newPassword.value,
//         access_token: passwordResetToken.value,
//       });
  
//       if (data) {
//         alert('Password updated successfully!');
//         passwordResetToken.value = '';
//         newPassword.value = '';
//       }
  
//       if (error) {
//         alert('There was an error updating your password.');
//       }
//     } catch (error) {
//       errorMsg.value = error.message;
//       setTimeout(() => {
//         errorMsg.value = '';
//       }, 3000);
//     }
//   };
  </script>
  