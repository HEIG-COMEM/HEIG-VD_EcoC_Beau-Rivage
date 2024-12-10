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
            class="h-20 w-20 content-center justify-items-center rounded-full p-3"
        >
            <slot />
        </div>
        <span class="text-xs uppercase">{{ text }}</span>
    </div>
</template>

<style scoped></style>
