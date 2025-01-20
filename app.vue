<script setup>
onMounted(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then((reg) => {
                console.log('SW registered: ', reg);
            })
            .catch((err) => {
                console.log('SW registration failed: ', err);
            });
    }
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
