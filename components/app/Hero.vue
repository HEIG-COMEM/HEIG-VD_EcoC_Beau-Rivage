<template>
    <div class="relative -z-10">
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
    </div>
</template>
