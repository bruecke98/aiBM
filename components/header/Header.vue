<template>
   
    <div class="grid grid-cols-2 sticky top-2 bg-cyan-800 h-10 p-1 m-2 rounded-md items-center">
        <!-- Logo -->
        <div class="flex justify-center">
            <nuxt-link to="/" class="text-gray-200 text-xl md:text-2xl xl:text-3xl -mt-2">
                <span class="hidden md:block">SPELL-Business Model</span><span class="block md:hidden">SPELL-BM</span>
            </nuxt-link>
        </div>
        <div class="flex justify-end mr-2">
            <button @click="findCanvas" class="text-sm md:text-2xl xl:text-3xl text-gray-200 -mt-3 mr-1 md:mr-14 xl:mr-28">
                <img src="../../public/favicon.png" class="w-14 h-14" /> 
            </button>
        </div>
    </div>
    
</template>

<script setup>
const cookie = useCookie('projectName');

const name = computed(() => {
    return cookie.value;
});

async function findCanvas() {
    const { data } = await useFetch(`/api/getProject`);
    data.value.data.some(item => {
        if (item.projectName === cookie.value.trim()) {
            if(item.bm === "platform"){
                navigateTo("/platform");
            }else{
                navigateTo("/main");
            }
            return true;
        }else{
            navigateTo("/");
        }
    });
}

</script>
