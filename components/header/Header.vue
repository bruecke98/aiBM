<template>
   
    <div class="grid grid-cols-2 sticky top-2 bg-cyan-800 h-10 p-1 m-2 rounded-md">
        <!-- Logo -->
            <div>
                <nuxt-link to="/" class="text-gray-200 text-3xl">
                    ai-bm
                </nuxt-link>
            </div>
            <button @click="findCanvas" class="text-xl text-gray-200">
               
                    {{ name }}
                
            </button>
                
           
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
            }else if(item.bm === "service"){
                navigateTo("/service");
            }else {
                navigateTo("/main");
            }
            return true;
        }else{
            navigateTo("/");
        }
    });
}

</script>
