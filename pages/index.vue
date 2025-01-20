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
            <div
                class="mb-12 flex flex-row justify-center gap-8 sm:justify-between"
            >
                <span class="path hidden flex-grow sm:block"></span>
                <p class="c2a px-8 py-5">Programme des Festivités</p>
            </div>
            <article class="flex flex-col gap-12">
                <BaseHomeEventCard
                    title="Les rendez-vous du beau-rivage palace"
                    subtitle="Le grand concert de l'épiphanie"
                    img="/img/home/rdv.png"
                >
                    <section class="mb-12">
                        <p class="paragraph mb-5">
                            Pensez à réserver d’ores et déjà votre place pour
                            notre grand concert de l’Épiphanie, où l’Orchestre
                            de Chambre de Lausanne – réuni au complet et dirigé
                            par son chef Renaud Capuçon – célébrera Mozart et
                            Beethoven dans notre salle d’apparat à l’occasion
                            d’un dimanche de rois.
                        </p>
                        <p class="paragraph font-bold">
                            <time datetime="2025-01-05T18:15:00"
                                >Dimanche 5 janvier 2025 à 18h15</time
                            >
                        </p>
                    </section>
                    <section>
                        <BaseHomeEventC2A text="Réserver votre place">
                            <SvgSpaCalendar />
                        </BaseHomeEventC2A>
                    </section>
                </BaseHomeEventCard>
                <div class="path w-full"></div>
                <BaseHomeEventCard
                    :isReversed="true"
                    title="La Galette des Rois"
                    img="/img/home/galette.png"
                >
                    <section class="mb-12">
                        <p class="paragraph mb-5">
                            À l’occasion de l’Épiphanie, le Beau-Rivage Palace
                            vous invite à savourer sa galette des rois,
                            disponible à l’achat dès la fin du mois de décembre.
                            Élaborée avec soin et raffinement par nos
                            pâtissiers, cette galette cache une fève unique dans
                            chacune de ses créations.
                        </p>
                        <p class="paragraph mb-5">
                            Mais cette année, parmi les 100 galettes mises en
                            vente, l’une d’elles renferme un trésor
                            exceptionnel&nbsp;: une fève en or. Le chanceux qui
                            la découvrira remportera un séjour inoubliable au
                            Beau-Rivage Palace. Une expérience gourmande à ne
                            pas manquer pour célébrer l’Épiphanie avec éclat et
                            raffinement.
                        </p>
                        <p class="paragraph italic">
                            Prix&nbsp;: CHF 55.- (6-8 personnes)<br />Contient
                            gluten, fruits à coque, œufs et lactose
                        </p>
                    </section>
                    <section>
                        <BaseHomeEventC2A text="Commande">
                            <SvgSpaGift />
                        </BaseHomeEventC2A>
                    </section>
                </BaseHomeEventCard>
                <div class="path w-full"></div>
                <BaseHomeEventCard
                    title="Séjours éclatants"
                    img="/img/home/stay.png"
                >
                    <section class="mb-12">
                        <p class="h5 mb-5 font-bold uppercase">
                            Séjour gastronomique
                        </p>
                        <p class="paragraph mb-5">
                            Pensez à réserver d’ores et déjà votre place pour
                            notre grand concert de l’Épiphanie, où l’Orchestre
                            de Chambre de Lausanne – réuni au complet et dirigé
                            par son chef Renaud Capuçon – célébrera Mozart et
                            Beethoven dans notre salle d’apparat à l’occasion
                            d’un dimanche de rois.
                        </p>
                        <a href="#" class="specialC2A"
                            >Réservez votre expérience</a
                        >
                    </section>
                    <section>
                        <p class="h5 mb-5 font-bold uppercase">
                            Séjour imagine guerlain
                        </p>
                        <p class="paragraph mb-5">
                            Vivez un séjour d’exception au Beau-Rivage Palace et
                            revivez-le à l’infini à travers la fragrance
                            Guerlain présentée dans une pièce d’art unique.
                            Offre comprenant une nuit à partir de la catégorie
                            Chambre Deluxe Lac, petit-déjeuner, accès au Spa
                            Guerlain avec un soin d’heure par personne et la
                            pièce d’exception Guerlain Imagine par Shourouk
                            Rhaiem.
                        </p>
                        <a href="#" class="specialC2A"
                            >Offrez-vous un moment privilégié</a
                        >
                    </section>
                </BaseHomeEventCard>
                <div class="path w-full"></div>
            </article>
        </div>
    </div>
</template>

<style scoped>
article :deep(p.paragraph) {
    @apply text-justify;
}

.specialC2A {
    @apply font-bold text-gray-400 underline hover:no-underline;
}
</style>
