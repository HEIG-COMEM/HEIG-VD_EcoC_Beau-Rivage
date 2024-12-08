<template>
    <AppNav class="fixed h-screen w-24" />
    <div class="ml-24">
        <main class="bg-red-500">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
