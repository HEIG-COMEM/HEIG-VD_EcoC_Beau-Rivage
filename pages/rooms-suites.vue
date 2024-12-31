<script setup>
const rooms = ref([
    {
        id: 1,
        img: '/img/rooms/1.png',
        title: 'Supérieure vue ville',
        desc: "D'une superficie moyenne de 28m2, ces chambres ont une vue sur la ville et les jardins.",
    },
    {
        id: 2,
        img: '/img/rooms/2.png',
        title: 'Supérieure vue lac & alpes',
        desc: "D'une superficie moyenne de 32m2, ces chambres ont la vue sur le lac ou le port d'Ouchy.",
    },
    {
        id: 3,
        img: '/img/rooms/3.png',
        title: 'Deluxe',
        desc: "D'une superficie moyenne de 45m2, ces chambres bénéficient d'un coin salon et ont la vue sur le lac ou sur les jardins.",
    },
]);

const suites = ref([
    {
        id: 1,
        img: '/img/suites/1.png',
        title: 'PIC au Beau-Rivage Palace',
        desc: 'Restaurant gastronomique',
    },
    {
        id: 2,
        img: '/img/suites/2.png',
        title: 'Café Beau-Rivage',
        desc: 'Brasserie de luxe',
    },
    {
        id: 3,
        img: '/img/suites/3.png',
        title: 'Kaigan',
        desc: 'Restaurant japonais',
    },
]);

const showLoadMoreRooms = ref(true);
const showLoadMoreSuites = ref(true);

const loadMoreRooms = async () => {
    const { data } = await useFetch('/api/rooms');

    rooms.value.push(...data.value);

    const uniqueRooms = rooms.value.filter(
        (room, index, self) =>
            index ===
            self.findIndex(
                (t) => t.title === room.title && t.desc === room.desc
            )
    );

    rooms.value = uniqueRooms;
    showLoadMoreRooms.value = false;
};
const loadMoreSuites = async () => {
    const { data } = await useFetch('/api/suites');

    suites.value.push(...data.value);

    const uniqueSuites = suites.value.filter(
        (suite, index, self) =>
            index ===
            self.findIndex(
                (t) => t.title === suite.title && t.desc === suite.desc
            )
    );

    suites.value = uniqueSuites;
    showLoadMoreSuites.value = false;
};
</script>

<template>
    <h1 class="sr-only">Chambres & Suites</h1>
    <div class="mb-20 px-4 py-20 lg:px-28">
        <div class="mb-20">
            <div class="flex flex-row">
                <h2 class="h2 !mb-0 pr-8">Chambres</h2>
                <span class="path flex-grow"></span>
            </div>
            <div class="mt-12 flex flex-row flex-wrap gap-2">
                <BaseRoomSuiteCard
                    v-for="room in rooms"
                    :key="room.id"
                    :img="room.img"
                    :title="room.title"
                    :desc="room.desc"
                    :href="'/rooms/' + room.id"
                />
            </div>
            <div
                class="mt-8 flex flex-row justify-center gap-8"
                v-show="showLoadMoreRooms"
            >
                <span class="path flex-grow"></span>
                <button class="c2a px-8 py-5" @click="loadMoreRooms()">
                    Voir plus
                </button>
                <span class="path flex-grow"></span>
            </div>
        </div>
        <div>
            <div class="flex flex-row">
                <h2 class="h2 !mb-0 pr-8">Suites</h2>
                <span class="path flex-grow"></span>
            </div>
            <div class="mt-12 flex flex-row flex-wrap gap-2">
                <BaseRoomSuiteCard
                    v-for="suite in suites"
                    :key="suite.id"
                    :img="suite.img"
                    :title="suite.title"
                    :desc="suite.desc"
                    :href="'/suites/' + suite.id"
                />
            </div>
            <div
                class="mt-8 flex flex-row justify-center gap-8"
                v-show="showLoadMoreSuites"
            >
                <span class="path flex-grow"></span>
                <button class="c2a px-8 py-5" @click="loadMoreSuites()">
                    Voir plus
                </button>
                <span class="path flex-grow"></span>
            </div>
        </div>
    </div>
    <AppPackages class="bg-background px-4 py-20 lg:px-28" />
</template>

<style scoped></style>
