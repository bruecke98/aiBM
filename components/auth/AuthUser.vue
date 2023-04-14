<template>
    <div  class="flex justify-center"> 
        <Box >
            <div class="text-center">
                <div class="flex flex-col items-center justify-center text-center">
                    <h1 class="tagline mt-4 text-5xl font-black">Welcome</h1>
                    <div class="mt-2 mb-4 h-1 w-12 rounded bg-[#42b883]"></div>
                    <h3 class="text-2xl font-bold text-[#aac8e4]">Email</h3>
                    <p class="text-base text-gray-400">{{ user.email }}</p>
                    <button @click="userLogout"
                        class="mt-8 rounded-md bg-[#42b883] px-4 py-2 font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none">
                        logout
                    </button>
                </div>
            </div>

        </Box>
    </div>
</template>

<script setup>
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const userLogout = async () => {
    await auth.signOut();
};
watchEffect(() => {
    if (!user.value) {
        return navigateTo('/');
    }
});
definePageMeta({
    middleware: 'auth',
});
</script>