<script setup>
const route = useRoute();
const roomId = ref(route.params.id);

const room = ref(null);
const isLoading = ref(true);

useFetch(`/api/rooms?id=${roomId.value}`).then((data) => {
    room.value = data.data;
    isLoading.value = false;
});
</script>

<template>
    {{ route.params.id }}
    {{ room }}
    {{ isLoading }}
</template>

<style scoped></style>
