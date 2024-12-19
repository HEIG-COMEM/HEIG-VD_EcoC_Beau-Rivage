<script setup>
const isMenuOpen = ref(false);
const closeMenu = () => (isMenuOpen.value = false);
</script>
<template>
    <AppNav
        class="fixed h-screen w-24"
        :isMenuOpen
        @toggleMenu="isMenuOpen = !isMenuOpen"
        @closeMenu="closeMenu()"
    />
    <div class="ml-24 w-fit">
        <main @click="closeMenu()">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
