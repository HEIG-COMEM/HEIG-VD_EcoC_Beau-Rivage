<script setup></script>

<template>
    <h1 class="sr-only">Spa Guerlain</h1>
    <div
        class="flex w-full flex-col items-center gap-10 px-4 pt-20 lg:px-28 xl:flex-row xl:justify-between xl:gap-0"
    >
        <div
            class="flex flex-col items-center gap-5 text-center xl:flex-row xl:gap-0 xl:text-left"
        >
            <SvgSpaGuerlain heigth="125" />
            <div>
                <p>
                    T.
                    <a href="tel:+41 21 613 33 67">+41 21 613 33 67</a>
                </p>
                <p>
                    E.
                    <a href="mailto:spa@brp.ch">spa(at)brp.ch</a>
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-10 sm:flex-row">
            <BaseSpaButton text="Brochure" href="#">
                <SvgSpaBrochure />
            </BaseSpaButton>
            <BaseSpaButton text="Réservation" href="#">
                <SvgSpaCalendar />
            </BaseSpaButton>
            <BaseSpaButton text="Bon cadeau" href="#">
                <SvgSpaGift />
            </BaseSpaButton>
        </div>
    </div>
    <div class="hr"></div>
    <div
        class="flex w-full flex-col-reverse justify-between gap-10 px-4 md:flex-row lg:px-28"
    >
        <div class="md:w-1/2">
            <h2 class="h3">Envisager le bien-être autrement</h2>
            <p class="paragraph">
                Secrètement niché dans un écrin de verdure, le Spa du
                Beau-Rivage Palace est un cocon qui agit sur le corps et
                l’esprit, offrant un profond sentiment d’apaisement et de
                sérénité. Ses matériaux nobles, chaleureux, confortables créent
                une atmosphère qui va au-delà d’un lieu de massages.
            </p>
            <p class="paragraph italic">
                Pensé comme un parcours initiatique, fait de découvertes, de
                sensations physiques et d’émotions visuelles qui invitent à un
                voyage sensoriel.
            </p>
        </div>
        <NuxtImg
            src="/img/SpaGuerlain_Interieur01-BD.png"
            class="object-cover object-left md:w-1/2"
            format="webp"
            loading="lazy"
        />
    </div>
    <div class="hr"></div>
    <div
        class="flex w-full flex-col-reverse justify-between gap-10 px-4 md:flex-row-reverse lg:px-28"
    >
        <div class="md:w-1/2">
            <h2 class="h3">Un lieu de détente</h2>
            <p class="paragraph">
                Point d’orgue du voyage, un patio orné d’un arbre de vie qui, de
                par sa lumière ondoyante, enveloppe ses hôtes sous ses branches
                réconfortantes. En complément de cette œuvre d’art, s’ajoutent
                sur <span class="font-bold">1500 m<sup>2</sup></span> les
                espaces suivants :
            </p>
            <ul class="paragraph list">
                <li>1 exceptionnelle suite double au cérémonial raffiné</li>
                <li>8 cabines pour profiter de soins et rituels</li>
                <li>
                    1 salle de relaxation réinventée invitant au lâcher-prise
                </li>
                <li>
                    1 studio de yoga et de méditation accueillant des cours
                    collectifs et individuels chaque jour
                </li>
                <li>
                    2 espaces vestiaire comprenant hammam, sauna, ice cave et
                    fontaine à glace
                </li>
                <li>
                    1 salle de fitness avec vue sur le lac animée par l'équipe
                    de coachs de Jérémy JP Peltier
                </li>
                <li>1 studio coiffure</li>
                <li>1 piscine chauffée intérieure</li>
                <li>1 piscine chauffée extérieure</li>
                <li>1 plage de sable fin</li>
                <li>1 restaurant « Ô Terrasse »</li>
                <li>
                    1 court de tennis, 1 court de padel et 1 practice de golf en
                    extérieur
                </li>
            </ul>
        </div>
        <NuxtImg
            src="/img/SpaGuerlain_Interieur02-BD.png"
            class="object-cover object-left md:w-1/2"
            format="webp"
            loading="lazy"
        />
    </div>
    <div class="hr"></div>
    <div
        class="flex w-full flex-col-reverse justify-between gap-10 px-4 md:flex-row lg:px-28"
    >
        <div class="md:w-1/2">
            <h2 class="h3">Les invités</h2>
            <p class="paragraph">
                Le Spa du Beau-Rivage Palace vous invite à vivre une expérience
                unique et à rentrer dans l'un des univers de nos spécialistes
                invités qui vous feront découvrir leurs soins et conseils.
            </p>
            <p class="paragraph">
                <span class="font-bold">Du 6 novembre au 4 décembre 2024</span>
                <br />
                Marta Gomez, une spécialiste en physiothérapie avancée et en
                médecine chinoise avec un intérêt particulier pour la santé des
                femmes.
            </p>
            <div class="mt-16 flex flex-row justify-center">
                <BaseSpaButton text="Liste des soins" href="#">
                    <SvgSpaBrochure />
                </BaseSpaButton>
            </div>
        </div>
        <NuxtImg
            src="/img/SpaGuerlain_Interieur03-BD.png"
            class="object-cover object-left md:w-1/2"
            format="webp"
            loading="lazy"
        />
    </div>
    <div class="hr"></div>
    <div class="flex flex-col justify-center px-4 text-center lg:px-28">
        <h2 class="h3">Informations pratiques</h2>
        <p class="paragraph">Ouvert tous les jours de 6h30 à 22h00.</p>
        <p class="paragraph">
            <span class="font-bold">Clients non-résidents :</span><br />
            Nos soins apportent bien-être et détente aux clients du Beau-Rivage
            Palace, comme aux visiteurs non-résidents.
        </p>
    </div>
</template>

<style scoped></style>
