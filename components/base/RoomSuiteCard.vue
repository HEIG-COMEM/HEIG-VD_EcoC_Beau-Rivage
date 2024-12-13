<script setup>
const props = defineProps({
    img: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    },
    href: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <a :href="href">
        <div class="flex flex-col overflow-hidden w-[28rem]">
            <NuxtImg format="webp" :src="img" alt="restaurant" />
            <div class="flex flex-col h-40 p-8 gap-4 bg-backgroundAccent">
                    <div class="text-xl font-bold uppercase">{{ title }}</div>
                    <div class="text-sm font-thin line-clamp-2">{{ desc }}</div>
            </div>
        </div>
    </a>
</template>

<style scoped></style>