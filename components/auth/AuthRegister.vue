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
            class="w-3/4 bg-opacity-20 w-full rounded border border-gray-600  py-1 px-3  transition-colors duration-200 ease-in-out"
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
            class="w-3/4 bg-opacity-20 w-full rounded border border-gray-600  py-1 px-3  transition-colors duration-200 ease-in-out"
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
            class="w-3/4 bg-opacity-20 w-full rounded border border-gray-600  py-1 px-3  transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <button
          class="p-2 m-3 rounded border border-gray-900 hover:bg-slate-200"
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
    return navigateTo('/');
  }
});
</script>