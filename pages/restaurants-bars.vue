<script setup>
const restaurants = ref([
    {
        img: '/img/restaurants/1.png',
        title: 'PIC au Beau-Rivage Palace',
        desc: 'Restaurant gastronomique',
    },
    {
        img: '/img/restaurants/2.png',
        title: 'Café Beau-Rivage',
        desc: 'Brasserie de luxe',
    },
    {
        img: '/img/restaurants/3.png',
        title: 'Kaigan',
        desc: 'Restaurant japonais',
    },
]);

const showLoadMore = ref(true);

const loadMore = async () => {
    const { data } = await useFetch('/api/restaurants');

    restaurants.value.push(...data.value);

    const uniqueRestaurants = restaurants.value.filter(
        (restaurant, index, self) =>
            index ===
            self.findIndex(
                (t) =>
                    t.title === restaurant.title && t.desc === restaurant.desc
            )
    );

    restaurants.value = uniqueRestaurants;
    showLoadMore.value = false;
};
</script>

<template>
    <h1 class="sr-only">Restaurant Anne-Sophie Pic</h1>
    <div class="flex flex-col lg:flex-row">
        <div
            class="left-col justify-items-center bg-backgroundHaze px-4 py-20 lg:w-1/3 lg:px-28"
        >
            <NuxtImg src="/img/PIC.png" />
            <address class="text-center text-sm">
                Chemin de Beau-Rivage 21
                <br />
                CH - 1006 Lausanne
                <br />
                <a href="mailto:pic@brp.ch">pic@brp.ch</a>
                <br />
                <a href="tel:+41216133339">+41 21 613 33 39</a>
            </address>
            <div class="flex flex-row items-center justify-center gap-4">
                <div class="flex flex-row gap-1">
                    <SvgRestaurantMichelinStar />
                    <SvgRestaurantMichelinStar />
                </div>
                <SvgRestaurantGaultMillau />
            </div>
            <div class="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2">
                <BaseRestaurantTag text="Menu">
                    <SvgRestaurantMenu />
                </BaseRestaurantTag>
                <BaseRestaurantTag text="Boissons créatives">
                    <SvgSpaBrochure />
                </BaseRestaurantTag>
                <BaseRestaurantTag text="Les vins">
                    <SvgRestaurantWine />
                </BaseRestaurantTag>
                <BaseRestaurantTag text="Réservations">
                    <SvgSpaCalendar />
                </BaseRestaurantTag>
                <BaseRestaurantTag text="Bon cadeau">
                    <SvgSpaGift />
                </BaseRestaurantTag>
            </div>
            <div>
                <h2 class="h3">Informations pratiques</h2>
                <p class="paragraph text-xs">
                    <span class="font-bold"
                        >Du mardi au samedi : de 12h00 à 13h30 et de 19h00 à
                        21h30</span
                    ><br />
                    Fermé dimanche et lundi
                </p>
                <p class="paragraph text-xs">
                    Le parking de l'hôtel est disponible et offert à la
                    clientèle du restaurant.<br />
                    Terrasse ouverte lors des jours de beau temps.<br />
                    Chiens non admis.
                </p>
            </div>
        </div>
        <div class="bg-white px-4 py-20 lg:w-2/3 lg:px-28">
            <h3 class="h3">Le nouvel écrin d'Anne-Sophie Pic</h3>
            <p class="paragraph">
                L’univers d’Anne-Sophie Pic au Beau-Rivage Palace à Lausanne,
                c’est bien plus qu’un restaurant, c’est un cheminement en terres
                helvétiques qui dure depuis 15 ans ! 15 ans de rencontres, de
                création, de dégustation, de cueillettes en forêt, de
                contemplation...
            </p>
            <p class="paragraph">
                Dans les carnets qui ne la quittent jamais, la Cheffe trace les
                contours d’une précieuse mémoire, dessinée comme un chemin
                méticuleusement balisé. La Suisse est l’un de ses terroirs
                favoris, tant il nourrit son esprit et l’inspire. Elle y puise
                aussi la tendresse de l’enfance, qu’elle connut lors des
                retrouvailles familiales en terres vaudoises, et qu’elle aimait
                tant.
            </p>
            <p class="paragraph">
                Le nouvel écrin PIC au Beau-Rivage Palace à Lausanne a été
                imaginé et façonné par la Cheffe dans le prolongement de sa
                philosophie culinaire. Sous la direction de l’architecte Tristan
                Auer, le restaurant se fait aussi chemin, combinant des espaces
                aux promesses complémentaires.
            </p>
            <p class="paragraph">
                De ces producteurs et artisans suisses, Anne-Sophie Pic en a
                confié tous les secrets à son Chef Jordan Theurillat, qui lui
                est fidèle depuis plus de 10 ans dont 5 ans passés à Lausanne.
                Dominique Peretti issu lui aussi de la maison Pic sera en charge
                des accords et de la magnifique carte des vins. Enfin, en salle,
                Diane Blanch, directrice du restaurant lausannois depuis 2021,
                inscrit l’expérience lausannoise au cœur des valeurs
                d’Anne-Sophie Pic.
            </p>
            <p class="paragraph">
                Les deux maisons qui ont lié leur destin il y a 15 ans, se
                réjouissent de cette nouvelle page à écrire ensemble, au service
                des valeurs de la Belle Hôtellerie et de la préservation des
                savoir-faire d’excellence.
            </p>
            <hr />
            <h3 class="h3">Midi chez PIC</h3>
            <p class="paragraph">
                "J’ai imaginé le menu ViaRhôna en 3 séquences pour les repas
                d’affaires ou les rendez-vous entre amis, servi en moins de deux
                heures et accordé de boissons créatives avec ou sans alcool."
            </p>
            <p class="paragraph">
                Salle à manger, grande table, terrasse ou bar, le nouvel écrin
                de Pic au Beau-Rivage Palace fera des vos invitations des
                moments hors du temps en peu de temps.
            </p>
            <p class="paragraph">
                Salle à manger, grande table, terrasse ou bar, le nouvel écrin
                de Pic au Beau-Rivage Palace fera des vos invitations des
                moments hors du temps en peu de temps.
            </p>
            <p class="paragraph italic">
                Valable les midis du mardi au vendredi<br />
                Menu dès CHF 160.- hors boissons<br />
                Parking offert
            </p>
            <div class="flex flex-row justify-between gap-8">
                <span class="path flex-grow"></span>
                <button class="c2a px-8 py-5 text-xl">
                    Les offres de séjour
                </button>
            </div>
        </div>
    </div>
    <div class="bg-background px-4 py-20 lg:px-28">
        <div class="mb-8 flex flex-row items-center gap-x-8">
            <h2 class="h2 !mb-0">Agenda</h2>
            <span class="path flex-grow"></span>
            <button class="c2a px-8 py-5 text-xl">Voir tout l'agenda</button>
        </div>
        <div class="flex flex-row flex-wrap justify-center gap-8">
            <BaseEventPackageCard
                title="Brunch festif du Nouvel An"
                date="2025-01-01"
                desc="Un brunch de nouvel an dans une de nos plus belles salle à manger de l’hôtel ..."
            />
            <BaseEventPackageCard
                title="Brunch festif du Nouvel An"
                date="2025-01-01"
                desc="Un brunch de nouvel an dans une de nos plus belles salle à manger de l’hôtel ..."
            />
            <BaseEventPackageCard
                title="Brunch festif du Nouvel An"
                date="2025-01-01"
                desc="Un brunch de nouvel an dans une de nos plus belles salle à manger de l’hôtel ..."
            />
        </div>
    </div>
    <div class="bg-white px-4 py-20 lg:px-28">
        <h2 class="h2">Restaurants & Bars</h2>
        <div class="flex flex-col">
            <div class="flex flex-row flex-wrap gap-2">
                <BaseRestaurantBarCard
                    v-for="restaurant in restaurants"
                    :key="restaurant.title"
                    :img="restaurant.img"
                    :title="restaurant.title"
                    :desc="restaurant.desc"
                />
            </div>
            <div
                class="mt-8 flex flex-row justify-center gap-8"
                v-show="showLoadMore"
            >
                <span class="path flex-grow"></span>
                <button class="c2a px-8 py-5" @click="loadMore">
                    Voir plus
                </button>
                <span class="path flex-grow"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-col > *:not(:last-child) {
    margin-bottom: 2.5rem;
}
</style>
