<script setup>
import IconPlus from '../icons/IconPlus.vue';

const props = defineProps({
    date: {
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

// Manage Date Format
const date = new Date(props.date);
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);
const [day, month, year] = formattedDate.split(' ');



</script>

<template>
    <div class="max-w-sm overflow-hidden bg-white">
        <div class="flex p-6">
            <div class="rounded-full h-32 w-32 bottom-4 left-4 bg-backgroundAccent flex items-center justify-center">
                <div class="text-center">
                    <p class="
                        text-2xl
                        font-bold">{{ day }}</p>
                    <p class="text-xs
                        uppercase">{{ month }}</p>
                    <p class="text-xs
                        uppercase">{{ year }}</p>
                </div>
            </div>
        </div>
        <div class="relative px-6 pb-16">
            <div class="flex flex-col w-64">
                <div class="font-bold text-xl mb-2 w-64 uppercase">{{ title }}</div>
                <div class="text-lg font-thin">{{ desc }}</div>
            </div>
                <a :href="href" class="absolute bottom-0 right-0 bg-backgroundAccent h-16 w-16 flex items-center justify-center">
                    <div class="indicator-item">
                        <IconPlus class="" />
                    </div>
                </a>
        </div>
    </div>
</template>

<style scoped>

</style>