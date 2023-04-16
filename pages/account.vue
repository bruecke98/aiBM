<template>
    <AuthUser />
    <div class="flex justify-center">
        <Box >
            <!-- Button mit link https://billing.stripe.com/p/login/test_00g3f42Gg5GR784cMM -->
            <button  @click="changeStripe" class="border-2 p-4">
                <a >Konto löschen oder ändern</a>
            </button>
        </Box>
    </div>
</template>

<script setup lang="ts">
const changeStripe = async () => {
    return navigateTo('https://billing.stripe.com/p/login/test_00g3f42Gg5GR784cMM', {external : true});
};
</script>