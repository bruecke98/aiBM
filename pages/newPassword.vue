<template>
    <div>
        <form @submit.prevent="newPassword">
            <div>
                <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
            </div>
            <div>
                <div>
                    <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
                </div>
                <input v-model="password" type="password" id="password" name="password"
                    class="w-3/4 rounded border dark:bg-dark-background dark:border-dark-text  border-light-text py-1 px-3"
                    required />
            </div>
            <div>
                <div>
                    <label for="confirmPassword" class="text-sm leading-7 text-gray-400">Confirm password</label>
                </div>
                <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword"
                    class="w-3/4 rounded border dark:bg-dark-background dark:border-dark-text  border-light-text py-1 px-3"
                    required />
            </div>
            <button
                class="p-2 m-3 rounded border-4 dark:border-dark-accent-500 dark:hover:bg-dark-accent-500 border-light-accent-500 hover:bg-light-accent-500
                hover:translate-y-1 hover:scale-110 transition ease-in-out"
                >
                Submit
                </button>
            <div>
                <span class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
                    v-if="errorMsg">{{ errorMsg }}</span> </div>
        </form>
    </div>
</template>

<script setup   lang="ts">
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const route = useRoute()


const newPassword = async () => {
    if(user && user.value && user.value.email){
        if (password.value !== confirmPassword.value ) {
            errorMsg.value = 'Passwords do not match!';
            password.value = '';
            confirmPassword.value = '';
            setTimeout(() => {
                errorMsg.value = '';
            }, 3000);
            return;
        } else  {
            // const { data, error } = await supabase.auth.updateUser({
            //     password: password.value,
            //     // access_token: resetPToken
            // })
        }
    }
}
</script>