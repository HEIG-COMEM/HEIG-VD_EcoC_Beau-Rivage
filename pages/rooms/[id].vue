<script setup>
const route = useRoute();
const roomId = ref(route.params.id);

const room = ref(null);
const isLoading = ref(true);

useFetch(`/api/rooms?id=${roomId.value}`).then((data) => {
    room.value = data.data.value;
    isLoading.value = false;
});

const gallery = computed(() => {
    if (!room.value || !room.value.gallery) return [];

    const links = [];
    for (let i = 1; i <= 4; i++) {
        links.push(`${room.value.gallery.path}/${i}.png`);
    }

    return links;
});
</script>

<template>
    <template v-if="isLoading">
        <div class="flex h-screen items-center justify-center">...</div>
    </template>
    <template v-else>
        <div class="flex flex-col gap-4 px-28 py-20 md:flex-row md:gap-8">
            <div class="w-auto md:w-1/3">
                <h1 class="h4">Chambre {{ room.title }}</h1>
                <p class="mb-6">{{ room.longDesc }}</p>
                <div class="path"></div>
                <h2 class="my-6">Informations pratiques</h2>
                <ul class="paragraph list">
                    <li v-html="room.details.size"></li>
                    <li>
                        {{
                            room.details.wifi
                                ? 'Accès internet gratuit'
                                : 'Accès internet payant'
                        }}
                    </li>
                    <li
                        v-if="room.details.package"
                        v-for="(addon, index) in room.details.package"
                        :key="index"
                        v-html="addon"
                    ></li>
                </ul>
                <button class="c2a mt-6 px-8 py-5 text-xl">Réserver</button>
            </div>
            <div
                class="flex w-auto flex-col justify-center gap-2 sm:flex-row sm:flex-wrap md:w-2/3"
            >
                <NuxtImg
                    v-for="(img, index) in gallery"
                    :key="index"
                    :src="img"
                    format="webp"
                    class="w-full object-cover md:w-auto"
                />
            </div>
        </div>
    </template>
    <AppPackages class="bg-background px-28 py-20" />
</template>

<style scoped>
h2 {
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.375rem; /* 110% */
    letter-spacing: 0.03125rem;
    text-transform: uppercase;
}
</style>
