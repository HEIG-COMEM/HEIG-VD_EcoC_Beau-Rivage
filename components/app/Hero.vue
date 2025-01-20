<template>
    <div class="relative">
        <NuxtImg
            src="/img/home/home.png"
            class="h-[50dvh] w-full select-none object-cover"
            format="webp"
            loading="lazy"
        />
        <div
            class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center text-white"
        >
            <SvgBRPIcon class="h-12 w-12" />
            <p class="text-pretty-font text-3xl">Beau-Rivage Palace</p>
            <p class="text-xs">Lausanne Switzerland</p>
        </div>
        <div
            class="absolute bottom-0 right-0 hidden bg-backgroundAccent md:block"
        >
            <router-link
                to="/rooms-suites"
                class="c2a flex cursor-pointer flex-row items-center justify-center gap-6 p-6 font-bold uppercase"
            >
                <SvgIconPlus />
                <span>Résérvation</span>
            </router-link>
        </div>
    </div>
</template>
