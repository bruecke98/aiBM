<template>
      <form
        @submit.prevent="userRegister"
      >
        <h2 class="text-left text-xl">Register</h2>
        <div >
          <div>
            <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
          </div>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-3/4 rounded border dark:bg-dark-background dark:border-dark-text  border-light-text py-1 px-3"
            required
          />
        </div>
        <div >
          <div>
            <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
          </div>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
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
        <div>
          <label>
            <input class="text-gray-400 p-3 mt-5 m-2" type="checkbox" required>
            Ich stimme den AGB zu
          </label>
        </div>
        <button
          class="p-2 m-3 rounded border-4 dark:border-dark-accent-500 dark:hover:bg-dark-accent-500 border-light-accent-500 hover:bg-light-accent-500
          hover:translate-y-1 hover:scale-110 transition ease-in-out"
        >
          Submit
        </button>
        <span
          class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
          v-if="errorMsg"
          >{{ errorMsg }}</span
        >
      </form>

</template>

<script setup>
const {client} = useSupabaseClient();
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseAuthClient();
const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match!';
    password.value = '';
    confirmPassword.value = '';
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
    return;
  }
  try {
    const { error } = await auth.signUp({
      email: email.value,
      password: password.value,
    });
    
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
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
    return navigateTo('/payment');
  }
});
</script>