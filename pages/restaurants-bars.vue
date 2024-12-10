<script setup></script>

<template>
    <div class="flex flex-col lg:flex-row">
        <div class="left-col bg-background px-28 py-20 lg:w-1/3">
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
                <h2>Informations pratiques</h2>
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
        <div class="bg-white px-28 py-20 lg:w-2/3">
            <h2>Le nouvel écrin d'Anne-Sophie Pic</h2>
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
            <h2>Midi chez PIC</h2>
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
            <div class="flex flex-row justify-between">
                <span class="path hidden xl:block xl:w-[60%]"></span>
                <button class="c2a px-8 py-5 text-xl xl:w-[35%]">
                    Les offres de séjour
                </button>
            </div>
        </div>
    </div>
    <div class="bg-background px-28 py-20">Lorem</div>
</template>

<style scoped>
.left-col > *:not(:last-child) {
    margin-bottom: 1.5rem;
}

.path {
    height: 1px;
    align-self: center;
    background-color: #e5e5e5;
}
</style>
