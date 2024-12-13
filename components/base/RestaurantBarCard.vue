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
        <div class="grid overflow-hidden max-w-[32rem]">
            <NuxtImg format="webp" :src="img" alt="restaurant" class=" h-full object-cover row-span-full col-span-full" />
            <div class="flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 text-white row-span-full col-span-full">
                    <div class="text-xl uppercase">{{ title }}</div>
                    <div class="text-sm font-thin">{{ desc }}</div>
            </div>
        </div>
    </a>
</template>

<style scoped></style>
