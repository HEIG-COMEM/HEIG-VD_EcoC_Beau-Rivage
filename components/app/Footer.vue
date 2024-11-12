<script setup></script>

<template>
    <footer>
        <div class="flex flex-row bg-white">
            <div class="footer-img hidden w-[50%] md:block"></div>
            <div
                class="flex flex-col items-center gap-8 px-28 py-20 md:items-start"
            >
                <p class="text-2xl">Gardons le contact</p>
                <p class="text-sm">
                    Abonnez-vous à notre newsletter et ne manquez plus les
                    dernières nouvelles !
                </p>
                <a class="px-5 py-9 text-xl">S’abonner à la newsletter</a>
                <div>
                    <p class="mb-4 text-sm">Suivez-nous sur :</p>
                    <div class="flex flex-row items-center gap-5">
                        <a rel="noreferrer nofollow" aria-label="Facebook"
                            ><SvgFacebookLogo />
                        </a>
                        <a rel="noreferrer nofollow" aria-label="Instagram"
                            ><SvgInstagramLogo />
                        </a>
                        <a rel="noreferrer nofollow" aria-label="LinkedIn"
                            ><SvgLinkedinLogo
                        /></a>
                        <a rel="noreferrer nofollow" aria-label="Youtube"
                            ><SvgYoutubeLogo />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-background flex flex-col gap-24 px-28 py-16">
            <div
                class="flex flex-col items-center justify-between gap-16 xl:flex-row"
            >
                <address class="flex flex-row gap-12 text-lg">
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
                    <SvgLeadersClubHorzLogo />
                    <SvgSwissDeluxeHotelsLogo />
                    <img src="/img/SwissTrainable.png" class="h-14" />
                </div>
            </div>
            <div
                class="mt-16 flex flex-col items-center justify-between gap-8 xl:mt-0 xl:flex-row"
            >
                <SvgSandozFoundationHotel />
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
                    class="flex flex-row flex-wrap items-center justify-center gap-4"
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
            <p class="text-right">© Beau-Rivage Palace 2023</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-img {
    background-image: url('/img/contact.png');
    background-size: cover;
    background-position: center;
}
</style>
