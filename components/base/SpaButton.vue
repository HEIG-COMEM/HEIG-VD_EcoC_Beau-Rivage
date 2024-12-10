<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        default: '#',
    },
});
</script>

<template>
    <a class="justify-items-center" :href>
        <div
            class="h-20 w-20 content-center justify-items-center rounded-full bg-gray-100 p-3"
        >
            <slot />
        </div>
        <span class="text-xs uppercase">{{ text }}</span>
    </a>
</template>

<style scoped></style>
