<template>
    <Header />
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
    <Footer />
</template>

<script setup>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
</script>

<style lang="scss" scoped></style>
