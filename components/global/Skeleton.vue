<template>  
<div>
    <o-skeleton width="100%" :animated=bo  :style=darkStyle />
</div>

</template>

<script setup lang="ts">
import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
const bo = true;

const darkMode = useCookie('darkMode');
const darkStyle = ref('');
darkStyle.value = darkMode.value ? '--oruga-skeleton-background: linear-gradient(90deg, #000000 25%, rgba(167, 167, 167, 0.5) 50%, #000000 75%)' : ''

// let darkStyle = ref('')
// watchEffect(() => {
//     darkStyle.value = darkMode.value ? '--oruga-skeleton-background: linear-gradient(90deg, #000000 25%, rgba(167, 167, 167, 0.5) 50%, #000000 75%)' : ''
// })
</script>

