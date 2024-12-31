<script setup></script>

<template>
    <h1 class="sr-only">Accueil</h1>
    <AppHero />
    <div class="px-4 py-20 lg:px-28">
        <div class="mb-32 text-center">
            <p class="h4 mb-8 !font-bold">Éclat</p>
            <p class="paragraph mb-7">
                Comme un soleil déclinant offre au lac les reliefs irisés d’un
                distrait diamantaire, le terme de l’année est aussi le temps
                d’un bouquet final où se révèlent et rayonnent les plus beaux
                éclats. C’est le regard de l’enfant heureux quand y scintille
                l’émerveillement. Ce sont d’éphémères bulles évanescentes qui
                aspirent à l’explosion de joie.
            </p>
            <p class="paragraph">
                Afin que vos fêtes de Noël et de fin d’année palpitent plus
                encore qu’à l’accoutumée, un Beau-Rivage Palace éclatant vous
                proposera des rendez-vous de haute-gastronomie dans ses
                restaurants, des soins sur mesure et exclusifs dans l’écrin
                enveloppant de son Spa Guerlain et des séjours féériques dans
                ses prestigieuses Suites.
            </p>
        </div>
        <div>
            <div class="flex flex-row justify-center gap-8 sm:justify-between">
                <span class="path hidden flex-grow sm:block"></span>
                <p class="c2a px-8 py-5">Programme des Festivités</p>
            </div>
            <BaseHomeEventCard />
        </div>
    </div>
</template>

<style scoped></style>
