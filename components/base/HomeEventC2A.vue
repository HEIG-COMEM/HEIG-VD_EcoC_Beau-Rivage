<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="justify-items-center text-center">
        <div
            class="flex min-h-20 min-w-20 items-center justify-center rounded-full bg-gray-100 p-6"
        >
            <slot />
        </div>
        <span class="text-xs font-bold uppercase tracking-widest">{{
            text
        }}</span>
    </div>
</template>

<style scoped></style>
