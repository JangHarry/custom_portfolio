<template>
    <div>
        <p @click="showItem">{{ item.title }}</p>
        <!-- <div v-html="item.content"></div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { item, activeItem } = defineProps({
    item: {},
    activeItem: {},
});

const emit = defineEmits(['showItem']);

const showItem = () => {
    emit('showItem', item);
};
</script>

<style lang="scss" scoped></style>
