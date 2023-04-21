<template>
    <div class="flex md:flex-row flex-col  md:mt-16 ">
        <Box class=" md:basis-1/2 text-left text-3xl max-h-72">
            <h1>make</h1>
            <h1>better</h1>
            <h1>investments</h1>
        </Box>  
        <Box class="md:basis-1/2" >
                <div v-if="newP || access">
                    <AuthNewPassword :newAccess="access" />
                </div>
                <div v-else>   
                    <AuthRegister v-if="reg" />
                    <AuthLogin v-else />
                </div>
                
                <div v-if="!reg">
                    <button  class="inline-block text-xs underline" @click="newP = !newP"><h1>{{ !newP ? "Passwort vergessen?" : ""}}</h1></button>
                </div>
                <div>
                    <!-- <button @click="reg = true"><h1>Register</h1></button> -->
                    <p class="text-xs inline-block">{{ !reg ? "You don't have an account yet? " : "You have an Account? "}} </p>
                    <button class="inline-block text-sm underline" @click="reg = !reg; newP = false"><h1>{{ !reg ? "Register" : "Login"}}</h1></button>
                </div>
        </Box> 
    </div>

    <div class="flex md:flex-row flex-col  mt-40 ">  
        <Box class="md:basis-1/3">
            <h2>Eins</h2>
        </Box> 
        <Box class="md:basis-1/3">
            <h2>Zwei</h2>
        </Box> 
        <Box class="md:basis-1/3">
            <h2>Drei</h2>
        </Box> 
    </div>
    
</template>

<script setup lang="ts">

const reg = ref(false)
const newP = ref(false)

const access = ref('');
const hash = useRoute().hash // outputs "asdasd"
if(hash){
    access.value = hash.split('=')[1].split('&')[0]
}

</script>
