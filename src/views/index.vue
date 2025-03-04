<template>
    <div ref="main">
        <section id="home"></section>
        <section id="career">
            <!-- <h1>About Me</h1> -->
            <!-- <p>안녕하세요 ???입니다.</p> -->
            <div class="flex">
                <Card v-for="(item, idx) in carrerList" :item="item" :key="idx" />
            </div>
        </section>
        <section id="skills"></section>
        <section id="work">
            <ToggleMessage :list="faq" />
        </section>
        <section id="contact"></section>
    </div>
</template>

<script setup>
import Card from './career/components/Card.vue';
import ToggleMessage from '@/components/toggleMessage/list';
import { onMounted, reactive, ref } from 'vue';
import { useMain } from '../store/main';

const store = useMain();

const { faq } = store;

const carrerList = reactive([]);

const fetchDatas = () => {
    for (let i = 0; i < 3; i++) {
        carrerList.push({
            title: `타이틀${i}`,
            description: `description${i}`,
        });
    }
};

onMounted(() => {
    fetchDatas();
});
</script>

<style lang="scss" scoped></style>
