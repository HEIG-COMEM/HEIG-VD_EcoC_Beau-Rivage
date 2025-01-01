<script setup>
defineProps({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    isReversed: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <article
        class="flex flex-col items-center gap-5 lg:flex-row lg:items-start"
        :class="{ 'lg:flex-row-reverse': isReversed }"
    >
        <NuxtImg
            :src="img"
            format="webp"
            quality="80"
            alt=""
            class="w-full object-cover lg:w-1/2"
        />
        <div class="lg:w-1/2">
            <header class="mb-5">
                <h2 class="h3 uppercase">
                    {{ title }}
                </h2>
                <p class="h5 font-bold uppercase" v-if="subtitle">
                    {{ subtitle }}
                </p>
            </header>
            <slot />
        </div>
    </article>
</template>

<style scoped></style>
