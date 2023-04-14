<template>
    <div class="flex flex-row  mt-40 ">
        <Box class="basis-1/2 text-left text-3xl">
            <h1>make</h1>
            <h1>better</h1>
            <h1>investments</h1>
        </Box>  
        <Box class="basis-1/2">
                <AuthRegister v-if="reg" />
                <Auth v-else />
                <div>
                    <!-- <button @click="reg = true"><h1>Register</h1></button> -->
                    <p class="mt-3 text-xs">You don't have an account yet?</p>
                    <button @click="reg = !reg"><h1>Register</h1></button>
                </div>
        </Box> 
    </div>

    <div class="flex flex-row  mt-40 ">  
        <Box class="basis-1/3">
            <h2>Eins</h2>
        </Box> 
        <Box class="basis-1/3">
            <h2>Zwei</h2>
        </Box> 
        <Box class="basis-1/3">
            <h2>Drei</h2>
        </Box> 
    </div>
    
</template>

<script setup lang="ts">
// const client = useSupabaseClient()
const reg = ref(false)

</script>