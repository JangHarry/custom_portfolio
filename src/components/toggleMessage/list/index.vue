<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.no">
                <ToggleMessageDetail :item="item" :activeItem="activeItem" @showItem="showItem" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ToggleMessageDetail from '../item/index.vue';

defineProps({
    list: {},
});

const activeItem = ref(0);

const showItem = (item) => {
    console.log('showItem click ==>', item);

    // if (activeItem.value === item.no) {
    //     activeItem.value = 0;
    // } else {
    //     activeItem.value = item.no;
    // }
};
</script>

<style lang="scss" scoped></style>
