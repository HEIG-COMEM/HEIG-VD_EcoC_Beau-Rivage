<script setup>
const props = defineProps({
    imgPath: {
        type: String,
        required: false,
    },
    imgAlt: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: false,
    },
});

</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="flex relative">
            <img class="w-full" :src="imgPath" :alt="imgAlt">
            <div class="absolute rounded-full h-32 w-32 bottom-4 left-4 bg-black bg-opacity-75 flex items-center justify-center">
                <div class="text-center">
                    <p class="text-white
                        text-2xl
                        font-bold">{{ date.split(' ')[0] }}</p>
                    <p class="text-white
                        text-sm
                        uppercase">{{ date.split(' ')[1] }}.</p>
                    <p class="text-white
                        text-sm
                        uppercase">{{ date.split(' ')[2] }}</p>
                </div>
            </div>
        </div>
        <div class="relative px-6 pt-6 pb-16">
            <div class="font-bold text-xl mb-2 w-64 uppercase">{{ title }}</div>
                <a :href="href" class="absolute bottom-0 right-0 bg-stone-200 h-16 w-16 flex items-center justify-center">
                    <div class="indicator-item">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_75_286)">
                                <path
                                    d="M24.3301 11.6401H1.33008C0.777793 11.6401 0.330078 12.0879 0.330078 12.6401C0.330078 13.1924 0.777793 13.6401 1.33008 13.6401H24.3301C24.8824 13.6401 25.3301 13.1924 25.3301 12.6401C25.3301 12.0879 24.8824 11.6401 24.3301 11.6401Z"
                                    fill="black" />
                                <path
                                    d="M11.8301 1.14014L11.8301 24.1401C11.8301 24.6924 12.2778 25.1401 12.8301 25.1401C13.3824 25.1401 13.8301 24.6924 13.8301 24.1401L13.8301 1.14014C13.8301 0.587852 13.3824 0.140137 12.8301 0.140137C12.2778 0.140137 11.8301 0.587852 11.8301 1.14014Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_75_286">
                                    <rect width="26" height="26" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
        </div>
    </div>
</template>

<style scoped>

</style>