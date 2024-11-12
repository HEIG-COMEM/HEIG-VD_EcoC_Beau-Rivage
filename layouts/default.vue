<template>
    <AppNav class="fixed h-screen w-24 bg-blue-500" />
    <div class="ml-24">
        <main class="bg-red-500">
            <slot />
        </main>
        <AppFooter class="bg-yellow-500" />
    </div>
</template>
