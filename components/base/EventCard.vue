<script setup>
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
    <div class="w-96 overflow-hidden bg-white">
        <div class="flex p-6">
            <div
                class="bg-backgroundAccent bottom-4 left-4 flex h-32 w-32 items-center justify-center rounded-full"
            >
                <div class="text-center">
                    <p class="text-2xl font-bold">{{ day }}</p>
                    <p class="text-xs uppercase">{{ month }}</p>
                    <p class="text-xs uppercase">{{ year }}</p>
                </div>
            </div>
        </div>
        <div class="px-6">
            <div class="flex w-72 flex-col">
                <div class="mb-2 w-64 text-xl font-bold uppercase">
                    {{ title }}
                </div>
                <div class="text-lg font-thin">{{ desc }}</div>
            </div>
            <a
                :href="href"
                class="bg-backgroundAccent mr-[-1.5rem] flex h-16 w-16 items-center justify-center justify-self-end"
            >
                <div class="indicator-item">
                    <SvgIconPlus />
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped></style>
