<script setup>
const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <header class="fixed">
        <div
            class="left-column absolute z-20 flex flex-col items-center justify-between bg-backgroundSand py-4"
        >
            <div class="menu-icon" @click="isMenuOpen = !isMenuOpen">
                <SvgBurgerMenu />
                <span class="text-sm font-bold uppercase">Menu</span>
            </div>
            <div>
                <a href="#" class="py-5">
                    <SvgGift />
                </a>
            </div>
        </div>
        <nav
            class="absolute flex h-full w-screen flex-col justify-between bg-white text-xl lg:w-[27vw] lg:items-center"
            :class="{ showMenu: isMenuOpen }"
        >
            <div>
                <form action="" method="get" class="mb-8">
                    <div class="flex flex-row">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Rechercher"
                            class=""
                        />
                        <SvgSearch width="20" />
                    </div>
                </form>
                <ul>
                    <li>
                        <router-link @click="closeMenu()" to="/"
                            >Hôtel</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeMenu()" to="/rooms-suites"
                            >Chambres & Suites</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeMenu()" to="/restaurants-bars"
                            >Restaurants & Bars</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeMenu()" to="/spa"
                            >Spa Guerlain</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeMenu()" to="/meeting-event"
                            >Réunions & Évenements</router-link
                        >
                    </li>
                    <li>
                        <router-link @click="closeMenu()" to="/leaders-club"
                            >Leaders Club</router-link
                        >
                    </li>
                </ul>
            </div>
            <div>
                <div class="socials flex flex-row items-center gap-4">
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
                <div class="newsletter mt-5">
                    <a class="py-5" href="#">S’inscrire à la newsletter</a>
                </div>
                <div class="leaders-club mt-8">
                    <a
                        class="flex w-fit flex-row items-center gap-2 bg-backgroundSand px-8 py-5 text-sm font-bold uppercase"
                        href="#"
                    >
                        <SvgLeadersClubSigle /> Leaders club</a
                    >
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
nav {
    top: 0;
    left: 6rem;
    padding: 8vh 5vw;
    background-color: white;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    transform: translateX(-150%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
}

nav.showMenu {
    transform: translateX(0);
}

nav ul li:not(:last-child) {
    margin-bottom: 1.5rem;
}

.left-column {
    padding-top: 8vh;
    padding-bottom: 8vh;
    /* height: calc(100vh - 16vh); */
    height: 100%;
    width: 6rem;
    z-index: 9999;
    top: 0;
    left: 0;
}

.menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
</style>
