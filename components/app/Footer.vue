<script setup></script>

<template>
    <footer>
        <div
            class="flex flex-col justify-between gap-16 bg-white px-28 py-28 md:flex-row"
        >
            <div
                class="flex flex-col items-center gap-8 text-center md:items-start md:text-left"
            >
                <p class="text-2xl font-bold uppercase">Gardons le contact</p>
                <p class="text-md">
                    Abonnez-vous à notre newsletter et ne manquez plus les
                    dernières nouvelles !
                </p>
                <a class="c2a bg-backgroundSand px-8 py-5 text-xl" href="#"
                    >S’abonner à la newsletter</a
                >
            </div>
            <div
                class="flex flex-col items-center justify-center md:items-start md:self-end"
            >
                <p class="mb-4 text-sm">Suivez-nous sur :</p>
                <div class="flex flex-row items-center gap-5">
                    <a rel="noreferrer nofollow" aria-label="Facebook" href="#"
                        ><SvgFacebookLogo />
                    </a>
                    <a rel="noreferrer nofollow" aria-label="Instagram" href="#"
                        ><SvgInstagramLogo />
                    </a>
                    <a rel="noreferrer nofollow" aria-label="LinkedIn" href="#"
                        ><SvgLinkedinLogo
                    /></a>
                    <a rel="noreferrer nofollow" aria-label="Youtube" href="#"
                        ><SvgYoutubeLogo />
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-24 bg-background px-28 py-16">
            <div
                class="flex flex-col items-center justify-between gap-16 xl:flex-row"
            >
                <address class="flex flex-row gap-12 uppercase">
                    <div>
                        Hôtel Beau-Rivage Palace<br />
                        Chemin de Beau-Rivage 21<br />
                        1006 Lausanne
                    </div>
                    <div>
                        <a href="tel:+41216133333">+41 21 613 33 33</a><br />
                        <a href="mailto:info@brp.ch">info@brp.ch</a>
                    </div>
                </address>
                <div
                    class="flex max-h-14 flex-row flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="https://fr.lhw.com/"
                        rel="noreferrer nofollow"
                        aria-label="Leading Hotels of the World"
                    >
                        <SvgLeadersClubHorzLogo />
                    </a>
                    <a
                        href="https://www.swissdeluxehotels.com/"
                        rel="noreferrer nofollow"
                        aria-label="Swiss Deluxe Hotels"
                    >
                        <SvgSwissDeluxeHotelsLogo />
                    </a>
                    <a
                        href="https://www.myswitzerland.com/fr-ch/planification/vie-pratique/la-suisse-durable-par-nature/prestataires-de-services-swisstainable/#InpageNavigation1_0"
                        rel="noreferrer nofollow"
                        aria-label="Swiss Trainable"
                    >
                        <NuxtImg
                            src="/img/SwissTrainable.png"
                            preset="small"
                            class="h-14"
                        />
                    </a>
                </div>
            </div>
            <div
                class="mt-16 flex flex-col items-center justify-between gap-8 xl:mt-0 xl:flex-row"
            >
                <a
                    href="#"
                    rel="noreferrer nofollow"
                    aria-label="Sandoz Foundation Hotels"
                >
                    <SvgSandozFoundationHotel />
                </a>
                <div class="flex flex-row flex-wrap justify-center gap-4">
                    <a href="https://www.lausanne-palace.ch/accueil/"
                        >Lausanne Palace</a
                    ><a href="https://www.angleterre-residence.ch/accueil/"
                        >Angleterre & Résidence</a
                    ><a href="https://www.chateaudouchy.ch/accueil/"
                        >Château d'Ouchy</a
                    ><a href="https://www.palafitte.ch/accueil/"
                        >Hôtel Palafitte</a
                    ><a href="https://www.riffelalp.com/accueil/"
                        >Riffelalp 2222m</a
                    >
                </div>
            </div>
        </div>
        <div
            class="flex flex-col justify-between gap-8 bg-white px-28 py-7 xl:flex-row"
        >
            <nav aria-label="Secondary">
                <ul
                    class="flex flex-row flex-wrap items-center justify-center gap-4 text-xs text-tertiary"
                >
                    <li><a href="#">Galerie</a></li>
                    <li><a href="#">Carrière</a></li>
                    <li><a href="#">Le dévloppement durable</a></li>
                    <li><a href="#">Presse</a></li>
                    <li><a href="#">Fiance</a></li>
                    <li><a href="#">Plan du site</a></li>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                    <li><a href="#">Gestion des données</a></li>
                </ul>
            </nav>
            <p class="text-center text-xs text-tertiary md:text-right">
                © Beau-Rivage Palace 2023
            </p>
        </div>
    </footer>
</template>

<style scoped></style>
